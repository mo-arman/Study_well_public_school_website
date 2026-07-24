import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    // 8 hours — reasonable for a school ERP session, avoids people staying
    // logged in forever on shared/school computers.
    maxAge: 8 * 60 * 60
  },
  pages: {
    // We use three separate branded login pages instead of NextAuth's
    // default page. If a session is required and missing, middleware sends
    // people to /erp/student as a sane default entry point.
    signIn: "/erp/student"
  },
  providers: [
    CredentialsProvider({
      id: "student",
      name: "Student",
      credentials: {
        username: { label: "Student ID", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: (creds) => authorize(creds, "STUDENT")
    }),
    CredentialsProvider({
      id: "parent",
      name: "Parent",
      credentials: {
        username: { label: "Mobile Number", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: (creds) => authorize(creds, "PARENT")
    }),
    CredentialsProvider({
      id: "teacher",
      name: "Teacher",
      credentials: {
        username: { label: "Employee ID", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: (creds) => authorize(creds, "TEACHER")
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role: "STUDENT" | "PARENT" | "TEACHER" }).role;
        token.classSection = (user as { classSection: string | null }).classSection;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as "STUDENT" | "PARENT" | "TEACHER";
        session.user.classSection = token.classSection as string | null;
      }
      return session;
    }
  }
};

// Shared authorize logic for all three Credentials providers: look up the
// account by username, confirm the role matches the portal used, confirm
// it's active, and check the password hash.
async function authorize(
  creds: Record<"username" | "password", string> | undefined,
  role: "STUDENT" | "PARENT" | "TEACHER"
) {
  if (!creds?.username || !creds?.password) return null;

  const account = await prisma.erpUser.findUnique({
    where: { username: creds.username.trim() }
  });

  if (!account || !account.active || account.role !== role) return null;

  const valid = await bcrypt.compare(creds.password, account.passwordHash);
  if (!valid) return null;

  return {
    id: account.id,
    name: account.name,
    role: account.role,
    classSection: account.classSection
  };
}

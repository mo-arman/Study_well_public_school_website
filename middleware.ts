import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Protects everything under /erp/dashboard. Each of the three login pages
// (/erp/student, /erp/parent, /erp/teacher) redirects here on success; this
// middleware makes sure nobody can reach the dashboard without a valid
// session, and that a Student session can't view Teacher data etc.
export default withAuth(
  function middleware(req) {
    const role = req.nextauth.token?.role;
    const path = req.nextUrl.pathname;

    if (path.startsWith("/erp/dashboard/student") && role !== "STUDENT") {
      return NextResponse.redirect(new URL("/erp/student", req.url));
    }
    if (path.startsWith("/erp/dashboard/parent") && role !== "PARENT") {
      return NextResponse.redirect(new URL("/erp/parent", req.url));
    }
    if (path.startsWith("/erp/dashboard/teacher") && role !== "TEACHER") {
      return NextResponse.redirect(new URL("/erp/teacher", req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
    pages: {
      signIn: "/erp/student"
    }
  }
);

export const config = {
  matcher: ["/erp/dashboard/:path*"]
};

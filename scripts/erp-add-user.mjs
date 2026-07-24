// Interactive tool to create a Student / Parent / Teacher ERP login.
// There is no public signup on purpose — the school office creates every
// account. Run with: npm run erp:add-user
//
// Usage tip: run it once per student/parent/teacher. It's fine to run it
// many times in a row — it'll ask again after each account is created.

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const prisma = new PrismaClient();
const rl = readline.createInterface({ input: stdin, output: stdout });

const ask = async (question) => (await rl.question(question)).trim();

function randomPassword() {
  // Simple, readable temporary password — e.g. "sw-482917". The school
  // should ask the person to note it down; there's no "forgot password"
  // flow yet, so re-run this script with the same username to reset one.
  return "sw-" + Math.floor(100000 + Math.random() * 900000);
}

async function main() {
  console.log("\n== Add a new ERP login ==\n");

  let roleInput = "";
  while (!["1", "2", "3"].includes(roleInput)) {
    roleInput = await ask("Account type — 1) Student  2) Parent  3) Teacher: ");
  }
  const role = { "1": "STUDENT", "2": "PARENT", "3": "TEACHER" }[roleInput];

  const name = await ask("Full name: ");

  const usernameHint =
    role === "STUDENT" ? "Student ID / Admission No." : role === "PARENT" ? "Registered Mobile Number" : "Employee ID";
  const username = await ask(`${usernameHint}: `);

  const classSectionInput = await ask("Class/Section (e.g. 'Class VIII-B', leave blank if N/A): ");
  const classSection = classSectionInput || null;

  let password = await ask("Password (leave blank to auto-generate one): ");
  if (!password) {
    password = randomPassword();
  }

  const existing = await prisma.erpUser.findUnique({ where: { username } });
  if (existing) {
    const overwrite = await ask(
      `An account with username "${username}" already exists (${existing.role}, ${existing.name}). Reset their password instead? (y/n): `
    );
    if (overwrite.toLowerCase() !== "y") {
      console.log("Cancelled — no changes made.");
      await cleanup();
      return;
    }
    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.erpUser.update({
      where: { username },
      data: { passwordHash, active: true }
    });
    console.log(`\n✅ Password reset for ${existing.name} (${username}).`);
    console.log(`   New password: ${password}\n`);
    await cleanup();
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.erpUser.create({
    data: { name, username, passwordHash, role, classSection }
  });

  console.log("\n✅ Account created:");
  console.log(`   Name: ${name}`);
  console.log(`   Role: ${role}`);
  console.log(`   Login ID: ${username}`);
  console.log(`   Password: ${password}`);
  console.log("\nShare the Login ID and Password with them directly — write it down now, it won't be shown again.\n");

  await cleanup();
}

async function cleanup() {
  rl.close();
  await prisma.$disconnect();
}

main().catch(async (err) => {
  console.error("Something went wrong:", err.message);
  await cleanup();
  process.exit(1);
});

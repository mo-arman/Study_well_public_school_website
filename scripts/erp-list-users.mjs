// Lists every ERP account (never shows passwords). Run with:
//   npm run erp:list-users

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.erpUser.findMany({
    orderBy: [{ role: "asc" }, { name: "asc" }]
  });

  if (users.length === 0) {
    console.log("No ERP accounts yet. Create one with: npm run erp:add-user");
    return;
  }

  console.log(`\n${users.length} ERP account(s):\n`);
  for (const u of users) {
    const status = u.active ? "" : "  [DISABLED]";
    console.log(
      `- [${u.role}] ${u.name} — login: ${u.username}${u.classSection ? ` — ${u.classSection}` : ""}${status}`
    );
  }
  console.log("");
}

main()
  .catch((err) => console.error("Something went wrong:", err.message))
  .finally(() => prisma.$disconnect());

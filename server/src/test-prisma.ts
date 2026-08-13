import { prisma } from "./config/prisma.ts";

async function main() {
  try {
    const user = await prisma.users.create({
      data: {
        name: "Tung 2",
        email: "tung2@test.com",
        password: "123456",
      },
    });

    console.log("User created:");
    console.log(user);

    const users = await prisma.users.findMany();

    console.log("All users:");
    console.log(users);
  } catch (error) {
    console.error("Database error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
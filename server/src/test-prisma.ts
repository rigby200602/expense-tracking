import { prisma } from "./config/prisma.ts";

async function testPrisma() {
  try {
    const users = await prisma.users.findMany();

    console.log("Database connected!");
    console.log(users);
  } catch (error) {
    console.error("Database connection failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testPrisma();
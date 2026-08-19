import { prisma } from "./config/prisma.ts";

async function main() {
  try {
    // add a new user to the database
    // const user = await prisma.users.create({
    //   data: {
    //     name: "Tung 2",
    //     email: "tung3@test.com",
    //     password: "123456",
    //   },
    // });
    const foundUser = await prisma.users.findMany({
      where: {
        categories: {
          some: {},
        },
      },
    }
    )
    console.log("Found:")
    console.log(foundUser)
  } catch (error) {
    console.error("Database error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
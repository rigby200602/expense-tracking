import { prisma } from "./config/prisma.ts";

async function main() {
  try {
    // add a new user to the database
    // const user = await prisma.users.create({
    //   data: {
    //     name: "Tung 2",
    //     email: "tung2@test.com",
    //     password: "123456",
    //   },
    // });
    // find users in the database
    // const foundUser = await prisma.users.findUnique({
    //   where: {
    //     email: "tung@test.com",
    //   },
    //   include: {
    //     categories: true,
    //     transactions: true,
    //   },
    // });
    // console.log("Found user:");
    // console.log(foundUser);
    // update user in the database
    const updatedUser = await prisma.users.update({
      where: {
        email: "tung@test.com",
      },
      data: {
        name: "Tung Updated",
      },
    });

    console.log("Updated user:");
    console.log(updatedUser);

    // const users = await prisma.users.findMany();

    // console.log("All users:");
    // console.log(users);
  } catch (error) {
    console.error("Database error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
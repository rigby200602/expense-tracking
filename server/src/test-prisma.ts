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
    const user = await prisma.users.findUnique({
      where: {
        email: "tung@test.com",
      },
    });
    const categorie = await prisma.categories.create({
      data: {
        name: "Food",
        type: "expense",
        color: "red",
        icon: "food",
        user_id: user!.id,
      },
    })
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
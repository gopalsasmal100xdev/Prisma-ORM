import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  const user = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com",
      },
    },
    include: {
      posts: true,
    },
  });
  console.log(JSON.stringify(user));
}

main()
  .then(async () => {
    console.log("Data successfully fetch!");
    await prisma.$disconnect();
  })
  .catch(async () => {
    console.log("Data successfully fetch!");
    await prisma.$disconnect();
  });

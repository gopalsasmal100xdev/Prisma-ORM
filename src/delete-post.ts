import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const data = await prisma.post.deleteMany({
    where: {
      id: {
        gt: 40,
      },
    },
  });
  console.log(data);
}

main()
  .then(() => {
    console.log("done");
    prisma.$disconnect();
  })
  .catch(() => {
    console.log("Error");
    prisma.$disconnect();
    process.exit(1);
  });

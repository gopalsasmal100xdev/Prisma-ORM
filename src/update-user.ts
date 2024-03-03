import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const data = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "Harkirat Singh",
    },
  });
  console.log(data);
}

main()
  .then(() => {
    console.log("Done");
    prisma.$disconnect();
  })
  .catch(() => {
    console.log("Error");
    prisma.$disconnect();
    process.exit(1);
  });

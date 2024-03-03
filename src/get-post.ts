import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.findMany({
    skip: 10,
    take: 10,
  });
  console.log(posts);
}

main()
  .then(() => {
    console.log("Done");
    prisma.$disconnect();
  })
  .catch(() => {
    console.log("error");
    prisma.$disconnect();
    process.exit(1);
  });

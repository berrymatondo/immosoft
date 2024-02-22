import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("123", 12);

  const user = await prisma.user.upsert({
    where: {
      email: "aaa@gmail.com",
    },
    update: {},
    create: {
      email: "aaa@gmail.com",
      password: hashedPassword,
      name: "",
    },
  });

  //  console.log({ user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

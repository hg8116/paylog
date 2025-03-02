import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

async function main() {

  const existingUsers = await prisma.user.findMany()
  if(existingUsers.length > 0){
    console.log("Database already seeded. Skipping...")
    return;
  }

  const raman = await prisma.user.upsert({
    where: { email: "raman@gmail.com" },
    update: {},
    create: {
      email: "raman@gmail.com",
      name: "Raman",
      password: bcrypt.hashSync("password1", 12),
    },
  });
  const rahul = await prisma.user.upsert({
    where: { email: "rahul@gmail.com" },
    update: {},
    create: {
      email: "rahul@gmail.com",
      name: "Rahul",
      password: bcrypt.hashSync("password2", 12),
    },
  });
  const arav = await prisma.user.upsert({
    where: { email: "arav@gmail.com" },
    update: {},
    create: {
      email: "arav@gmail.com",
      name: "Arav",
      password: bcrypt.hashSync("password3", 12),
    },
  });
  const chirag = await prisma.user.upsert({
    where: { email: "chirag@gmail.com" },
    update: {},
    create: {
      email: "chirag@gmail.com",
      name: "Chirag",
      password: bcrypt.hashSync("password4", 12),
    },
  });
  const rao = await prisma.user.upsert({
    where: { email: "rao@gmail.com" },
    update: {},
    create: {
      email: "rao@gmail.com",
      name: "Rao",
      password: bcrypt.hashSync("password5", 12),
    },
  });
  console.log({ raman, rahul, arav, chirag, rao });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });

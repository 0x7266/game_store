import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy users
  const password1 = await bcrypt.hash('password1', 10);
  const password2 = await bcrypt.hash('password2', 10);

  await prisma.user.upsert({
    where: { email: 'user1@test.com' },
    update: {
      password: password1,
    },
    create: {
      name: 'user1',
      email: 'user1@test.com',
      username: 'user1',
      password: password1,
    },
  });
  await prisma.user.upsert({
    where: { email: 'user2@test.com' },
    update: {
      password: password2,
    },
    create: {
      name: 'user2',
      email: 'user2@test.com',
      username: 'user2',
      password: password2,
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close the Prisma Client at the end
    await prisma.$disconnect();
  });

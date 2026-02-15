import { PrismaPg } from '@prisma/adapter-pg';
import { Prisma, PrismaClient } from '../app/generated/prisma/client';

import 'dotenv/config';

import bcrypt from 'bcrypt';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  const hashedPassword = await bcrypt.hash('@User123', 10);

  const userData: Prisma.UserCreateInput[] = [
    {
      username: 'Alice123',
      password: hashedPassword,
    },
    {
      username: 'Ben01',
      password: hashedPassword,
    },
    {
      username: 'Kurty321',
      password: hashedPassword,
    },
  ];

  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();

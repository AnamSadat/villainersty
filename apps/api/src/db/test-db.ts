import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('✔ Connected to PostgreSQL!');
  } catch (error) {
    console.log('Failed to connect to PostgreSQL:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

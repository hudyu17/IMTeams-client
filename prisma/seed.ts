// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
// import { data } from '../data/links'
const prisma = new PrismaClient()

async function main() {
  await prisma.announcement.create({
    data: {
      message: `hello world`,
      time: '23',
      leagueId: 123
    },
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
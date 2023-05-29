import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create a new User record
  //   const user = await prisma.user.create({
  //     data: {
  //       name: 'Alices',
  //       email: 'alicec@prisma.io',
  //     },
  //   })
  //   console.log(user)

  // Retrieve all User records
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
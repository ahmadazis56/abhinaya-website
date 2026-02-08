import { PrismaClient } from '@prisma/client'

// Skip seeding for now - create data through admin panel instead
async function main() {
  console.log('Seeding skipped. Please create data through admin panel at /admin')
  console.log('Login credentials: admin@abhinaya.com / admin123')
}

main()
  .then(async () => {
    console.log('Seed script completed')
  })
  .catch(async (e) => {
    console.error(e)
  })

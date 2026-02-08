const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Sample Events
  const events = [
    {
      title: "Digital Transformation Workshop",
      description: "Learn about the latest trends in digital transformation and how to implement them in your business.",
      date: new Date('2026-02-15'),
      image: "/images/1.png"
    },
    {
      title: "Creative Design Masterclass",
      description: "Join our expert designers in this intensive masterclass on modern creative design principles.",
      date: new Date('2026-03-01'),
      image: "/images/2.png"
    },
    {
      title: "Scientific Publishing Seminar",
      description: "Discover best practices for publishing high-quality scientific research journals.",
      date: new Date('2026-03-20'),
      image: "/images/3.png"
    }
  ]

  for (let i = 0; i < events.length; i++) {
    await prisma.event.upsert({
      where: { id: i + 1 },
      update: events[i],
      create: events[i]
    })
  }

  // Sample Gallery
  const galleryItems = [
    {
      title: "Digital Transformation",
      description: "Modern digital solutions for business growth",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=entropy"
    },
    {
      title: "Brand Identity Design",
      description: "Creative branding solutions",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1661288537646-63eb4b3e7519?w=800&h=900&fit=crop&crop=entropy"
    },
    {
      title: "Mobile Application",
      description: "Innovative mobile app development",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&crop=entropy"
    }
  ]

  for (let i = 0; i < galleryItems.length; i++) {
    await prisma.gallery.upsert({
      where: { id: i + 1 },
      update: galleryItems[i],
      create: galleryItems[i]
    })
  }

  // Sample Flyers
  const flyers = [
    {
      title: "Special IT Solutions Offer",
      description: "Get 20% off on all IT consulting services this month",
      image: "/images/flyer1.jpg",
      isActive: true
    },
    {
      title: "Creative Design Workshop",
      description: "Join our weekend design workshop for beginners",
      image: "/images/flyer2.jpg", 
      isActive: true
    }
  ]

  for (let i = 0; i < flyers.length; i++) {
    await prisma.flyerItem.upsert({
      where: { id: i + 1 },
      update: flyers[i],
      create: flyers[i]
    })
  }

  console.log('Seeding finished.')
  console.log('Sample data created for Events, Gallery, and Flyers')
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

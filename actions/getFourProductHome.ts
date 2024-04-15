'use server'

import prisma from '@/lib/prisma'

export const getFourProductHome = async () => {
  const products = await prisma.product.findMany({
    take: 4,
    include: {
      category: true,
    },
    orderBy: {
      title: 'asc'
    },
  })
  const finalProducts = products.map((product) => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category.name,
      discountedPrice: product.discountedPrice,
      slug: product.slug,
      tags: product.tags,
      material: product.material,
    }
  })

  return finalProducts
}


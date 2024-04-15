'use server'

import prisma from "../lib/prisma"

export const getProductByCategory = async (category: string) => {
  
  const categori = await prisma.category.findFirst({
    where: {
      slug: category
    }
  });

  if(!categori) {
    return []
  }

  const categoryId = categori!.id


  const products = await prisma.product.findMany({
    where: {
      categoryId: categoryId
    },
    include: {
      category: true,
    },
    orderBy: {
      title: 'asc'
    }
  });

  const finalProducts = products.map((product) => {
    return {
      id: product.id,
      title: product.title,
      category: product.category.name,
      slug: product.slug,
      price: product.price,
      discountedPrice: product.discountedPrice,
      tags: product.tags,
      material: product.material,
    }
  })

  return finalProducts
}


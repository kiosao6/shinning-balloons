'use server'
import prisma from '../lib/prisma'

export const getProductBySlug = async(slug: string) => {
  const product = await prisma.product.findFirst({
    where: {
      slug: slug
    },
    include: {
      category: true
    }
  })

  return product;
}
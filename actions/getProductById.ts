'use server'

import prisma from "@/lib/prisma";

export const getProductById = async (products: string[]) => {
  const productsFound = await prisma.product.findMany({
    where: {
      id: {
        in: products.map(product => product)
      }
    },
    include: {
      category: true
    }
  })
  return productsFound

}
'use server'



import prisma from '@/lib/prisma'

interface Props {
  take?: number;
  page?: number;
}

export const getProductsOnSale = async ({
  take = 12,
  page = 1,
}: Props) => {

  try {
    if (isNaN(Number(page))) page = 1;
  if (isNaN(Number(take))) take = 12;
  if (page < 1) page = 1;
  if (take < 1) take = 12;


  const products = await prisma.product.findMany({
    skip: (page - 1) * take,
    take: take,
    where: {
      discountedPrice: {
        not: null
      }
    },
    include: {
      category: true
    },
    orderBy: {
      title: 'asc'
    }
  })

  const totalCount = await prisma.product.count({
    where: {
      discountedPrice: {
        not: null
      }
    },
  });

  const totalPages = Math.ceil(totalCount / take);

  return {
    currentPage: page,
    totalPages,
    products: products.map((product) => ({
      id: product.id,
      title: product.title,
      category: product.category.name,
      slug: product.slug,
      price: product.price,
      discountedPrice: product.discountedPrice,
      tags: product.tags,
      material: product.material,
    }))
  }
  } catch (error) {
    console.log(error)
  }

  
}

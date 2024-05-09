

'use server'
import prisma from "@/lib/prisma"

interface PaginationProps {
  page?: number;
  take?: number;
  color?: string;
}


export const getPaginatedProducts = async ({
  page = 1,
  take = 12
}: PaginationProps) => {

  if(isNaN(Number(page))) page = 1; 
  if(isNaN(Number(take))) take = 12; 
  if(page < 1) page = 1;
  if(take < 1) take = 12;

  
  try {
    const products = await prisma.product.findMany({
      skip: (page - 1) * take,
      include: {
        category: true
      },
      take: take,
      orderBy:{
        title: 'asc'
      }
    })

    const totalCount = await prisma.product.count({});
    const totalPages = Math.ceil(totalCount/take);

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

export const getPaginatedProductsByColor = async ({
  page = 1,
  take = 12,
  color
}: PaginationProps) => {

  if(isNaN(Number(page))) page = 1; 
  if(isNaN(Number(take))) take = 12; 
  if(page < 1) page = 1;
  if(take < 1) take = 12;

  
  try {
    const products = await prisma.product.findMany({
      skip: (page - 1) * take,
      where: {
        tags: {
          hasSome: color ? [color] : []
        }
      },
      include: {
        category: true
      },
      take: take,
      orderBy:{
        title: 'asc'
      }
    })

    const totalCount = await prisma.product.count({
      where: {
        tags: {
          hasSome: color ? [color] : []
        }
      }
    });
    const totalPages = Math.ceil(totalCount/take);

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
'use server'

import prisma from "../lib/prisma"


interface Props {
  take?: number;
  page?: number;
  color?: string;
}

export const getProductByCategory = async (category: string, { take = 12, page = 1 }: Props) => {

  try {
    const categori = await prisma.category.findFirst({
      where: {
        slug: category
      }
    });

    const categoryId = categori!.id

    if (isNaN(Number(page))) page = 1;
    if (isNaN(Number(take))) take = 12;
    if (page < 1) page = 1;
    if (take < 1) take = 12;


    const products = await prisma.product.findMany({
      skip: (page - 1) * take,
      take: 12,
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

    const totalCount = await prisma.product.count({
      where: {
        categoryId: categoryId
      }
    });
    const totalPages = Math.ceil(totalCount / take);

    return {
      category: categori!.name,
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


export const getProductByCategoryAndColor = async (category: string, { take = 12, page = 1, color }: Props) => {

  try {
    const categori = await prisma.category.findFirst({
      where: {
        slug: category,
      }
    });

    const categoryId = categori!.id

    if (isNaN(Number(page))) page = 1;
    if (isNaN(Number(take))) take = 12;
    if (page < 1) page = 1;
    if (take < 1) take = 12;


    const products = await prisma.product.findMany({
      skip: (page - 1) * take,
      take: 12,
      where: {
        categoryId: categoryId,
        tags: {
          hasSome: color ? [color] : []
        }
      },
      include: {
        category: true,
      },
      orderBy: {
        title: 'asc'
      }
    });

    const totalCount = await prisma.product.count({
      where: {
        categoryId: categoryId,
        tags: {
          hasSome: color ? [color] : []
        }
      }
    });
    const totalPages = Math.ceil(totalCount / take);

    return {
      category: categori!.name,
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


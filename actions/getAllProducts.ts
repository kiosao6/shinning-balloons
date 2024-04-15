'use server'
import prisma from '../lib/prisma'



export const getAllProducts = async () => {

  const products = await prisma.product.findMany({
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
    };
  });
  return finalProducts;
}
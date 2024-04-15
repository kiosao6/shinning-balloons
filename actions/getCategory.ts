'use server'

import prisma from '../lib/prisma';

export const getCategory = async (slug: string) => {
  const category = await prisma.category.findFirst({
    where: {
      slug: slug
    }
  })

  return category;
};
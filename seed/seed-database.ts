import { initialData } from "./seed";
import prisma from '../lib/prisma'

async function main() {
  console.log('Seed executed')

  await prisma.orderItem.deleteMany();
  await prisma.orderAddress.deleteMany();
  await prisma.order.deleteMany();
  await prisma.user.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products, users } = initialData;
  console.log(products.length);

  await prisma.user.createMany({
    data: users
  })


  const categoriesData = categories.map(category => ({
    name: category,
    slug: category.toLowerCase()
  }))

  await prisma.category.createMany({
    data: categoriesData
  })

  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;

    return map 
  }, {} as Record<string, string>)

  console.log(categoriesMap)

  products.forEach(async (product) => {
    const { category, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[category]
      }
    })
  })



}


(() => {


  main()


})();
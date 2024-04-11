import { initialData } from "./seed";
import prisma from '../lib/prisma'

async function main() {
  console.log('Seed executed')
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products } = initialData;


  const categoriesData = categories.map(category => ({
    name: category
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
}


(() => {


  main()


})();
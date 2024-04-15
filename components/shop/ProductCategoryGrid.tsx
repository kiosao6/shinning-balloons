import { getProductByCategory, getProductsOnSale } from "@/actions";
import { Product } from "./Product";



interface Props {
  category: string;
}

export default async function ProductCategoryGrid({
  category
}: Props) {

  if(category === 'sale') {
    const onSaleProducts = await getProductsOnSale();
    console.log(onSaleProducts)
    return (
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8">
        {onSaleProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    )
  }

  const products = await getProductByCategory(category);
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}
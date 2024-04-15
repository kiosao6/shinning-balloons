import { getAllProducts } from "@/actions";
import { Product } from "./Product";



export default async function ProductShopGrid() {
  const products = await getAllProducts();
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

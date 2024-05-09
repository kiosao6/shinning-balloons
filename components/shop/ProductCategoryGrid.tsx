import { getPaginatedProductsByColor, getProductByCategory, getProductByCategoryAndColor, getProductsOnSale } from "@/actions";
import { Product } from "./Product";
import { ShopPagination } from "../ui/ShopPagination";
import { notFound } from "next/navigation";



interface Props {
  category: string;
  pageNumber?: number;
  color?: string;
}

export default async function ProductCategoryGrid({
  category,
  pageNumber,
  color
}: Props) {

  const page = pageNumber ? pageNumber : 1;

  if (category === 'sale') {
    const onSaleProducts = await getProductsOnSale({ page });

    return (
      <>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8">
          {onSaleProducts?.products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
        <ShopPagination page={page} totalPages={onSaleProducts!.totalPages} />
      </>
    )
  }

  let products;
  
  if(color) {
    products = await getProductByCategoryAndColor(category, {page, color});
  } else {
    products = await getProductByCategory(category, {page});
  }

  if(!products?.category) {
    notFound();
  }

  return (
    <>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8">
        {products?.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <ShopPagination page={page} totalPages={products!.totalPages} />
    </>
  )


}
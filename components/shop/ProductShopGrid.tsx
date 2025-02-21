import {  getPaginatedProductsByColor } from "@/actions";
import { Product } from "./Product";
import { redirect } from "next/navigation";
import { ShopPagination } from "../ui/ShopPagination";


interface Props {
  pageNumber?: number;
  color?: string;
}

export default async function ProductShopGrid({ pageNumber, color }: Props) {
  const page = pageNumber ? pageNumber : 1;
  let products;
  if(color) {
    products = await getPaginatedProductsByColor({ page, color });
  } else {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${page}`, {
      next: {revalidate: 1800}
    })
    products = await data.json()
  }

  
  if (products?.products === 0) {
    redirect("/shop");
  }

  return (
    <>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8">
        {products?.products.map((product: any) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <ShopPagination page={page} totalPages={products.totalPages} />
    </>

  )
}

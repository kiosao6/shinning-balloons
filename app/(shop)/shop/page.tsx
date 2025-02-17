import {  ProductGridSkeleton, BreadCrumb, ShopNavigation, ColorSelector } from "@/components/index";
import ProductShopGrid from "@/components/shop/ProductShopGrid";
import { Suspense } from "react";

const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Shop',
    href: '/shop'
  },
]

interface Props {
  searchParams: Promise<{
    page?: string;
    color?: string
  }>
}

export default async function ShopPage(props:Props) {
  const searchParams = await props.searchParams;

  return (
    <main>
      <section className="mt-10 mb-16 px-8 max-w-6xl mx-auto text-base-heading">
        <BreadCrumb links={links}/>
        <h1 className="text-4xl mt-12 mb-4 font-bold tracking-tight lg:text-5xl">Shop Page</h1>
        <div className="lg:flex justify-between items-center space-y-4 lg:space-y-0">
          <ShopNavigation />
          <ColorSelector />
        </div>
      </section>

      <section className="px-8 mb-24 max-w-6xl mx-auto text-base-heading">
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductShopGrid color={searchParams.color} pageNumber={Number(searchParams.page ?? 1)} />
        </Suspense>
      </section>
    </main>
  );
}
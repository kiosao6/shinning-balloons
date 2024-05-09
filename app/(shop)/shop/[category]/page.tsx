import { ProductGridSkeleton, BreadCrumb, ShopNavigation, ColorSelector } from "@/components/index";
import ProductCategoryGrid from "@/components/shop/ProductCategoryGrid";
import { Suspense } from "react";

interface Props {
  params: {
    category: string;
  },
  searchParams: {
    page?: string;
    color?: string;
  }
}
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
export default async function ShopPage({
  params,
  searchParams
}: Props) {

  return (
    <main>
      <section className="mt-10 mb-16 px-8 max-w-6xl mx-auto text-base-heading">
        <BreadCrumb links={links} />
        <h1 className="text-4xl mt-12 mb-4 font-bold tracking-tight lg:text-5xl">Shop Page</h1>
        <div className="lg:flex justify-between items-center space-y-4 lg:space-y-0">
          <ShopNavigation />
          {
            (params.category === "latex") && (
              <ColorSelector />
            )
          }
        </div>
      </section>

      <section className="px-8 mb-24 max-w-6xl mx-auto text-base-heading">
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductCategoryGrid color={searchParams.color} pageNumber={Number(searchParams.page) ?? 1} category={params.category}  />
        </Suspense>
      </section>
    </main>
  );
}
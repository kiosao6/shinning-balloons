import { ProductGridSkeleton, ShopBreadCrumb, ShopNavigation } from "@/components";
import ProductCategoryGrid from "@/components/shop/ProductCategoryGrid";
import { Suspense } from "react";

interface Props {
  params: {
    category: string;
  }
}

export default async function ShopPage({
  params
}: Props) {

  return (
    <main>
      <section className="my-24 px-8 max-w-6xl mx-auto text-base-heading">
        <ShopBreadCrumb />
        <h1 className="text-4xl mt-12 mb-4 font-bold tracking-tight lg:text-5xl">Shop Page</h1>
        <ShopNavigation />
      </section>

      <section className="px-8 mb-24 max-w-6xl mx-auto text-base-heading">
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductCategoryGrid category={params.category}  />
        </Suspense>
      </section>
    </main>
  );
}
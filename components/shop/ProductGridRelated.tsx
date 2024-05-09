import {  getRelatedProducts } from "@/actions"
import { cn } from "@/lib/utils";
import { Product } from "../shop/Product";



interface Props {
  className?: string;
  slug: string;
}
export const ProductGridRelated = async ({
  className,
  slug
}: Props) => {

  const balloons = await getRelatedProducts(slug as string);
  return (
    <div className={cn("grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8", className)}>
      {balloons.map((balloon) => (
        <Product key={balloon.id} {...balloon} />
      ))}
    </div>
  )
}
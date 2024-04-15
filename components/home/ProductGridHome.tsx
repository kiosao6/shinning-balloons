import { getFourProductHome } from "@/actions"
import { cn } from "@/lib/utils";
import { Product } from "../shop/Product";



interface Props {
  className?: string;
}
export const ProductGridHome = async ({
  className
}: Props) => {

  const balloons = await getFourProductHome();
  return (
    <div className={cn("grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8", className)}>
      {balloons.map((balloon) => (
        <Product key={balloon.id} {...balloon} />
      ))}
    </div>
  )
}
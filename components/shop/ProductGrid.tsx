
import { cn } from "@/lib/utils"
import { Product } from "@/components/index";

interface Props {
  className?: string;
  
}

const balloons = [
  {
    id: 1,
    image: "/colors/chrome-mauve-pink.png",
    title: "Chrome Mauve Pink",
    slug: "chrome-mauve-pink",
    price: 10,
    discountedPrice: 7,
  },
  {
    id: 2,
    image: "/colors/chrome-purple.png",
    title: "Chrome Purple",
    slug: "chrome-purple",
    price: 10,
  },
  {
    id: 3,
    image: "/colors/lime-green.png",
    title: "Lime Green",
    slug: "lime-green",
    price: 10,
  },
  {
    id: 4,
    image: "/colors/robins-egg-blue.png",
    title: "Robin's Egg Blue",
    slug: "robins-egg-blue",
    price: 10,
  },

];


export const ProductGrid = async({
  className,
}:Props) => {

  return (
    <div className={cn("grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8", className)}>
      {balloons.map((balloon) => (
        <Product key={balloon.id} {...balloon} />
      ))}
    </div>
  )
}
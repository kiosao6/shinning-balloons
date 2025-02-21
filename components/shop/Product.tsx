

import { cn, currencyFormat } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id?: number | string;
  title: string;
  category: string;
  slug: string;
  price: number;
  discountedPrice?: number | null;
}


export const Product = ({
  id,
  title,
  category,
  slug,
  price,
  discountedPrice,
}: Props) => {


  return (
    <div className="">
      <Link href={`/shop/${category.toLowerCase()}/${slug}`} className="w-fit mx-auto z-10 rounded-xl relative flex flex-col justify-center group transition-all duration-300 lg:hover:scale-[1.02]">
        <Image
          src={`/colors/${slug}.png`}
          width={400}
          height={400}
          alt={title}
          className="w-full mix-blend-overlay border aspect-square rounded-xl max-w-sm mx-auto"
        />
        {discountedPrice && <SaleBadge />}
        <div className="flex flex-col justify-center items-start">
          <p className="text-base-heading text-sm lg:text-base pt-2 group-hover:underline">
            {title}
          </p>
          <span>
            <span className="text-sm lg:text-base text-base-heading">{currencyFormat(discountedPrice || price)}</span>
            {discountedPrice && (
              <span className="text-sm lg:text-base pl-2 text-base-heading/40 line-through pr-2">{currencyFormat(price)}</span>
            )}
          </span>
        </div>
      </Link>
    </div>
  )
}

interface ClassName {
  className?: string;
}
export const SaleBadge = ({
  className
}: ClassName) => {
  return (
    <span
      className={cn("absolute top-3 right-3 bg-green-600 text-white font-medium text-xs tracking-widest uppercase px-2 py-1 rounded z-30", className)}>
      Sale
    </span>
  )
}
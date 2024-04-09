

import { currencyFormat } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  image: string;
  title: string;
  slug: string;
  price: number;
  discountedPrice?: number;
}


export const Product = ({
  id,
  image,
  title,
  slug,
  price,
  discountedPrice,
}: Props) => {


  return (
    <div className="">
      <Link href={`/product/${slug}`} className="w-fit mx-auto z-10 rounded-xl relative flex flex-col items-center justify-center group transition-all duration-300 lg:hover:scale-[1.02]">
        <Image
          src={image}
          width={400}
          height={400}
          alt={title}
          className="w-full mix-blend-overlay aspect-[1/1] rounded-xl max-w-sm mx-auto"
        />
      {discountedPrice && <SaleBadge />}
      <div className="mx-auto flex flex-col justify-center items-center">
        <h5 className="text-base-heading/70 font-medium text-base lg:text-lg pt-2 group-hover:underline">
          {title}
        </h5>
        <span>
          <span className="text-sm lg:text-base font-medium text-base-heading/70">{currencyFormat(discountedPrice || price)}</span>
          {discountedPrice && (
            <span className="text-sm lg:text-base pl-2 text-base-heading/40 line-through pr-2">{currencyFormat(price)}</span>
          )}
        </span>
      </div>
      </Link>
    </div>
  )
}


const SaleBadge = () => {
  return (
    <span
      className="absolute top-3 right-3 bg-green-600 text-white font-medium text-xs tracking-widest uppercase px-2 py-1 rounded">
      Sale
    </span>
  )
}
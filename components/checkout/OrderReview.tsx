import { currencyFormat } from "@/lib/utils"
import Image from "next/image"


interface Props {
  products: {
    id: string;
    title: string;
    description: string | null;
    slug: string;
    price: number;
    discountedPrice?: number | null;
    tags: string[];
    material: string | null;
    quantity: number;
    number?: number;
  }[],
  totals :{
    subtotal: number;
    shipping: number;
    taxes: number;
    total: number;
  }
}

export const OrderReview = ({ products: productsFound, totals }: Props) => {

  return (
    <div className="border p-6 mb-6 lg:mb-0 lg:min-w-[380px] rounded-xl h-fit">
      <p className="mb-4 text-xl font-medium border-b pb-4">Order review</p>

      <div className="space-y-4">
        {
          productsFound.map((product, index) => (
            <div key={index} className="border-b pb-4 border-zinc-300">
              <div className="flex gap-4 justify-center">
                <Image
                  src={`/colors/${product.slug}.png`}
                  alt={`${product.title} Latex Balloon`}
                  width={90}
                  height={90}
                  quality={100}
                  className="rounded aspect-square w-26 h-fit border hover:shadow-sm  transition-all"
                />
                <div className="space-y-1 w-36">
                  <p
                    className="text-sm text-base-heading leading-5 transition-all">{`${product.title}`}</p>
                  {
                    (product.number || product.number === 0) && (
                      <p className="text-base-heading/70 text-xs">Number: {product?.number}</p>
                    )
                  }
                  <p className="text-base-heading/70 text-xs">Quantity: {product.quantity}</p>
                </div>

                <div className="pl-8 w-24 flex flex-col items-end">
                  {/* <p className="text-sm w-fit text-left text-base-heading">{currencyFormat((product.discountedPrice * product.quantity) ?? product.price * product.quantity)}</p>
                  {product.discountedPrice && (
                    <p className="text-sm text-left h-fit text-base-heading/40 line-through">{currencyFormat(product.price * product.quantity)}</p>
                  )} */}

                  <p className="text-sm w-fit text-left text-base-heading">{currencyFormat((product.discountedPrice ?? product.price) * product.quantity)}</p>
                  {product.discountedPrice && (
                    <p className="text-sm text-left h-fit text-base-heading/40 line-through">{currencyFormat(product.price * product.quantity)}</p>
                  )}
                  
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="flex flex-col gap-2 my-4 [&>*]:text-base-heading/70">

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <p className="text-sm">Subtotal</p>
          </div>
          <span className="text-sm">{currencyFormat(totals.subtotal)}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <p className="text-sm">Shipping</p>
          </div>
          <span className="text-sm">{currencyFormat(totals.shipping)}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <p className="text-sm">Taxes</p>
          </div>
          <span className="text-sm">{currencyFormat(totals.taxes)}</span>
        </div>

        {/* Total  */}

      </div>
      <div className="flex justify-between items-center text-base font-semibold border-t pt-4 border-zinc-300">
        <div className="flex items-center gap-1">
          <p className="">Total</p>
        </div>
        <span className="">{currencyFormat(totals.total)}</span>
      </div>
    </div>
  )
}
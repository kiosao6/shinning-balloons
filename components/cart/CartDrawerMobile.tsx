"use client";

import { Drawer } from "vaul";
import { Button } from "@/components/index";
import { currencyFormat } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi2";

const products = [
  {
    title: 'Lime Green Latex Balloon',
    price: 10,
    discountedPrice: 7,
    slug: 'lime-green',
    category: 'latex',
  },
  {
    title: 'Chrome Gold Latex Balloon',
    price: 10,
    slug: 'chrome-gold',
    category: 'latex',
  },
  {
    title: 'Chrome Gold Latex Balloon',
    price: 10,
    slug: 'chrome-gold',
    category: 'latex',
  },
  {
    title: 'Chrome Gold Latex Balloon',
    price: 10,
    slug: 'chrome-gold',
    category: 'latex',
  },
  {
    title: 'Chrome Gold Latex Balloon',
    price: 10,
    slug: 'chrome-gold',
    category: 'latex',
  },
]

export function CartDrawerMobile() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className="text-sm md:hidden">Cart (0)</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[51]" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] z-[52] h-[80%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="mx-auto mt-4 w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
          <div className="bg-white  mx-auto p-6 md:w-[400px] z-50 lg:w-[380px]">
            <p className="text-base w-full font-medium text-center pb-2 mb-4">Cart</p>

            <div className="space-y-4 overflow-auto max-h-52">
              {
                products.map((product, index) => (
                  <div key={index}>
                    <div className="flex gap-4 justify-center">
                      <Link href={`/shop/${product.category}/${product.slug}`}>
                        <Image
                          src={`/colors/${product.slug}.png`}
                          alt={`${product.title} Latex Balloon`}
                          width={90}
                          height={90}
                          quality={100}
                          className="rounded aspect-square w-26 h-fit border hover:shadow-sm  transition-all"
                        />
                      </Link>
                      <div className="space-y-1 w-36">
                        <Link
                          href={`/shop/${product.category}/${product.slug}`}
                          className="text-sm text-base-heading leading-5 hover:underline transition-all">{`${product.title}`}</Link>

                        <p className="text-base-heading/70 text-xs">Quantity: 5</p>
                        {/* <button className="flex text-xs pt-2 items-center gap-1 hover:text-red-500 transition-all">
                          <HiOutlineTrash size={18} />
                          Remove
                        </button> */}
                      </div>

                      <div className="space-y-1 pl-8">
                        <p className="text-sm text-base-heading">{currencyFormat(product.price)}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>


            <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-1 font-medium">
                  <p className="text-base">Subtotal</p>
                  <p className="text-xs text-base-heading/70 font-normal">(excl. taxes)</p>
                </div>
                <span className="text-base font-medium">{currencyFormat(100)}</span>
              </div>
              <Button
                variant="default"
                size="lg"
                className="bg-moon-500 h-12 w-full block text-base rounded-[0.5rem] text-white hover:bg-moon-600 md:max-w-full px-8">

                <Link href="/checkout" className="text-sm">Go to checkout</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 w-full border block text-base rounded-[0.5rem] md:max-w-full px-8 hover:border-zinc-400">

                <Link href="/cart" className="text-sm w-full h-full">View Cart</Link>
              </Button>
            </div>


          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

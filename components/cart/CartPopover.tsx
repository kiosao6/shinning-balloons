"use client"

import * as React from "react"
import Link from "next/link"
import { HiOutlineTrash } from "react-icons/hi2";


import { cn, currencyFormat } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { Button } from "@/components/ui/button";

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
]



export function CartPopover() {


  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-normal">Cart</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <div className="bg-white p-6 md:w-[400px] z-50 lg:w-[380px]">
              <p className="text-base w-full font-medium text-center pb-2 mb-4">Cart</p>

              <div className="space-y-4">
                {
                  products.map((product, index) => (
                    <div key={index}>
                      <div className="flex gap-4">
                        <Link href={`/shop/${product.category}/${product.slug}`}>
                          <Image
                            src={`/colors/${product.slug}.png`}
                            alt={`${product.title} Latex Balloon`}
                            width={80}
                            height={80}
                            quality={100}
                            className="rounded aspect-square w-fit h-fit border hover:shadow-sm  transition-all"
                          />
                        </Link>
                        <div className="space-y-1 w-36">
                          <Link
                            href={`/shop/${product.category}/${product.slug}`}
                            className="text-sm text-base-heading leading-5 hover:underline transition-all">{`${product.title}`}</Link>

                          <p className="text-base-heading/70 text-xs">Quantity: 5</p>
                          <button className="flex text-xs pt-2 items-center gap-1 hover:text-red-500 transition-all">
                            <HiOutlineTrash size={18} />
                            Remove
                          </button>
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
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-zinc-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"



{/* <li className="row-span-3 rounded hover:bg-zinc-100">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li> */}
{/* <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem> */}
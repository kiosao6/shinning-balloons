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
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cart-store";
import { hasCookie, setCookie } from "cookies-next";
import { EmptyCart } from "./EmptyCart";
import { CallToAction } from "../ui/CallToAction";


export function CartPopover() {

  const pathName = usePathname();
  const cart = useCartStore(state => state.cart);
  const deleteProduct = useCartStore(state => state.deleteProduct)
  const [isLoaded, setIsLoaded] = React.useState(false);

  const subtotal = cart.reduce((acc, item) => {
    return acc + (item.quantity * (item.discountedPrice ?? item.price))
  }, 0)

  const productsIds = cart.map(product => {
    const isNumber = product.category === 'Numbers';
    return {
      id: product.id,
      quantity: product.quantity,
      ...(isNumber && { number: product.number })
    }
  });

  const getCheckoutStep = () => {
    if (hasCookie("shippingAddress") && !hasCookie("paymentMethod")) {
      return "payment"
    }
    if (hasCookie("shippingAddress") && hasCookie("paymentMethod")) {
      return "review"
    }

    return "shipping"
  }

  const placeOrder = () => {
    setCookie("productIds", JSON.stringify(productsIds))
    if (hasCookie("shippingMethod")) {
      return
    }
    setCookie("shippingMethod", "free")
  }

  React.useEffect(() => {
    setIsLoaded(true);
  }, [])


  return (
    <NavigationMenu className={`${(pathName === '/checkout') && 'hidden'}`}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-normal">Cart {isLoaded && `(${cart.length})`}</NavigationMenuTrigger>

          <NavigationMenuContent className="bg-white">
            <div className="bg-white p-8 md:w-[400px] z-50 lg:w-[430px]">
              {
                (cart.length === 0) ? (
                  <EmptyCart />
                ) : (
                  <>
                    <p className="text-lg lg:text-2xl w-full font-semibold text-center pb-1 lg:pb-2">Cart</p>
                    <p className="mb-8 text-xs text-center text-neutral-500">This is a quick preview of your cart. Visit your cart page to edit your products and get more information about payment.</p>
                    {
                      isLoaded && (
                        <div className="space-y-4 overflow-auto max-h-56 no-scrollbar">
                          {
                            cart.map((product, index) => (
                              <div key={index}>
                                <div className={`flex gap-4 border-b pb-4 ${index === cart.length - 1 && 'border-none pb-0'}`}>
                                  <Link href={`/shop/${product.category.toLowerCase()}/${product.slug.toLowerCase()}`}>
                                    <Image
                                      src={`/colors/${product.slug.toLowerCase()}.png`}
                                      alt={`${product.title} Latex Balloon`}
                                      width={70}
                                      height={70}
                                      quality={100}
                                      className="rounded-xl aspect-square w-fit lg:w-28 h-fit border hover:shadow-sm transition-all"
                                    />
                                  </Link>
                                  <div className="space-y-1 w-36">
                                    <Link
                                      href={`/shop/${product.category.toLowerCase()}/${product.slug.toLowerCase()}`}
                                      className="text-sm text-base-heading leading-5 block w-fit hover:underline transition-all">{`${product.title}`}</Link>

                                    {
                                      (product?.number || product.number == 0) && (
                                        <p className="text-neutral-500 text-xs">Number: {product.number}</p>
                                      )
                                    }

                                    <p className="text-neutral-500 text-xs">Quantity: {product.quantity}</p>

                                    {
                                      (product?.number || product.number == 0) && (
                                        <button
                                          onClick={() => deleteProduct(product.id, (product?.number || 0))}
                                          className="flex text-xs pt-1 items-center gap-1 hover:text-red-500 transition-all">
                                          <HiOutlineTrash size={18} />
                                          Remove
                                        </button>
                                      )
                                    }

                                    {
                                      !(product?.number || product.number == 0) && (
                                        <button
                                          onClick={() => deleteProduct(product.id)}
                                          className="flex text-xs pt-1 items-center gap-1 hover:text-red-500 transition-all">
                                          <HiOutlineTrash size={18} />
                                          Remove
                                        </button>
                                      )
                                    }
                                  </div>

                                  <div className="pl-8 w-24 flex flex-col items-end">
                                    <p className="text-sm w-fit text-left text-base-heading">{currencyFormat(product.quantity * (product.discountedPrice ?? product.price))}</p>
                                    {product.discountedPrice && (
                                      <p className="text-sm text-left h-fit text-base-heading/40 line-through">{currencyFormat(product.price * product.quantity)}</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      )
                    }
                  </>
                )
              }



              {
                (cart.length !== 0) && (
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-1 font-medium">
                        <p className="text-base">Subtotal</p>
                        <p className="text-xs text-neutral-500 font-normal">(excl. taxes)</p>
                      </div>
                      <span className="text-base font-medium">{currencyFormat(subtotal)}</span>
                    </div>
                    <CallToAction action={placeOrder} href={`/checkout?step=${getCheckoutStep()}`} text="Go to checkout" className="md:w-auto text-sm" />
                    <CallToAction href="/cart" variant="outline" text="View cart" className="md:w-auto text-sm" />
                  </div>
                )
              }


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

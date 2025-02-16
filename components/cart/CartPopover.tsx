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
import { usePathname, useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart-store";
import { hasCookie, setCookie } from "cookies-next";
import { EmptyCart } from "./EmptyCart";


export function CartPopover() {

  const pathName = usePathname();
  const router = useRouter();

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
    if(hasCookie("shippingAddress") && !hasCookie("paymentMethod") ) {
      return "payment"
    }
    if(hasCookie("shippingAddress") && hasCookie("paymentMethod")) {
      return "review"
    }
  
    return "shipping"
  }

  const placeOrder = () => {
    setCookie("productIds", JSON.stringify(productsIds))
    setCookie("shippingMethod", "free")
    router.push(`/checkout?step=${getCheckoutStep()}`)
  }

  React.useEffect(() => {
    setIsLoaded(true);
  }, [])


  return (
    <NavigationMenu className={`${(pathName === '/checkout') && 'hidden'}`}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-normal h-fit">Cart {isLoaded && `(${cart.length})`}</NavigationMenuTrigger>

          <NavigationMenuContent className="bg-white">
            <div className="bg-white p-8 md:w-[400px] z-50 lg:w-[420px]">
              {
                (cart.length === 0) ? (
                  <EmptyCart />
                ) : (
                  <>
                    <p className="text-lg w-full font-medium text-center pb-1">Cart</p>
                    <p className="mb-8 text-xs text-center text-base-heading/70">This is a quick preview of your cart. Visit your cart page to edit your products and get more information about payment.</p>
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
                                      width={80}
                                      height={80}
                                      quality={100}
                                      className="rounded aspect-square w-fit h-fit border hover:shadow-sm transition-all"
                                    />
                                  </Link>
                                  <div className="space-y-1 w-36">
                                    <Link
                                      href={`/shop/${product.category.toLowerCase()}/${product.slug.toLowerCase()}`}
                                      className="text-sm text-base-heading leading-5 hover:underline transition-all">{`${product.title}`}</Link>

                                    {
                                      (product?.number || product.number == 0) && (
                                        <p className="text-base-heading/70 text-xs">Number: {product.number}</p>
                                      )
                                    }

                                    <p className="text-base-heading/70 text-xs">Quantity: {product.quantity}</p>

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
                        <p className="text-xs text-base-heading/70 font-normal">(excl. taxes)</p>
                      </div>
                      <span className="text-base font-medium">{currencyFormat(subtotal)}</span>
                    </div>
                    <Button
                      onClick={placeOrder}
                      variant="default"
                      size="lg"
                      className="bg-moon-500 h-12 w-full block text-sm rounded-[0.5rem] text-white hover:bg-moon-600 md:max-w-full px-8">
                      Go to checkout
                      {/* <Link href="/checkout" className="text-sm">Go to checkout</Link> */}
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 w-full px-0 border block text-base rounded-[0.5rem] md:max-w-full hover:border-zinc-400">

                      <Link href="/cart" className="text-sm w-full h-full flex justify-center items-center">View Cart</Link>
                    </Button>
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

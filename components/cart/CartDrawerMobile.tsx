"use client";

import { Drawer } from "vaul";
import { Button, EmptyCart } from "@/components/index";
import { currencyFormat } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { hasCookie, setCookie } from "cookies-next";
import { useStore } from "@/store/ui-store";


export function CartDrawerMobile() {
  const router = useRouter();
  const cart = useCartStore(state => state.cart);
  const isMenuOpen = useStore(state => state.isMenuOpen)
  const toggleMenu = useStore(state => state.toggleMenu)
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

  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>();
  const pathName = usePathname();

  const closeDrawer = () => {
    if (isMenuOpen) {
      toggleMenu();
      document.body.classList.toggle('overflow-hidden');
      document.querySelector('main')?.classList.toggle('opacity-0');
      document.querySelector('footer')?.classList.toggle('opacity-0');
    }
    setIsOpen(!isOpen);

  }
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
    closeDrawer()
    setCookie("productIds", JSON.stringify(productsIds))
    setCookie("shippingMethod", "free")
    router.push(`/checkout?step=${getCheckoutStep()}`)
  }


  useEffect(() => {
    setIsLoaded(true);
  }, [])


  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger asChild>
        <button className={`text-sm w-[65px] text-right md:hidden ${(pathName === "/checkout" || pathName === "/cart") && 'pointer-events-none'}`}>Cart {isLoaded && `(${cart.length})`}</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[51]" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] z-[52] h-[70%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="mx-auto mt-4 w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
          {
            cart.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="bg-white mx-auto p-6 md:w-[400px] z-50 lg:w-[380px]">
                <p className="text-lg w-full font-medium text-center pb-1">Cart</p>
                <p className="mb-8 text-xs text-center text-base-heading/60">This is a quick preview of your cart. Visit your cart page to edit your products and get more information about payment.</p>

                {
                  isLoaded && (
                    <div className="space-y-4 overflow-auto max-h-52">
                      {
                        cart.map((product, index) => (
                          <div key={index} className={`border-b pb-4 ${index === cart.length - 1 && 'border-none pb-0'}`}>
                            <div className="flex gap-4">
                              <Link href={`/shop/${product.category.toLowerCase()}/${product.slug}`}>
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

                                {
                                  (product.number || product.number === 0) && (
                                    <p className="text-base-heading/60 text-xs">Number: {product?.number}</p>
                                  )
                                }
                                <p className="text-base-heading/60 text-xs">Quantity: {product.quantity}</p>
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
                    className="bg-moon-500  h-12 w-full block text-sm rounded-[0.5rem] text-white hover:bg-moon-600 md:max-w-full px-8">
                    Go to checkout
                    {/* <Link href="/checkout" className="text-sm">Go to checkout</Link> */}
                  </Button>

                  <Button
                    onClick={closeDrawer}
                    variant="outline"
                    size="lg"
                    className="h-12 w-full border block text-base rounded-[0.5rem] md:max-w-full px-8 hover:border-zinc-400">

                    <Link href="/cart" className="text-sm w-full h-full">View Cart</Link>
                  </Button>
                </div>


              </div>
            )
          }
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

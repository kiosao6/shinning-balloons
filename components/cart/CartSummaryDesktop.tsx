'use client'

import { hasCookie, setCookie } from 'cookies-next';
import { cn, currencyFormat } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/index";
import Link from "next/link";
import { useCartStore } from '@/store/cart-store';
import { useRouter } from 'next/navigation';


interface Props {
  subtotal: number;
  className?: string;
}
export const CartSummaryDesktop = ({
  subtotal,
  className,
}: Props) => {
  const router = useRouter();
  const products = useCartStore(state => state.cart);

  const getCheckoutStep = () => {
    if(hasCookie("shippingAddress") && !hasCookie("paymentMethod") ) {
      return "payment"
    }
    if(hasCookie("shippingAddress") && hasCookie("paymentMethod")) {
      return "review"
    }
  
    return "shipping"
  }

  const productsIds = products.map(product => {
    const isNumber = product.category === 'Numbers';
    return {
      id: product.id,
      quantity: product.quantity,
      ...(isNumber && { number: product.number })
    }
  });

  const [selected, setSelected] = useState<string>("free");
  const [shippingAmount, setShippingAmount] = useState<number>(0);
  
  
  const placeOrder = () => {
    setCookie("productIds", JSON.stringify(productsIds))
    setCookie("shippingMethod", selected)
    router.push(`/checkout?step=${getCheckoutStep()}`)
  }
  
  const setFreeShipping = () => {
    setSelected("free");
    setShippingAmount(0);
  }

  const setExpressShipping = () => {
    setSelected("express");
    setShippingAmount(15);
  }

  return (
    <div className={cn("border p-6 mt-0 lg:min-w-[380px] hidden lg:block rounded-xl", className)}>
      <p className="mb-4 text-xl font-medium">Cart summary</p>

      <div className={`flex mb-4 items-center ps-4 border border-zinc-200 rounded-[0.5rem] hover:border-zinc-400 transition-all [&>*]:cursor-pointer ${selected === "free" && 'bg-zinc-50 !border-zinc-400'}`}>
        <input defaultChecked onClick={setFreeShipping} id="bordered-radio-one" type="radio" value="" name="bordered-radios" className="h-4 text-zinc-600 bg-gray-100 border-gray-300 accent-zinc-600" />
        <label onClick={setFreeShipping} htmlFor="bordered-radio-one" className="w-full py-4 ps-2 text-sm font-medium text-gray-900 dark:text-gray-300">Free Shipping</label>
      </div>

      <div className={`flex items-center ps-4 border border-zinc-200 rounded-[0.5rem] hover:border-zinc-400 transition-all [&>*]:cursor-pointer ${selected === "express" && 'bg-zinc-50 !border-zinc-400'}`}>
        <input onClick={setExpressShipping} id="bordered-radio-two" type="radio" value="" name="bordered-radios" className="h-4 text-blue-600 bg-gray-100 border-gray-300 accent-zinc-600" />
        <label onClick={setExpressShipping} htmlFor="bordered-radio-two" className="w-full py-4 ps-2 text-sm font-medium text-gray-900 dark:text-gray-300">Express Shipping</label>
        <label onClick={setExpressShipping} htmlFor="bordered-radio-two" className="pr-4 text-sm">{`${currencyFormat(15)}`}</label>
      </div>

      <div className="flex justify-between items-center mb-1 border-t pt-4 pb-3 my-4">
        <div className="flex items-center gap-1 font-medium">
          <p className="text-base">Subtotal</p>
          <p className="text-xs text-base-heading/70 font-normal">(excl. taxes)</p>
        </div>
        <span className="text-base font-medium">{currencyFormat(subtotal + shippingAmount)}</span>
      </div>

      <div className="space-y-4">
        <Button
          onClick={placeOrder}
          variant="default"
          size="lg"
          className="bg-moon-500 px-0 h-12 w-full block text-sm rounded-[0.5rem] text-white hover:bg-moon-600 md:max-w-full">
          Go to checkout
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="h-12 px-0 w-full border block text-base rounded-[0.5rem] md:max-w-full hover:border-zinc-400">
          <Link href="/shop" className="text-sm w-full h-full flex items-center justify-center">Continue shopping</Link>
        </Button>
      </div>

    </div>
  )
}
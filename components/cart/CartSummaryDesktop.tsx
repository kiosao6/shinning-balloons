'use client'

import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { cn, currencyFormat } from "@/lib/utils";
import { useState } from "react";
import { CallToAction } from "@/components/index";
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

  const currentCookie = getCookie("shippingMethod")
  const shippingAmountOnLoad = currentCookie === "express" ? 15 : 0
  const [shippingAmount, setShippingAmount] = useState<number>(shippingAmountOnLoad);
  const [selected, setSelected] = useState(currentCookie || "free");

  
  const placeOrder = () => {
    setCookie("productIds", JSON.stringify(productsIds))
  }
  
  const setFreeShipping = () => {
    setCookie("shippingMethod", "free");
    setSelected("free");
    setShippingAmount(0);
  }

  const setExpressShipping = () => {
    setCookie("shippingMethod", "express");
    setSelected("express");
    setShippingAmount(15);
  }

  return (
    <div className={cn("border p-6 mt-0 lg:min-w-[380px] lg:block rounded-xl lg:ml-8", className)}>
      <p className="mb-4 text-xl font-medium">Cart summary</p>

      <div className={`flex mb-4 items-center ps-4 border border-zinc-200 rounded-xl hover:border-zinc-400 transition-all [&>*]:cursor-pointer ${selected === "free" && 'bg-zinc-50 !border-zinc-400'}`}>
        <input onClick={setFreeShipping} defaultChecked={currentCookie === "free" || !currentCookie}  id="bordered-radio-one" type="radio" value="" name="bordered-radios" className="h-4 text-zinc-600 bg-gray-100 border-gray-300 accent-zinc-600" />
        <label onClick={setFreeShipping} htmlFor="bordered-radio-one" className="w-full py-4 ps-2 text-sm font-medium text-gray-900 dark:text-gray-300">Free Shipping</label>
      </div>

      <div className={`flex items-center ps-4 border border-zinc-200 rounded-xl hover:border-zinc-400 transition-all [&>*]:cursor-pointer ${selected === "express" && 'bg-zinc-50 !border-zinc-400'}`}>
        <input onClick={setExpressShipping} defaultChecked={currentCookie === "express"}  id="bordered-radio-two" type="radio" value="" name="bordered-radios" className="h-4 text-blue-600 bg-gray-100 border-gray-300 accent-zinc-600" />
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
        <CallToAction action={placeOrder} text='Go to checkout' className='text-sm md:w-auto' href={`/checkout?step=${getCheckoutStep()}`} />
        <CallToAction variant='outline' text='Continue shopping' className='text-sm md:w-auto' href='/shop'/>
      </div>

    </div>
  )
}
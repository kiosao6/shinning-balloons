



'use client'

import { placeOrder } from '@/actions/place-order';
import { Button, CheckIcon, StepIndicator } from '@/components/index';
import { useCartStore } from '@/store/cart-store';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from 'react';


interface Props {
  products: any[],
  shipping?: string,
  address: string;
}
export const ReviewInformation = ({
  products,
  shipping,
  address
}: Props) => {
  const clearCart = useCartStore(state => state.clearCart);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState(false)

  const isOpen = searchParams.get("step") === "review";
  const onClick = () => {
    router.push(pathName + "?step=review")
  };

  const onSubmit = async() => {
    setIsLoading(true)
    const order = await placeOrder(products, shipping, address );
    clearCart();
    router.push(`/order/${order}`)
    
  };

  return (
    <div className={`border border-zinc-300 p-6 rounded-xl ${isOpen && 'border-zinc-400'}`}>
      <div className="md:flex ju stify-between" >
        <div className="md:flex gap-8 w-full">
          <StepIndicator step={4} />
          <div className="flex flex-col gap-1 w-full">
            <div className="flex gap-3 items-center mb-1">
              <span className="uppercase text-base font-medium">Review</span>
              {
                !isOpen && (
                  <CheckIcon />
                )
              }
            </div>
            <div className="flex items-center font-semibold gap-x-6">
              {
                !isOpen ? (
                  <p className="text-sm">Review your order</p>
                ) : (
                  <p className='text-xs font-normal text-base-heading/70'>By clicking the Place Order button, you confirm that you have read, understand and accept our Terms of Use, Terms of Sale and Returns Policy and acknowledge that you have read Shinning Balloons Privacy Policy.</p>

                )
              }
            </div>
            {
              isOpen && (
                <Button
                  disabled={isLoading}
                  onClick={onSubmit}
                  className="bg-moon-500 w-fit text-base h-12 rounded-[0.5rem] text-white hover:bg-moon-600 mt-6"
                  size="lg"
                  type="submit"
                >
                  Place order
                </Button>
              )
            }

          </div>
        </div>
        {
          !isOpen && (
            <button
              onClick={onClick}
              className="text-xs mt-4 md:my-auto font-medium tracking-tight border my-auto h-fit py-2 px-4 rounded  hover:border-zinc-400 transition-all">
              CHANGE
            </button>
          )
        }
      </div>


    </div>
  )
}
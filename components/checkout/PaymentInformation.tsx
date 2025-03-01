'use client'

import { setCookies } from "@/actions";
import { Button, StepIndicator } from "@/components/index"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiMiniCheckCircle } from "react-icons/hi2";



export const PaymentInformation = () => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const isOpen = searchParams.get("step") === "payment";

  const onClick = () => {
    router.push(pathName + "?step=payment")
  };
  const onSubmit = () => {
    setCookies("paymentMethod", "Visa credit card ending in 9789")
    router.push(pathName + "?step=review")
  };

  return (
    <div className={`border border-zinc-300 p-6 rounded-xl ${isOpen && 'border-zinc-400'} ${( !isOpen) && ' border-emerald-500 bg-emerald-50'}`}>
      <div className="md:flex ju stify-between" >
        <div className="md:flex gap-8 w-full">
          <StepIndicator step={3} />
          <div className="flex flex-col gap-1 w-full">
            <div className="flex gap-3 items-center mb-1">
              <span className="uppercase text-base font-medium">Payment information</span>
              {
                !isOpen && (
                  <HiMiniCheckCircle className="size-5" color="#2F303C" />
                )
              }
            </div>
            <div className="flex items-center font-semibold gap-x-6">
              {
                !isOpen ? (
                  <p className="text-sm">Visa credit card ending in 9789.</p>
                ) : (
                  <>
                    <div className="w-full flex h-[52px] items-center ps-4 border border-zinc-200 bg-zinc-50 rounded-[0.5rem] hover:border-zinc-400 transition-all cursor-pointer">
                      <input
                        className=" cursor-pointer border-gray-300 accent-zinc-600"
                        id="payment-method"
                        type="radio"
                        defaultChecked
                      />
                      <label
                        className="text-zinc-600 cursor-pointer text-sm font-medium ps-2 pr-4 border-gray-300 accent-zinc-600"
                        htmlFor="payment-method">Visa credit card ending in 9789
                      </label>
                    </div>

                  </>

                )
              }
            </div>
            {
              isOpen && (
                <Button
                  onClick={onSubmit}
                  className="bg-moon-500 w-fit text-base h-12 rounded-[0.5rem] text-white hover:bg-moon-600 mt-6"
                  size="lg"
                  type="submit"
                >
                  Continue to review
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
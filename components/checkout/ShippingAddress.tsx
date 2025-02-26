
'use client'

import { ShippingForm, StepIndicator } from "@/components/index"
import { getCookie } from "cookies-next"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { HiMiniCheckCircle } from "react-icons/hi2"

interface Props {
  addressCookie?: string
}

export const ShippingAddress = ({addressCookie}: Props) => {

  const steps = ['shipping', 'payment', 'review']
  const searchParams = useSearchParams()
  const stepFound = steps.find(step => step === searchParams.get("step"))
  const isOpen = searchParams.get("step") === "shipping" || !stepFound || !searchParams.get("step");
  const shippingCookie = getCookie('shippingAddress')

  const fullAddress = JSON.parse(addressCookie ?? '{}');
  const router = useRouter();
  const pathName = usePathname();  

  const onClick = () => {
    router.push(pathName + "?step=shipping")
  }

  return (
    <div className={`border border-zinc-300 p-6 rounded-xl ${ isOpen && 'border-zinc-400'} ${(!shippingCookie && !isOpen) && '!border-red-500 bg-red-50'} ${(shippingCookie && !isOpen) && ' border-emerald-500 bg-emerald-50'}`}>
      <div className="md:flex justify-between w-full">
        <div className="flex lg:gap-8 w-full">
          <StepIndicator step={2} />
          <div className={`flex flex-col gap-1 ${isOpen && 'w-full'}`}>

            <div className="flex gap-3 items-center mb-1">
              <span className="uppercase text-base font-medium">Shipping Address</span>
              {
                (!isOpen && shippingCookie) && (
                  <HiMiniCheckCircle className="size-5" color="#2F303C" />
                )
              }
            </div>

            {
              isOpen ? (
                <ShippingForm addressCookie={addressCookie} />
              ) : (
                <div className="flex items-center font-semibold gap-x-6 max-w-xs">
                  {
                    shippingCookie ? (
                      <p className="text-sm">{fullAddress.address}, {fullAddress.city}, {fullAddress.postalCode}, {fullAddress.state}.</p>
                    ) : <p className="text-sm font-medium text-red-500 ">Shipping fields cannot be empty</p>
                  }
                </div>
              )
            }
          </div>
        </div>

        {
          !isOpen && (
            <button
              onClick={onClick}
              className={`text-xs mt-4 lg:my-auto font-medium tracking-tight border my-auto h-fit py-2 px-4 rounded hover:border-zinc-400 transition-all ${!shippingCookie && 'border-neutral-400 hover:border-neutral-600'}`}>
              CHANGE
            </button>
          )
        }
      </div>
    </div>
  )
}

'use client'

import { CheckIcon, ShippingForm, StepIndicator } from "@/components/index"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface Props {
  addressCookie?: string
}

export const ShippingAddress = ({addressCookie}: Props) => {

  const searchParams = useSearchParams();
  const isOpen = searchParams.get("step") === "shipping" || !searchParams.get("step");

  const {address, postalCode, state, phone, city } = JSON.parse(addressCookie!);
  const router = useRouter();
  const pathName = usePathname();

  const onClick = () => {
    router.push(pathName + "?step=shipping")
  }

  return (
    <div className={`border border-zinc-300 p-6 rounded-xl ${ isOpen && 'border-zinc-400'}`}>
      <div className="md:flex justify-between w-full">
        <div className="flex lg:gap-8 w-full">
          <StepIndicator step={2} />
          <div className={`flex flex-col gap-1 ${isOpen && 'w-full'}`}>

            <div className="flex gap-3 items-center mb-1">
              <span className="uppercase text-base font-medium">Shipping Address</span>
              {
                !isOpen && (
                  <CheckIcon />
                )
              }
            </div>

            {
              isOpen ? (
                <ShippingForm addressCookie={addressCookie} />
              ) : (
                <div className="flex items-center font-semibold gap-x-6 max-w-xs">
                  {
                    !!address ? (
                      <p className="text-sm">{address}, {city}, {postalCode}, {state}.</p>
                    ) : ''
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
              className="text-xs mt-4 lg:my-auto font-medium tracking-tight border my-auto  h-fit py-2 px-4 rounded  hover:border-zinc-400 transition-all">
              CHANGE
            </button>
          )
        }
      </div>
    </div>
  )
}
'use client'

import { Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  orderId: string
}

export const ViewOrder = ({ orderId }: Props) => {
  const router = useRouter()
  const onHandleClick = () => {
    router.push(`/orders/${orderId}`)
  }
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label='View Order Button'
            title='View Order'
            className='p-2 rounded-md hover:bg-neutral-200 group'
            onClick={onHandleClick}>
            <Eye size={16} className='text-neutral-500 group-hover:text-neutral-600 transition-colors'/>
          </button>
        </TooltipTrigger>
        <TooltipContent className="hidden lg:block px-2 py-1 text-xs">View this order</TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}
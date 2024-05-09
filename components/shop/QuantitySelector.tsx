

'use client'

import { cn } from "@/lib/utils";
import { CartProduct, useCartStore } from "@/store/cart-store";
import { useState } from "react";
import { TbMinus, TbPlus } from "react-icons/tb"

interface Props {
  product: CartProduct
  className?: string;
  buttonClassName?: string;
}
export const QuantitySelector = ({
  product,
  className,
  buttonClassName
}: Props) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);

  const updateProductQuantity = useCartStore(state => state.updateProductQuantity)

  const onQuantityChange = (value: number) => {
    if (quantity === 1 && value === -1 || quantity === 25 && value === 1) return;
    setQuantity(quantity + value);
    updateProductQuantity(product, quantity + value)
  }

  return (
    <div className={cn("border w-fit flex rounded-[0.5rem] py-2 items-center", className )}>
      <button
        onClick={() => onQuantityChange(-1)}
        className={cn("mx-2 p-1 hover:bg-zinc-100 rounded transition-all", buttonClassName)}>
        <TbMinus size={17} />
      </button>

      <span className="px-1 w-6 mx-auto flex items-center justify-center text-lg lg:text-base">{quantity}</span>

      <button
        onClick={() => onQuantityChange(1)}
        className={cn("mx-2 p-1 hover:bg-zinc-100 rounded transition-all", buttonClassName)}>
        <TbPlus size={17} />
      </button>
    </div>
  )
}
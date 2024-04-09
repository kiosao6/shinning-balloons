


'use client'

import { useState } from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import { Button } from "@/components/index";


export const AddToCart = () => {

  const [quantity, setQuantity] = useState<number>(1);

  const onQuantityChange = (value: number) => {
    if (quantity === 1 && value === -1 || quantity === 25 && value === 1) return;
    setQuantity(quantity + value);
  }



  return (
    <div className="flex justify-between items-center mt-4 mx-auto gap-x-4">
      <div className="border w-fit h-12 flex rounded-[0.5rem] py-2 items-center">
        <button
          onClick={() => onQuantityChange(-1)}
          className="mx-2 p-1 hover:bg-[#F5F5F5] rounded transition-all">
          <TbMinus size={17} />
        </button>

        <span className="px-1 w-6 mx-auto flex items-center justify-center text-lg">{quantity}</span>

        <button
          onClick={() => onQuantityChange(1)}
          className="mx-2 p-1 hover:bg-[#F5F5F5] rounded transition-all">
          <TbPlus size={17} />
        </button>
      </div>
      <Button className="bg-moon-500 h-12 w-full block text-base rounded-[0.5rem] text-white hover:bg-moon-600 md:max-w-full px-8" variant="default" size="lg">
        Add to cart
      </Button>
    </div>
  )
}
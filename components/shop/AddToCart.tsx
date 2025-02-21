


'use client'

import { useEffect, useState } from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import { Button } from "@/components/index";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";

interface Props {
  title?: string;
  product: {
    id: string;
    title: string;
    price: number;
    category: string;
    discountedPrice?: number | null;
    slug: string;
  }
}

export const AddToCart = ({
  title,
  product
}: Props) => {
  // Store functions
  const addToCartFunction = useCartStore(state => state.addProductToCart);
  const cart = useCartStore(state => state.cart)

  // Array to generate options 
  const options = Array.from({ length: 10 }, (_, i) => i + 1);

  // State to manage quantity
  const [quantity, setQuantity] = useState<number>(1);

  // State to manage number balloon
  const [number, setNumber] = useState<number | null>(null);
  useEffect(() => {
  }, [number])



  const onQuantityChange = (value: number) => {
    if (quantity === 1 && value === -1 || quantity === 25 && value === 1) return;
    setQuantity(quantity + value);
  }


  // Check if the product is a number balloon
  const isNumberBalloon = product.category === 'Numbers';

  const productToSave = {
    ...product,
    quantity: quantity as number,
    number: isNumberBalloon ? number : undefined
  }

  const addToCart = (category: string, index: number) => {

    if (category === 'Numbers') {
      if (number === null) {
        toast.error('Please select a number', {
          className: "!border-zinc-200 z-[99] !gap-2 !text-base-heading [&>div>svg]:fill-red-500",
          duration: 3000,
          action: {
            label: <IoClose className="text-base-heading/70 !rounded" size={16} /> as any,
            onClick: () => { },
          },
        })
        return;
      }
    }

    addToCartFunction(productToSave)
    setQuantity(1);
    setNumber(null);
    toast.success(`${title} ${category === "Numbers" ? index : ''} has been added to your cart`, {
      className: "!border-zinc-200 !gap-2 !text-base-heading",
      duration: 3000,
      action: {
        label: <IoClose className="text-base-heading/70 !rounded" size={16} /> as any,
        onClick: () => { },
      },
    })
  }

  const numberColor = product.title.split(' ')[0].toLowerCase();

  return (
    <>

      {
        isNumberBalloon && (
          <>
            <p className="text-base-heading font-medium text-sm pt-6 pb-3">Number:</p>
            <div>
              {
                options.map((option, index) => (
                  <button
                    title={index.toString()}
                    key={index}
                    className={`border p-2 w-12 h-12 my-1 mr-2 rounded transition-all hover:border-zinc-400 hover:bg-zinc-100 ${number === index ? 'bg-zinc-100 border-zinc-400' : 'bg-white'}`}
                    onClick={() => setNumber(index)}
                  >
                    <Image
                      src={`/products/${numberColor}/${index}.png`}
                      alt="Number Balloon"
                      width={30}
                      height={30}

                    />
                  </button>
                ))
              }
            </div>

          </>
        )
      }

      <div className="flex justify-between items-center mt-4 mx-auto gap-x-4">
        <div className="border w-fit h-12 flex rounded-xl py-2 items-center">
          <button
            onClick={() => onQuantityChange(-1)}
            className="mx-2 p-1 hover:bg-zinc-100 rounded transition-all">
            <TbMinus size={17} />
          </button>

          <span className="px-1 w-6 mx-auto flex items-center justify-center text-lg">{quantity}</span>

          <button
            onClick={() => onQuantityChange(1)}
            className="mx-2 p-1 hover:bg-zinc-100 rounded transition-all">
            <TbPlus size={17} />
          </button>
        </div>
        <Button
          className="bg-moon-500 h-12 w-full block text-base rounded-xl text-white hover:bg-moon-600 md:max-w-full px-8" variant="default" size="lg"
          onClick={() => addToCart(product.category, number || 0)}
        >
          Add to cart
        </Button>
      </div>
    </>
  )
}
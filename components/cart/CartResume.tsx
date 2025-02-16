'use client'

import { currencyFormat } from "@/lib/utils"
import { HiOutlineTrash } from "react-icons/hi2"
import { QuantitySelector } from "../shop/QuantitySelector"
import { CartSummary } from "./CartSummary"
import { CartSummaryDesktop } from "./CartSummaryDesktop"
import Image from "next/image"
import { useCartStore } from "@/store/cart-store"
import Link from "next/link"
import { IoClose } from "react-icons/io5"
import { toast } from "sonner"
import { EmptyCart } from "./EmptyCart"
import { BreadCrumb } from "../shop/BreadCrumb"


export const CartResume = () => {

  const products = useCartStore(state => state.cart);
  const deleteItem = useCartStore(state => state.deleteProduct);
  const deleteProduct = (id: string, title: string, number?: number) => {
    deleteItem(id, number)
    toast.success(`${title} ${number ? number : ''} has been removed from your cart`, {
      className: "!border-zinc-200 !gap-2 !text-base-heading",
      duration: 3000,
      action: {
        label: <IoClose className="text-base-heading/70 !rounded" size={16} /> as any,
        onClick: () => { },
      },
    })
  }

  const subtotal = products.reduce((acc, item) => {
    return acc + (item.discountedPrice ?? item.price) * item.quantity
  }, 0)

  const links = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Shop',
      href: '/shop'
    },
    {
      name: 'Cart',
      href: '/cart'
    }
  ]

  return (
    <>

      {
        products.length === 0 ? (
          <EmptyCart headingClasses="text-4xl" descriptionClasses="text-sm" imageClasses="w-40" />
        ) : (
          <>
            <BreadCrumb links={links} />
            <h1 className="text-4xl mt-12 mb-12 font-bold tracking-tight lg:text-5xl">Cart</h1>
            {/* Desktop Design */}
            <div className="justify-between hidden lg:flex">
              <div className="space-y-6 w-fit">
                <div className="flex text-base-heading/70">
                  <p className="w-96 uppercase text-sm tracking-wider font-medium">Product</p>
                  <p className="w-48 uppercase text-sm tracking-wider font-medium">Quantity</p>
                  <p className="uppercase text-sm tracking-wider font-medium">Price</p>
                </div>
                {
                  products.map((product, index) => (
                    <div key={index} className="border-b pb-6 w- border-zinc-300 flex">
                      <div className="flex gap-4 w-96">
                        <Link href={`/shop/${product.category.toLowerCase()}/${product.slug.toLowerCase()}`}>
                          <Image
                            src={`/colors/${product.slug.toLowerCase()}.png`}
                            alt={`${product.title} Latex Balloon`}
                            width={110}
                            height={110}
                            quality={100}
                            className="rounded aspect-square w-44 h-fit border hover:shadow-sm  transition-all"
                          />
                        </Link>
                        <div className=" w-full">
                          <div className="flex flex-col gap-1">
                            <Link
                              href={`/shop/${product.category.toLowerCase()}`}
                              className="text-sm capitalize text-base-heading/70 leading-5 hover:underline transition-all w-fit">{`${product.category}`}</Link>
                            <Link
                              href={`/shop/${product.category.toLowerCase()}/${product.slug.toLowerCase()}`}
                              className="text-base text-base-heading leading-5 hover:underline transition-all w-fit">{`${product.title}`}</Link>
                            {
                              (product.number || product.number === 0) && (
                                <p className="text-base-heading/70 text-xs">Number: {product?.number}</p>
                              )
                            }

                            {/* We have two buttons, depending on the categoty of the product  */}

                            {
                              (product.number || product.number === 0) && (
                                <button
                                  onClick={() => deleteProduct(product.id, product.title, product.number || 0)}
                                  aria-label="Delete Product Button"
                                  className="flex mt-2 text-sm items-center gap-1 hover:text-red-500 transition-all">
                                  <HiOutlineTrash size={20} />
                                  Remove
                                </button>
                              )
                            }

                            {
                              !(product.number || product.number === 0) && (
                                <button
                                  onClick={() => deleteProduct(product.id, product.title)}
                                  aria-label="Delete Product Button"
                                  className="flex mt-2 text-sm items-center gap-1 hover:text-red-500 transition-all">
                                  <HiOutlineTrash size={20} />
                                  Remove
                                </button>
                              )
                            }
                          </div>
                        </div>
                      </div>
                      <div className="w-48">
                        <QuantitySelector product={product} className="h-10" buttonClassName="mx-1" />
                      </div>

                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <p className="text-base w-fit text-left text-base-heading">{currencyFormat(product.quantity * (product.discountedPrice ?? product.price))}</p>
                          {product.discountedPrice && (
                            <p className="text-base text-left h-fit text-base-heading/40 line-through">{currencyFormat(product.price * product.quantity)}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>

              <CartSummaryDesktop subtotal={subtotal} />

            </div>


            {/* Mobile Design */}

            <div className="space-y-6 mt-12 lg:hidden">
              {
                products.map((product, index) => (
                  <div key={index} className="border-b pb-6 border-zinc-300">
                    <div className="flex gap-4">
                      <Link href={`/shop/${product.category}/${product.slug}`}>
                        <Image
                          src={`/colors/${product.slug}.png`}
                          alt={`${product.title} Latex Balloon`}
                          width={120}
                          height={120}
                          quality={100}
                          className="rounded aspect-square w-48 h-fit border hover:shadow-sm  transition-all"
                        />
                      </Link>
                      <div className=" w-full">

                        <div className="flex flex-col gap-1">
                          <Link
                            href={`/shop/${product.category}/${product.slug}`}
                            className="text-base text-base-heading leading-5 hover:underline transition-all">{`${product.title}`}</Link>
                          {
                            (product.number || product.number === 0) && (
                              <p className="text-base-heading/70 pb-1 text-xs">Number: {product?.number}</p>
                            )
                          }
                          <QuantitySelector product={product} className="h-10" buttonClassName="mx-1" />
                        </div>

                        <div className="flex mt-2 justify-between items-center">
                          <div className="flex space-x-2 items-center">
                            <p className="text-base w-fit text-left text-base-heading">{currencyFormat(product.quantity * (product.discountedPrice ?? product.price))}</p>
                            {product.discountedPrice && (
                              <p className="text-sm text-left h-fit text-base-heading/40 line-through">{currencyFormat(product.price * product.quantity)}</p>
                            )}
                          </div>

                          {/* We have two buttons, depending on the categoty of the product  */}

                          {
                            (product.number || product.number === 0) && (
                              <button
                                onClick={() => deleteProduct(product.id, product.title, product.number || 0)}
                                aria-label="Delete Product Button"
                                className="flex p-1 text-xs items-center gap-1 hover:text-red-500 transition-all">
                                <HiOutlineTrash size={20} />
                              </button>
                            )
                          }
                          {
                            !(product.number || product.number === 0) && (
                              <button
                                onClick={() => deleteProduct(product.id, product.title)}
                                aria-label="Delete Product Button"
                                className="flex p-1 text-xs items-center gap-1 hover:text-red-500 transition-all">
                                <HiOutlineTrash size={20} />
                              </button>
                            )
                          }

                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              <CartSummary subtotal={subtotal}/>
            </div>

          </>

        )
      }

    </>
  )
}
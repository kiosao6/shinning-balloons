'use server'

import { auth } from "@/auth.config"
import prisma from "@/lib/prisma";


interface Products {
  id: string;
  quantity: number;
  price: number;
  number?: string
}


export const placeOrder = async(products: Products[], shippingMethod: string | undefined, address: string ) => {

  const session = await auth();
  const userId = session?.user.id;

  if(!userId) {
    return{
      ok: false,
      message: 'Must be logged in'
    }
  }

  // Get products based on received Ids

  const productsFound = await prisma.product.findMany({
    where: {
      id: {
        in: products.map(p => p.id)
      }
    }
  })

  const finalProducts = productsFound.map((product) => {
    return {
      ...product,
      quantity: products.find((p: { id: string }) => p.id === product.id)!.quantity,
    }
  })


  // Get totals 

  const shipping = shippingMethod === "free" ? 0 : 15
  const shippingDatabase = shippingMethod === "free" ? "free" : "express"

  const subTotal = finalProducts.reduce((acc, product) => acc + product.quantity * (product.discountedPrice ?? product.price), 0) + shipping
  const tax = subTotal * 0.07
  const total = subTotal + tax;

  // Get Address 
  const addressToSave = JSON.parse(address);

  try {
    const order = await prisma.order.create({
      data: {
        subTotal,
        tax,
        total,
        userId,
        shippingMethod: shippingDatabase,

        OrderItem: {
          createMany: {
            data: finalProducts.map(product => ({
              quantity: product.quantity,
              productId: product.id,
            }))
          }
        },

      }
    })

    const orderAddres = await prisma.orderAddress.create({
      data: {
        fullName: addressToSave.name,
        company: addressToSave.company ?? null,
        address: addressToSave.address,
        city: addressToSave.city,
        postalCode: addressToSave.postalCode,
        state: addressToSave.state,
        phone: addressToSave.phone,
        orderId: order.id
      }
    })

    return order.id

  } catch (error) {
    console.log(error)
  }


}
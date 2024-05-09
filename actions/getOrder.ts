
'use server'

import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"




export const getOrder = async(id: string) => {

  const order = await prisma.order.findUnique({
    where: {
      id
    },
    include: {
      OrderItem: true,
      OrderAddress: true,
    }

  })

  if(!order) {
    notFound();
  }
  const user = await prisma.user.findUnique({
    where: {
      id: order.userId
    }
  })

  const productIds = order?.OrderItem.map(item => item.productId);
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds
      }
    },
  })

  const productsToSend = products.map(product => {
    const orderItem = order?.OrderItem.find(item => item.productId === product.id);
    return {
      ...product,
      quantity: orderItem?.quantity || 0 // Set default quantity to 0 if not found
    };
  });


  return {
    name: user?.name,
    email: user?.email,
    address: order.OrderAddress,
    shippingMethod: order.shippingMethod,
    products: productsToSend,
    subtotal: order.subTotal,
    tax: order.tax,
    total: order.total,
    number: null,
  }

  
}
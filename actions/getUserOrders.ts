'use server'

import prisma from "@/lib/prisma"

export const getUserOrders = async(userId: string) => {
  try {
    const response = await prisma.order.findMany({
      where: {
        userId : userId
      },
      include: {
        OrderItem: {
          include: {
            product : {
              select: { slug: true, title: true }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    const orders = response.map(order => {
      
      const firstItem = order.OrderItem[0];
      const itemName = order.OrderItem[0].product.title;
      const slug = firstItem.product.slug;
      const itemsQuantity = (order.OrderItem.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0));

      return {
        orderId: order.id,
        createdAt: order.createdAt,
        total: order.total,
        itemName: itemName,
        slug: slug,
        items: itemsQuantity,
        deliveryMethod: order.shippingMethod
      }
    })

    return orders
  } catch (error) {
    console.log(error)
  }
} 


'use server'
import { cookies } from "next/headers"


export const setCookies = async (name: string, value: string) => {
  (await cookies()).set(`${name}`, `${value}`)
}

export const getCookies = async(key: string) => {
  return (await cookies()).get(key);
}

export const getCheckoutStep = async() => {
  if((await cookies()).has("shippingAddress") && !(await cookies()).has("paymentMethod")) {
    return "payment"
  }
  if((await cookies()).has("shippingAddress") && (await cookies()).has("paymentMethod")) {
    return "review"
  }

  return "shipping"
}
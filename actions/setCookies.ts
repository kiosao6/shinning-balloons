

'use server'
import { cookies } from "next/headers"


export const setCookies = async (name: string, value: string) => {
  cookies().set(`${name}`, `${value}`)
}

export const getCookies = async(key: string) => {
  return cookies().get(key)
}

export const getCheckoutStep = async() => {
  if(cookies().has("shippingAddress") && !cookies().has("paymentMethod")) {
    return "payment"
  }
  if(cookies().has("shippingAddress") && cookies().has("paymentMethod")) {
    return "review"
  }

  return "shipping"
}
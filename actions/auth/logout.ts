'use server'

import { signOut } from "@/auth.config"
import { redirect } from "next/navigation";


export const Logout = async () => {
  await signOut({redirect: false})
}
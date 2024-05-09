'use client'

import { Logout } from "@/actions"
import { useSession } from "next-auth/react"
import styles from "./MenuItem.module.css"
import { IoChevronForwardOutline } from "react-icons/io5"



export const LogoutButton = () => {
  const { data: session } = useSession()
  return (
    <button className={`${styles.link} flex items-center py-3 border-b justify-between text-lg text-gray-text font-medium hover:text-base-heading/70`} onClick={() => Logout()}>Logout
    <IoChevronForwardOutline size={15} />
    </button>
  )
}
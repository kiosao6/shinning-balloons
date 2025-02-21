'use client'

import { useStore } from "@/store/ui-store"
import Image from "next/image"
import Link from "next/link"


export const LogoHeader = () => {

  const isMenuOpen = useStore((state => state.isMenuOpen));
  const toggleMenu = useStore(state => state.toggleMenu)
  

  const onClick = () => {
    if(isMenuOpen) {
      toggleMenu()
    }
  }

  return (
    <Link onClick={onClick} href="/" className="flex items-center justify-center gap-x-4 z-30 lg:hidden">
      <Image
        src="/logo.png"
        alt="Shinning Balloons Logo"
        width={35}
        height={35}
      />
      <span className="hidden text-xl tracking-tight font-medium md:block">Shinning Balloons</span>
    </Link>
  )
}
'use client'

import { useStore } from "@/store/ui-store"
import Image from "next/image"
import Link from "next/link"


export const LogoHeader = () => {

  const toggleMenu = useStore((state) => state.toggleMenu);
  const isMenuOpen = useStore((state => state.isMenuOpen));

  const onClick = () => {
    if(isMenuOpen) {
      toggleMenu();
      document.body.classList.remove('overflow-hidden');
      document.querySelector('main')?.classList.remove('opacity-0');
      document.querySelector('footer')?.classList.remove('opacity-0');
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
import { CartDrawerMobile, CartPopover, LogoHeader, MenuButton } from "@/components/index"
import Image from "next/image"
import Link from "next/link"
import { UserPopover } from "./UserPopover";

export const Header = () => {
  return (
    <header className="py-4 flex bg-white border-b px-8 text-base-heading z-50 sticky top-0 h-[70px] lg:h-auto" >
      <div className="flex w-full items-center justify-between gap-x-3 max-w-7xl mx-auto">
        <MenuButton />
        <Link href="/" className="hidden lg:flex items-center justify-center gap-x-4 z-30">
          <Image
            src="/logo.png"
            alt="Shinning Balloons Logo"
            width={35}
            height={35}
          />
          <span className="hidden text-xl tracking-tight font-medium md:block">Shinning Balloons</span>
        </Link>
        <LogoHeader />
        <CartDrawerMobile />
        <nav className="hidden md:flex gap-x-8 text-base font-normal md:items-center">
          <UserPopover />
          <Link href="/shop" className="text-base-heading hover:underline">Shop</Link>
          <Link href="/blog" className="text-base-heading hover:underline">Blog</Link>
          <CartPopover />
        </nav>
      </div>
    </header>
  )
}
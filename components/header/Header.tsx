import { MenuButton } from "@/components/index"
import Image from "next/image"
import Link from "next/link"


export const Header = () => {
  return (
    <header className="py-4 lg:py-4 bg-white border-b px-8 text-base-heading z-50 fixed top-0 right-0 left-0" >
      <div className="flex w-full items-center justify-between gap-x-3 max-w-7xl mx-auto">
        <MenuButton />
        <Link href="/" className="flex items-center justify-center gap-x-4 z-30">
          <Image
            src="/logo.png"
            alt="Shinning Balloons Logo"
            width={35}
            height={35}
          />
          <span className="hidden text-xl tracking-tight font-medium md:block">Shinning Balloons</span>
        </Link>
        <button className="text-sm md:hidden">
          <a href="#">Cart (0)</a>
        </button>
        <nav className="hidden md:flex gap-x-8 text-sm font-normal">
          <Link href="/shop" className="text-base-heading hover:underline">Shop</Link>
          <Link href="/blog" className="text-base-heading hover:underline">Blog</Link>
          <Link href="/cart" className="text-base-heading hover:underline">Cart (0)</Link>
        </nav>


      </div>
    </header>
  )
}
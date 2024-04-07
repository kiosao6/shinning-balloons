'use client'

import Link from "next/link"

export const MobileMenu = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 top-0 bg-moon-50 z-10">
      <nav className="z-10 h-full flex flex-col items-center justify-center gap-y-6 text-3xl">
        <Link href="/shop" className="text-base-heading hover:underline">Shop</Link>
        <Link href="/blog" className="text-base-heading hover:underline">Blog</Link>
        <Link href="/cart" className="text-base-heading hover:underline">Cart(0)</Link>
      </nav>
    </div>
  )
}
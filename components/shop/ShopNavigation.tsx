'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"


const navigation = [

  {
    name: "Latex",
    href: "/shop/latex",
  },
  {
    name: "Numbers",
    href: "/shop/numbers",
  },
  {
    name: "Decoration",
    href: "/shop/decoration",
  },
  {
    name: "Sale",
    href: "/shop/sale",
  },
  
]
export const ShopNavigation = () => {

  const pathName = usePathname();
  return (
    <ul className="flex flex-wrap gap-4 text-base-heading/60 text-sm">
    {navigation.map((item) => (
      <li key={item.name}>
        <Link className={`transition hover:underline hover:text-base-heading ${(item.href === pathName) && 'text-base-heading'}`} href={item.href}>
          {item.name}
        </Link>
      </li>
    ))
    }
  </ul>
  )
}
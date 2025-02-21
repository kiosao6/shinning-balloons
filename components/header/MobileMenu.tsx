'use client'
import { IoChevronForwardOutline } from "react-icons/io5";
import { useStore } from "@/store/ui-store"
import Link from "next/link"
import styles from "./MenuItem.module.css"
import {  CallToAction, DropdownUser } from "@/components/index";
import { useSession } from "next-auth/react";

const links = [
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/cart",
    label: "Cart",
  },
]

export const MobileMenu = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const toggleMenu = useStore(state => state.toggleMenu)
  

  const onClick = () => {
    toggleMenu()
  }

  return (
    <div className="fixed bottom-0 right-0 left-0 top-0 mt-24 bg-white z-20">
      <nav className="bg-dark px-8 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-1">

          {
            links.map((link, i) => (
              <Link key={i} href={link.href} onClick={onClick} className={`${styles.link} flex items-center py-3 border-b justify-between text-lg text-gray-text font-medium hover:text-base-heading/70`}>
                {link.label}
                <IoChevronForwardOutline size={15} />

              </Link>

            ))
          }

          {
            !isAuthenticated && (
              <Link href="/login" onClick={onClick} className={`${styles.link} flex items-center py-3 border-b justify-between text-lg text-gray-text font-medium hover:text-base-heading/70`}>
                Login
                <IoChevronForwardOutline size={15} />
              </Link>
            )
          }

          <CallToAction action={onClick} className="mt-12 lg:mx-auto"/>

        </div>
        <div>
          {
            !session ? (
              <p className={`${styles.link} text-sm text-base-heading py-8`}>
                Developed by <a target="blank" className="underline" href="#">Gabriel Maestre</a> using Next.Js App Rounter syntax.
              </p>
            ) : (
              <DropdownUser />
            )
          }
        </div>
      </nav>
    </div>
  )
}
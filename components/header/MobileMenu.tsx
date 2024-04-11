'use client'
import { IoChevronForwardOutline } from "react-icons/io5";
import { useStore } from "@/store/ui-store"
import Link from "next/link"
import styles from "./MenuItem.module.css"
import { Button } from "@/components/index";

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
  {
    href: "/login",
    label: "Login",
  },

]

export const MobileMenu = () => {
  const toggleMenu = useStore(state => state.toggleMenu);

  const onClick = () => {
    toggleMenu();
    document.body.classList.toggle('overflow-hidden');
  }

  return (
    <div className="fixed bottom-0 right-0 left-0 top-0 mt-[68px] bg-white z-20">
      <nav className="bg-dark px-8 h-full flex flex-col pt-9 justify-between">
        <div className="flex flex-col gap-1">

          {
            links.map((link, i) => (
              <Link key={i} href={link.href} onClick={onClick} className={`${styles.link} flex items-center py-3 border-b justify-between text-lg text-gray-text font-medium hover:text-base-heading/70`}>
                {link.label}
                <IoChevronForwardOutline size={15} />

              </Link>

            ))
          }

          <Button
            onClick={onClick}
            className={`${styles.link} bg-moon-500 block text-base rounded-[0.5rem] text-white hover:bg-moon-600 md:max-w-64 p-0 mt-12`} variant="default" size="lg">
            <Link className="w-full h-full flex justify-center items-center" href="/shop">Shop now</Link>
          </Button>


        </div>

        <p className={`${styles.link} text-sm text-base-heading py-8`}>
          Developed by <a target="blank" className="underline" href="#">Gabriel Maestre</a> using Next.Js App Rounter syntax.
        </p>
      </nav>
    </div>
  )
}
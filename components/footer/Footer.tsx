import Image from "next/image"
import Link from "next/link"


export const Footer = () => {
  return (
    <footer className="px-8 py-24 mx-auto text-sm bg-moon-50 border-t-moon-100 border-t text-base-heading text-center p-4 md:text-left">

      <div className="max-w-7xl mx-auto md:flex flex-row">

        <div className="mx-auto md:w-72 md:mx-0">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <Image 
              src="/logo.png"
              width={50}
              height={50}
              alt="Logo"
              className="w-6"
            />
            <span className="text-xl tracking-tight font-regular">Shinning Balloons</span>
          </div>
          <h2 className="text-sm mt-3">Create moments that last a lifetime with our premium selection of balloons for every special occasion.</h2>
          <p className="text-base-heading mt-3">Copyright © 2024 - All rights reserved</p>
        </div>

        <div className="mt-10 md:flex md:flex-row md:pl-24 md:mt-0">
          {/* Main Links  */}
          <div className="lg:w-64 md:px-8">
            <span className="uppercase text-base-heading/50 tracking-widest font-semibold">links</span>
            <div className="flex flex-col justify-center items-center gap-2 mt-3 mb-10 text-sm [&>a]:w-fit md:items-start">
              <Link href="/" className="hover:underline px-2 md:p-0">Home</Link>
              <Link href="/about" className="hover:underline px-2 md:p-0">About</Link>
              <Link href="/faq" className="hover:underline px-2 md:p-0">FAQ</Link>
              <Link href="/blog" className="hover:underline px-2 md:p-0">Blog</Link>
            </div>
          </div>


          {/* Legal Links  */}
          <div className="lg:w-64 md:px-8">
            <span className="uppercase text-base-heading/50 tracking-widest font-semibold">legal</span>
            <div className="flex flex-col justify-center items-center gap-2 mt-3 mb-10 text-sm [&>a]:w-fit md:items-start">
              <Link href="/terms-and-conditions" className="hover:underline px-2 md:p-0">Terms and Conditions</Link>
              <Link href="/privacy-policy" className="hover:underline px-2 md:p-0">Privacy Policy</Link>
            </div>
          </div>
          {/* Shop Links  */}
          <div className="lg:w-64 md:px-8"> 
            <span className="uppercase text-base-heading/50 tracking-widest font-semibold">shop</span>
            <div className="flex flex-col justify-center items-center gap-2 mt-3 mb-10 [&>a]:w-fit md:items-start">
              <Link href="/cart" className="hover:underline px-2 md:p-0">Cart</Link>
              <Link href="/checkout" className="hover:underline px-2 md:p-0">Checkout</Link>
              <Link href="/blog" className="hover:underline px-2 md:p-0">Number Balloons</Link>
              <Link href="/blog" className="hover:underline px-2 md:p-0">Latex Balloons</Link>
            </div>
          </div>

        </div>

      </div>
      <p className="leading-relaxed text-base-heading max-w-7xl mx-auto">Developed by <a href="#" className="font-medium text-base-heading underline">Gabriel Maestre</a> using Next.js App Router Syntax.</p>

    </footer>
  )
}
import Link from "next/link"


export const Footer = () => {
  return (
    <footer className="px-8 py-24 mx-auto text-sm bg-moon-100 border-t-moon-200 border-t text-base-heading text-center p-4 md:text-left">

      <div className="max-w-7xl mx-auto md:flex flex-row">

        <div className="mx-auto md:w-72 md:mx-0">
          <span className="text-base">Shinning Balloons</span>
          <h2 className="text-sm mt-3">Create moments that last a lifetime with our premium selection of balloons for every special occasion.</h2>
          <p className="text-base-heading/50 mt-3">Copyright © 2024 - All rights reserved</p>
        </div>

        <div className="mt-10 md:flex md:flex-row md:pl-24 md:mt-0">
          {/* Main Links  */}
          <div className="lg:w-64 md:px-8">
            <span className="uppercase text-base-heading/50 tracking-widest font-semibold">links</span>
            <div className="flex flex-col justify-center items-center gap-2 mt-3 mb-10 text-sm [&>a]:w-fit md:items-start">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/faq" className="hover:underline">FAQ</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </div>
          </div>


          {/* Legal Links  */}
          <div className="lg:w-64 md:px-8">
            <span className="uppercase text-base-heading/50 tracking-widest font-semibold">legal</span>
            <div className="flex flex-col justify-center items-center gap-2 mt-3 mb-10 text-sm [&>a]:w-fit md:items-start">
              <Link href="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>
          {/* Shop Links  */}
          <div className="lg:w-64 md:px-8"> 
            <span className="uppercase text-base-heading/50 tracking-widest font-semibold">shop</span>
            <div className="flex flex-col justify-center items-center gap-2 mt-3 mb-10 [&>a]:w-fit md:items-start">
              <Link href="/cart" className="hover:underline">Cart</Link>
              <Link href="/checkout" className="hover:underline">Checkout</Link>
              <Link href="/blog" className="hover:underline">Number Balloons</Link>
              <Link href="/blog" className="hover:underline">Latex Balloons</Link>
            </div>
          </div>

        </div>

      </div>
      <p className="leading-relaxed text-base-heading/50 max-w-7xl mx-auto">Developed by <a href="#" className="font-medium text-base-heading underline">Gabriel Maestre</a> using Next.js App Router Syntax.</p>

    </footer>
  )
}
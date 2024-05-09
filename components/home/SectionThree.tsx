import { Button, ProductGridHome } from "@/components/index";
import Link from "next/link";


export const SectionThree = () => {
  return (
    <section className="my-16 mx-auto max-w-7xl ">
      <div className="mx-auto px-8 lg:px-0">
        <h1 className="text-3xl mb-3 lg:mb-6 font-bold tracking-tight text-center lg:text-5xl">Trending Colors</h1>
        <p className="text-base pb-10 text-base-heading/60 max-w-3xl text-center leading-relaxed mx-auto md:text-lg">Discover the latest trending colors in balloon decor.</p>
      </div>

      <ProductGridHome className="px-8" />
      <Button className="bg-moon-500 h-12 mt-14 mx-auto block text-base rounded-[0.5rem] text-white hover:bg-moon-600 w-64 p-0" variant="default" size="lg">
        <Link className="w-full h-full flex justify-center items-center" href="/shop">Find more colors</Link>
      </Button>


    </section>
  )
}
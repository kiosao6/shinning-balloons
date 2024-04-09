

import { Button, MiniList } from "@/components/index";
import Image from "next/image";
import Link from "next/link";

export const SectionOne = () => {
  return (
    <section className="mt-36 mb-16 flex px-8 flex-col max-w-7xl mx-auto lg:flex-row lg:justify-between lg:gap-8">
        <div className="max-w-xl mx-auto lg:mx-0">
          <p className="text-5xl mb-10 font-bold tracking-tight text-center lg:text-left lg:text-6xl lg:mb-6">Never miss a celebration again</p>
          <h1 className="text-lg leading-relaxed mb-10 text-base-heading/80 mx-auto text-center lg:text-left lg:text-lg lg:mb-6">At Shinning Balloons, we pride ourselves on offering a collection of balloons crafted to the highest standards of quality, ensuring that every balloon adds a touch of elegance to any occasion or celebration to elevate your décor and create unforgettable memories.</h1>
          <MiniList />
          <Button className="bg-moon-500 mx-auto block text-base rounded-[0.5rem] text-white hover:bg-moon-600 w-64 p-0 md:mx-auto lg:mx-0" variant="default" size="lg">
            <Link className="w-full h-full flex justify-center items-center" href="/shop">Shop now</Link>
          </Button>
        </div>
        <div className="mt-16 aspect-[4/5] max-w-lg lg:mt-0 mx-auto lg:mx-0">
          <Image
            src="/heroimage.webp"
            alt="Balloons in the sky"
            width={500}
            height={500}
            className="w-full aspect-[4/5] rounded-xl"
            priority={true}
          />
        </div>
      </section>
  )
}
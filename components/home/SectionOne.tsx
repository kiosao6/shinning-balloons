

import { Button, CallToAction, MiniList } from "@/components/index";
import Image from "next/image";

export const SectionOne = () => {
  return (
    <section className="mt-16 mb-16 flex px-8 flex-col max-w-7xl mx-auto lg:flex-row lg:justify-between lg:gap-8">
        <div className="max-w-xl mx-auto lg:mx-0">
          <p className="text-5xl mb-10 font-bold tracking-tight text-center lg:text-left lg:text-6xl lg:mb-6">Never miss a celebration again</p>
          <h1 className="text-base leading-relaxed mb-10 text-base-heading/70 mx-auto text-center lg:text-left lg:text-lg lg:mb-6">At Shinning Balloons, we pride ourselves on offering a collection of balloons crafted to the highest standards of quality, ensuring that every balloon adds a touch of elegance to any occasion or celebration to elevate your décor and create unforgettable memories.</h1>
          <MiniList />
          <CallToAction />
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
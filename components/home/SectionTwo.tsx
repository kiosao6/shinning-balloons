

// import { Button, MiniList } from "@/components/index";
import Image from "next/image";
import Link from "next/link";


export const SectionTwo = () => {
  return (
    <section className="my-16 mx-auto bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-8 lg:px-0 py-16">
        <h1 className="text-3xl mb-3 lg:mb-6 font-bold tracking-tight text-center lg:text-5xl">Browse by Category</h1>
        <p className="text-base pb-10 text-base-heading/70 max-w-3xl text-center leading-relaxed mx-auto md:text-lg">Explore our categories for balloon inspiration and variety.</p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:px-8">

          <Link href="#" className="w-fit z-10 rounded-xl mx-auto relative bg-black/50 flex flex-col items-center justify-center group transition-all duration-300 lg:hover:scale-[1.02]">
            <Image
              src="/products/latexBalloons.webp"
              width={500}
              height={500}
              alt="Silver Number Balloons"
              className="w-full mix-blend-overlay aspect-[1/1] rounded-xl max-w-sm mx-auto"
            />
            <h2
              className="text-white h-fit text-3xl font-medium absolute text-center group-hover:underline">
              Latex Balloons
            </h2>
          </Link>

          <Link href="#" className="w-fit z-10 rounded-xl mx-auto relative bg-black/50 flex flex-col items-center justify-center group transition-all duration-300 lg:hover:scale-[1.02]">
            <Image
              src="/products/silverPack.webp"
              width={500}
              height={500}
              alt="Silver Number Balloons"
              className="w-full mix-blend-overlay aspect-[1/1] rounded-xl max-w-sm mx-auto"
            />
            <h2
              className="text-white h-fit text-3xl font-medium absolute text-center group-hover:underline">
              Number Balloons
            </h2>
          </Link>

          <Link href="#" className="w-fit z-10 rounded-xl mx-auto relative bg-black/50 flex flex-col items-center justify-center group transition-all duration-300 lg:hover:scale-[1.02]">
            <Image
              src="/products/room.webp"
              width={500}
              height={500}
              alt="Silver Number Balloons"
              className="w-full mix-blend-overlay aspect-[1/1] rounded-xl max-w-sm mx-auto"
            />
            <h2
              className="text-white h-fit text-3xl font-medium absolute text-center group-hover:underline">
              Room Decoration
            </h2>
          </Link>
        </div>
      </div>

    </section>


  )
}
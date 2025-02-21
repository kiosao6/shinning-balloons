

import Image from "next/image";
import Link from "next/link";

const categories = [

  {
    image: "/products/latexBalloons.webp",
    title: "Latex Balloons",
    slug: "latex"
  },
  {
    image: "/products/silverPack.webp",
    title: "Number Balloons",
    slug: "numbers"
  },
  {
    image: "/products/room.webp",
    title: "Room Decoration",
    slug: "decoration"
  },

]

export const SectionTwo = () => {
  return (
    <section className="my-16 mx-auto bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-8 lg:px-0 py-16">
        <h1 className="text-3xl mb-3 lg:mb-6 font-bold tracking-tight text-center lg:text-5xl">Browse by Category</h1>
        <p className="text-base pb-10 text-base-heading/60 max-w-3xl text-center leading-relaxed mx-auto md:text-lg">Explore our categories for balloon inspiration and variety.</p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:px-8">

          {
            categories.map((category, index) => (
              <Link key={index} href={`/shop/${category.slug}`} className="w-fit z-10 rounded-2xl mx-auto relative bg-black/50 flex flex-col items-center justify-center group transition-all duration-300 lg:hover:scale-[1.02]">
                <Image
                  src={category.image}
                  width={500}
                  height={500}
                  alt={category.title}
                  className="w-full mix-blend-overlay rounded-2xl aspect-[1/1] max-w-sm mx-auto"
                />
                <h2
                  className="text-white h-fit text-3xl font-medium absolute text-center group-hover:underline">
                  {category.title}
                </h2>
              </Link>
            ))
          }
          
        </div>
      </div>

    </section >


  )
}
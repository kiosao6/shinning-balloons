import { Product } from "../shop/Product";
import { Button } from "@/components/index";
import Link from "next/link";


const balloons = [
  {
    id: 1,
    image: "/colors/ChromeMauvePink.png",
    title: "Chrome Mauve Pink",
    slug: "chrome-mauve-pink",
    price: 10,
    discountedPrice: 7,
  },
  {
    id: 2,
    image: "/colors/ChromePurple.png",
    title: "Chrome Purple",
    slug: "chrome-purple",
    price: 10,
  },
  {
    id: 3,
    image: "/colors/LimeGreen.png",
    title: "Lime Green",
    slug: "lime-green",
    price: 10,
  },
  {
    id: 4,
    image: "/colors/RobinsEggBlue.png",
    title: "Robin's Egg Blue",
    slug: "robins-egg-blue",
    price: 10,
  },

];

export const SectionThree = () => {
  return (
    <section className="my-16 mx-auto max-w-7xl ">
      <div className="mx-auto px-8 lg:px-0">
        <h1 className="text-3xl mb-3 lg:mb-6 font-bold tracking-tight text-center lg:text-5xl">Trending Colors</h1>
        <p className="text-base pb-10 text-base-heading/70 max-w-3xl text-center leading-relaxed mx-auto md:text-lg">Discover the latest trending colors in balloon decor.</p>
      </div>

      <div className="px-8 grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8">

        {balloons.map((balloon) => (
          <Product key={balloon.id} {...balloon} />
        ))}
      </div>

      <Button className="bg-moon-500 mt-14 mx-auto block text-base rounded-[0.5rem] text-white hover:bg-moon-600 w-64 p-0" variant="default" size="lg">
        <Link className="w-full h-full flex justify-center items-center" href="/shop">Find more colors</Link>
      </Button>


    </section>
  )
}
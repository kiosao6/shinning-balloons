import { CallToAction, ProductGridHome } from "@/components/index";


export const SectionThree = () => {
  return (
    <section className="my-16 mx-auto max-w-7xl px-8">
      <div className="mx-auto lg:px-0">
        <h1 className="text-3xl mb-3 lg:mb-6 font-bold tracking-tight text-center lg:text-5xl">Trending Colors</h1>
        <p className="text-base pb-10 text-base-heading/60 max-w-3xl text-center leading-relaxed mx-auto md:text-lg">Discover the latest trending colors in balloon decor.</p>
      </div>

      <ProductGridHome />
      <div className="w-full flex justify-center items-center">
        <CallToAction text="Find more colors" className="mt-12"/>
      </div>

    </section>
  )
}
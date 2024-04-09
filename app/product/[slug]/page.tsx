import { AccordionProduct, AddToCart, ProductGrid } from "@/components/index";
import { currencyFormat } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { TbArrowNarrowLeft } from "react-icons/tb";


interface Props {
  params: {
    slug: string;
  }
}


export default async function ProductPage({
  params
}: Props) {
  return (
    <main className="mt-24 px-8 max-w-7xl mx-auto text-base-heading">
      <Link href="/shop" className="flex mb-16 transition-all items-center gap-x-2 w-fit group hover:underline">
        <TbArrowNarrowLeft size={20} className="text-base-heading/70 group-hover:text-base-heading" />
        <span className="text-base-heading/70 group-hover:text-base-heading">Back to shop</span>
      </Link>

      <section className="mx-auto mb-32 md:flex md:justify-between">
        <Image
          src={`/colors/${params.slug}.png`}
          alt={`${params.slug} balloon`}
          width={500}
          height={500}
          priority
          className="w-full h-fit aspect-[1/1] rounded-xl max-w-md mx-auto"
        />
        <div className="mb-2 max-w-[30rem]">
          <h1 className="text-3xl leading-relaxed md:text-3xl lg:text-5xl tracking-tight font-bold mt-8 md:mt-0">{`Lime Green Latex Balloon`}</h1>
          <p className="text-lg md:pt-2 md:text-xl">
            {currencyFormat(10)}
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-2 md:mt-4 text-base-heading/70">
            {
              `A Lime Green Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.`
            }
          </p>

          <AddToCart />
          <AccordionProduct />
        </div>
      </section>

      <section className="mx-auto max-w-6xl mb-16">
        <h3 className="text-3xl mb-3 lg:mb-6 font-bold tracking-tight text-center lg:text-5xl">Related Balloons</h3>
        <p className="text-base pb-10 text-base-heading/70 max-w-3xl text-center leading-relaxed mx-auto md:text-lg">You might also consider these balloons</p>
        <ProductGrid />
      </section>
    </main>
  );
}
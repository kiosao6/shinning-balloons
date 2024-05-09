import { getProductBySlug } from "@/actions";
import { AccordionProduct, AddToCart, BreadCrumb, ProductGridRelated, SaleBadge } from "@/components/index";
import { currencyFormat } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TbArrowNarrowLeft } from "react-icons/tb";


interface Props {
  params: {
    slug: string;
  }
}


export default async function ProductPage({
  params
}: Props) {

  const product = await getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const { title, price, description, discountedPrice, material, category, id, slug } = product;

  const productToSend = {
    id,
    title,
    category: category.name,
    price,
    discountedPrice,
    slug
  }

  const links = [
    {
      name: "Shop",
      href: "/shop"
    },
    {
      name: category.name,
      href: `/shop/${category.slug}`
    },
    {
      name: title,
      href:`/shop/${category.slug}/${slug}`
    }
  ]

  return (
    <main className="mt-10 mb-16 px-8 max-w-7xl mx-auto text-base-heading">
      <BreadCrumb links={links} />

      <section className="mx-auto mt-12 mb-32 flex flex-col md:flex-row md:justify-between gap-8">
        <Image
          src={`/colors/${params.slug}.png`}
          alt={`${params.slug} balloon`}
          width={500}
          height={500}
          priority
          className="w-full h-fit aspect-[1/1] rounded-xl max-w-md mx-auto"
        />

        <div className="mb-2 max-w-[30rem] mx-auto md:mx-0">

          <h1 className="text-3xl md:text-3xl lg:text-5xl tracking-tight font-bold">{title}</h1>

          {/* Pricing Section */}
          <div className="flex items-center my-3 gap-3">
            <p className="text-base md:text-xl font-medium text-base-heading/70">{currencyFormat(discountedPrice || price)}</p>
            {discountedPrice && (
              <p className="text-base md:text-xl text-base-heading/40 line-through">{currencyFormat(price)}</p>
            )}
            {discountedPrice && <SaleBadge className="static" />}
          </div>

          {/* Description Section */}
          <p className="text-sm md:text-base leading-relaxed mt-2 md:mt-4 text-base-heading/70">
            {description}
          </p>

          <AddToCart title={title} product={productToSend} />
          <AccordionProduct material={material as string} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl mb-16">
        <h3 className="text-3xl mb-3 lg:mb-6 font-bold tracking-tight text-center lg:text-5xl">Related Balloons</h3>
        <p className="text-base pb-10 text-base-heading/70 max-w-3xl text-center leading-relaxed mx-auto md:text-lg">You might also consider these balloons</p>
        <ProductGridRelated slug={slug} />
      </section>
    </main>
  );
}
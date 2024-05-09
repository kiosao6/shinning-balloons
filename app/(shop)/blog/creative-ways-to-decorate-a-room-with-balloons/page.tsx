import { BreadCrumb } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { TbArrowNarrowLeft } from "react-icons/tb";



interface Props {
  params: {
    slug: string;
  }
}

export default function ArticlePage({
  params
}: Props) {
  const links = [
    {
      name: "Blog",
      href: "/blog"
    },
    {
      name: "Creative Ways to Decorate a Room",
      href: "/blog/creative-ways-to-decorate-a-room-with-balloons"
    }
  ]
  return (
    <main>
      <section className="mt-10 mb-24 px-8 max-w-6xl mx-auto text-base-heading ">
      <BreadCrumb links={links} />

        <div className="max-w-3xl mt-12">
          <p className="text-base-heading/70 mb-2">Abril 7, 2024</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">Creative Ways to Decorate a Room with Balloons</h1>
          <p className="text-base-heading/70 md:text-lg">Discover techniques to infuse charm and excitement into any room, creating unforgettable moments with the magic of balloons.</p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row-reverse md:justify-between">
          <div className="border-b pb-4 md:border-l md:w-72 md:pl-8 md:border-b-0 md:pb-0 ">
            <p className="text-xs text-base-heading/70">Posted by</p>
            <p className="text-base-heading/70 text-sm">Gabriel Maestre</p>
            <div className="hidden md:block mt-12">
              <p className="text-base-heading/70 text-sm mb-3">Related reading</p>
              <div>
                <Link
                  href="/blog/the-not-so-fun-side-of-balloons"
                  className="font-medium hover:underline">
                  The Not-So-Fun Side of Balloons
                </Link>
                <p className="text-base-heading/70 mt-2 leading-relaxed max-w-full text-sm">
                  Explore the downside of balloons and their environmental impact. Unveil the realities of balloon usage and discover ways to minimize their ecological footprint.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 max-w-[800px] md:mt-0">
            <Image
              src="/article1.webp"
              width={700}
              height={700}
              alt="Article image"
              className="rounded-xl"
              priority
            />
            <section className="mt-12 md:pr-20">
              <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-heading">
                Introduction
              </h2>
              <p className="text-base-heading/70 leading-relaxed">
                Balloons are a fantastic way to bring color, fun, and personality into any room. Whether you&#39;re planning a birthday bash, a baby shower, or just want to spruce up your living space, balloons offer endless possibilities for creative decoration. In this article, we&#39;ll explore some creative ways to use balloons to transform your room into a vibrant and festive oasis.
              </p>
            </section>
            <section className="mt-12 md:pr-20">
              <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-heading">
                Let&#39;s dive into some creative ways to decorate a room
              </h2>
              <div className="mb-4">
                <h4 className="text-lg md:text-xl font-bold tracking-tight mb-4 text-base-heading">1. Ceiling Canopy</h4>
                <p className="text-base-heading/70">
                  Hang balloons from the ceiling to create a whimsical canopy effect. Use clear fishing line or ribbon to suspend the balloons at different heights, creating depth and dimension. This adds a playful touch to the room and makes it feel like you&#39;re walking under a sky full of balloons.
                </p>
              </div>
              <Image
                src="/roomdecor.jpg"
                width={500}
                height={500}
                alt="Article image"
                className="rounded-xl mt-4"
                priority
              />
            </section>
            <section className="mt-12 md:pr-20">
              <div className="mb-4">
                <h4 className="text-lg md:text-xl font-bold tracking-tight mb-4 text-base-heading">2. Balloon Wall</h4>
                <p className="text-base-heading/70">
                Create a stunning backdrop by covering a wall with balloons of various sizes and colors. Use adhesive hooks or tape to secure the balloons in a random or patterned arrangement. This eye-catching display instantly transforms any room into a festive space.
                </p>
              </div>
            </section>
            <section className="mt-12 md:pr-20">
              <div className="mb-4">
                <h4 className="text-lg md:text-xl font-bold tracking-tight mb-4 text-base-heading">3. Balloon Chandelier:</h4>
                <p className="text-base-heading/70">
                Craft a unique chandelier using balloons as the focal point. Inflate balloons to different sizes and attach them to a wire frame or hoop using string or ribbon. Hang the chandelier from the ceiling for a dazzling centerpiece that adds charm and elegance to the room.
                </p>
              </div>
            </section>
            <section className="mt-12 md:pr-20">
              <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-heading">
                Conclusion
              </h2>
              <p className="text-base-heading/70 leading-relaxed">
                Decorating a room with balloons offers endless opportunities to unleash your creativity and transform any space into a festive paradise. Whether you opt for a balloon wall, ceiling canopy, or balloon chandelier, the possibilities are limited only by your imagination. With these simple yet effective ideas, you can effortlessly elevate the ambiance of any room and create lasting memories. So, grab your balloons, get creative, and let your imagination soar!
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
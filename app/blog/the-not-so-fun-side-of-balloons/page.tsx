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
  return (
    <section className="my-24 px-8 max-w-6xl mx-auto text-base-heading ">
      <Link href="/blog" className="flex mb-16 transition-all items-center gap-x-2 w-fit group hover:underline">
        <TbArrowNarrowLeft size={20} className="text-base-heading/70 group-hover:text-base-heading" />
        <span className="text-base-heading/70 group-hover:text-base-heading">Back to blog</span>
      </Link>

      <div className="max-w-3xl">
        <p className="text-base-heading/70 mb-2">Abril 9, 2024</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">The Not-So-Fun Side of Balloons</h1>
        <p className="text-base-heading/70 md:text-lg">Explore the downside of balloons and their environmental impact. Unveil the realities of balloon usage and discover ways to minimize their ecological footprint.</p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row-reverse md:justify-between">
        <div className="border-b pb-4 md:border-l md:w-72 md:pl-8 md:border-b-0 md:pb-0 ">
          <p className="text-xs text-base-heading/70">Posted by</p>
          <p className="text-base-heading/70 text-sm">Gabriel Maestre</p>

          <div className="hidden md:block mt-12">
            <p className="text-base-heading/70 text-sm mb-3">Related reading</p>

            <div>
              <Link
                href="/blog/creative-ways-to-decorate-a-room-with-balloons"
                className="font-medium hover:underline">
                Creative Ways to Decorate a Room with Balloons
              </Link>
              <p className="text-base-content/70 mt-2 leading-relaxed max-w-full text-sm">
                Discover techniques to infuse charm and excitement into any room, creating unforgettable moments with the magic of balloons.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-[800px] md:mt-0">
          <Image
            src="/seaballoon.webp"
            width={700}
            height={700}
            alt="Article image"
            className="rounded-xl"
            priority
          />

          <section className="mt-12 md:pr-20">
            <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">
              Introduction
            </h2>
            <p className="text-base-content/90 leading-relaxed">
              Birthdays, anniversaries, and special moments are all about having fun. Decorating is a big part of that, but have you ever thought about how the colorful balloons we use might hurt the planet? Balloons are a popular choice for parties, but do they harm the environment?
              <br />
              Let&#39;s take a closer look at what balloons do to the planet and find some fun, eco-friendly options.
            </p>
          </section>

          <section className="mt-12 md:pr-20">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-base-content">
              The problem with Balloons
            </h3>
            <div className="text-base-content/90 leading-relaxed [&>*]:space-y-4">
              <p className="mb-4">Balloons contribute to our plastic waste problem. Even though they only stay in the air for a short time, they can take hundreds of years to biodegrade. Over time, these balloon pieces get smaller and smaller and eventually turn into microplastics.</p>

              <p className="mb-4">Balloons can also hurt marine life because they often eat them by mistake. Animals think balloons are food and eat them, filling up their stomachs with harmful plastic. This can make them feel full, even though they haven&#39;t eaten anything nutritious, and they might starve. Plus, balloons can cause blockages in their stomachs if they swallow them.</p>

              <p className="mb-4">Additionally, as a study published in the <a target="blank" className="underline" href="https://www.sciencedirect.com/science/article/abs/pii/S0304389420316150?via%3Dihub">Journal of Hazardous Materials</a> notes, latex balloons are not biodegradable. The study looked at different types of balloons in saltwater, freshwater, and industrial compost. Over the course of sixteen weeks, the balloons showed no significant degradation, indicating that they would continue to pose an environmental threat over time.</p>
            </div>

            <Image
              src="/cachalote.webp"
              width={500}
              height={500}
              alt="Article image"
              className="rounded-xl mt-8"
              priority
            />
          </section>

          <section className="mt-12 md:pr-20">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-base-content">
              Balloon alternatives to preserve the planet
            </h3>
            <p className="text-base-content/90 leading-relaxed mb-4">
            Discover reusable and biodegradable options for colorful and festive decorations that won&#39;t harm the planet.
            </p>

            <div className="mb-4">
              <h4 className="text-lg md:text-xl font-bold tracking-tight mb-4 text-base-content">1. Garlands</h4>
              <p>
              Making a garland is a simple way to brighten up your celebrations. You can use things you already have at home, like leftover wrapping paper, fabric scraps, or old clothes. Just cut them into shapes, like hearts or stars, punch holes, and thread them onto string or yarn.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg md:text-xl font-bold tracking-tight mb-4 text-base-content">2. Streamers</h4>
              <p>
              Paper streamers are a super simple balloon alternative. Hang them up for a party and when the celebration is over, just toss them in the recycling bin. If you want to take it one step further, you can also find streamers already made with recycled paper.
              </p>
            </div>
            
          </section>

          <section className="mt-12 md:pr-20">
            <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">
              Conclusion
            </h2>
            <p className="text-base-content/90 leading-relaxed">
            Choosing eco-friendly alternatives like garlands and streamers can help reduce the harm caused by balloons to our planet. By reusing materials and opting for biodegradable options, we can still enjoy colorful and festive decorations without contributing to plastic pollution. Let&#39;s celebrate responsibly and protect our environment for future generations to enjoy.
            </p>
          </section>

        </div>
      </div>

    </section>
  );
}
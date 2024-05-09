import { BlogCard } from "@/components/index";

const articles = [
  {
    title: "Creative Ways to Decorate a Room with Balloons",
    description: "Unlock the art of decorating a room with balloons, whether you're aiming to surprise a loved one on their birthday or add flair to your office space. Discover techniques to infuse charm and excitement into any setting, creating unforgettable moments with the magic of balloons.",
    author: "Gabriel Maestre",
    slug : "creative-ways-to-decorate-a-room-with-balloons",
    image: "/article1.webp"
  },
  {
    title: "The Not-So-Fun Side of Balloons",
    description: "Explore the downside of balloons and their environmental impact. Unveil the realities of balloon usage and discover ways to minimize their ecological footprint.",
    author: "Gabriel Maestre",
    slug: "the-not-so-fun-side-of-balloons",
    image: "/seaballoon.webp"
  }
]

export default function BlogPage() {
  return (
    <main className="px-8 mx-auto max-w-6xl text-base-heading">
      <section className="my-16 max-w-3xl mx-auto">
        <p className="text-base mb-2 text-moon-500 font-semibold mx-auto md:text-center md:text-lg">Blog</p>
        <h1 className="text-4xl mb-6 font-bold tracking-tight md:text-center lg:text-5xl">The Shinning Balloons Blog</h1>
        <p className="text-base text-base-heading/70 max-w-3xl md:text-center leading-relaxed mx-auto md:text-lg">Discover everything you need to know about elevating your balloon experience in our blog.</p>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 mb-16">

        {
          articles.map((article, index) => (
            <BlogCard key={index} {...article} />
          ))
        }
        
      </section>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link"


interface Props {
  title: string;
  image: string;
  description: string;
  author: string;
  slug: string;
}


export const BlogCard = ({
  title,
  image,
  description,
  author,
  slug
}: Props) => {

  return (
    <article className="rounded-2xl  bg-moon-50/70">
      {/* Figure */}
      <figure>
        <Image
          src={image}
          alt={title}
          width={800}
          priority
          height={500}
          className="rounded-t-2xl aspect-video object-center object-cover"
        />
      </figure>
      <div className="card p-8">
        <h2 className="text-2xl tracking-tight font-bold mb-4 md:text-2xl ">
          <Link className="hover:underline" href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className="text-base-heading/70 mb-6">{description}</p>
        <p className="text-base-heading/70 text-sm">{author}</p>
      </div>

    </article>
  )
}
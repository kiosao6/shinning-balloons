import Link from "next/link"


interface Props {
  title: string;
  description: string;
  author: string;
  slug: string;
}


export const BlogCard = ({
  title,
  description,
  author,
  slug
}: Props) => {

  return (
    <article className="rounded-2xl  bg-moon-50/70">
      {/* Figure */}
      <div className="card p-8">
        <h2 className="text-xl font-bold mb-3 md:text-2xl ">
          <Link className="hover:underline" href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className="text-base-heading/70 mb-6">{description}</p>
        <p className="text-base-heading/70 text-sm">{author}</p>
      </div>

    </article>
  )
}
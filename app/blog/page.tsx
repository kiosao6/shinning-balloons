import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="px-8 mx-auto max-w-6xl text-base-heading">
      <section className="my-16 max-w-3xl mx-auto">
        <p className="text-base mb-2 text-moon-500 font-semibold mx-auto md:text-center md:text-lg">Blog</p>
        <h1 className="text-4xl mb-6 font-bold tracking-tight md:text-center lg:text-5xl">The Shinning Ballons Blog</h1>
        <p className="text-base text-base-heading/70 max-w-3xl md:text-center leading-relaxed mx-auto md:text-lg">Discover everything you need to know about elevating your balloon experience in our blog.</p>
      </section>

      <section className="grid lg:grid-cols-2 gap-8 mb-16">
        <article className="rounded-2xl  bg-moon-50/70">
        {/* Figure */}
          <div className="card p-8">
            <h2 className="text-xl font-bold mb-3 md:text-2xl ">
              <Link className="hover:underline" href="#">Stripe Radar: Machine Learning vs. Radar for Fraud Teams - What&#39;s the Difference?</Link>
            </h2>
            <p className="text-base-heading/70 mb-6">Stripe Radar and Radar for Fraud Teams are two fraud prevention tools with difference pricing and fees. We&#39;ll compare them and help you decide which one is right for you.</p>
            <p className="text-base-heading/70 text-sm">Gabriel Maestre</p>
          </div>

        </article>
        <article className="rounded-2xl  bg-moon-50/70">
        {/* Figure */}
          <div className="card p-8">
            <h2 className="text-xl font-bold mb-3 md:text-2xl ">
              <Link className="hover:underline" href="#">Stripe Radar: Machine Learning vs. Radar for Fraud Teams - What&#39;s the Difference?</Link>
            </h2>
            <p className="text-base-heading/70 mb-6">Stripe Radar and Radar for Fraud Teams are two fraud prevention tools with difference pricing and fees. We&#39;ll compare them and help you decide which one is right for you.</p>
            <p className="text-base-heading/70 text-sm">Gabriel Maestre</p>
          </div>

        </article>
      </section>
    </main>
  );
}
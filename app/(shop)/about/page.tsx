import { CallToAction } from "@/components/index";

export default function AboutPage() {
  return (
    <main className="px-8 mx-auto max-w-6xl text-base-heading">
      <section className="my-16 max-w-3xl mx-auto">
        <p className="text-base mb-2 text-moon-500 font-semibold mx-auto">About</p>
        <h1 className="text-4xl mb-6 font-bold tracking-tight lg:text-5xl">Learning about Shinning Balloons</h1>
        <div className="mb-16 max-w-3xl mx-auto flex flex-col gap-y-8">
          <p className="text-base text-base-heading/70 leading-relaxed mx-auto md:text-lg">Welcome to Shinning Balloons, your premier destination for all things balloon décor, regardless of the occasion. At Shinning Balloons, we take pride in curating a diverse selection of high-quality balloons in various shapes, sizes, and colors to suit your every need. Whether you&#39;re celebrating a birthday, wedding, or corporate event, we have the perfect balloons to add a touch of magic to your festivities.</p>

          <p className="text-base text-base-heading/70 leading-relaxed mx-auto md:text-lg">We understand the importance of timely delivery, which is why we offer two convenient shipping options. Choose our standard shipping for delivery within 2-3 days, or opt for our express shipping for next-day delivery. With Shinning Balloons, your celebrations are guaranteed to shine brighter than ever. Shop with us today and let your imagination take flight!</p>

          <CallToAction />

        </div>
      </section>

    </main>
  );
}
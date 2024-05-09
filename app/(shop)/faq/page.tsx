import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQPage() {

  return (
    <main className="px-8 mx-auto max-w-6xl text-base-heading">
      <section className="my-16 max-w-3xl mx-auto">
        <p className="text-base mb-2 text-moon-500 font-semibold mx-auto md:text-center md:text-base">FAQ</p>
        <h1 className="text-4xl mb-6 font-bold tracking-tight md:text-center lg:text-5xl">Frequently asked questions</h1>
        <p className="text-base text-base-heading/70 leading-relaxed mx-auto md:text-center md:text-base">Our FAQ section aims to quickly address common queries, providing concise answers to enhance your experience.</p>
      </section>
      <section className="my-16 max-w-xl mx-auto">

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base text-left">What shipping options do you offer?</AccordionTrigger>
            <AccordionContent className="text-base-heading/70 leading-relaxed">
              We offer standard shipping with a delivery time of 2-3 days, as well as express shipping for next-day delivery.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base text-left">Can I return my balloons if I&apos;m not satisfied?</AccordionTrigger>
            <AccordionContent className="text-base-heading/70 leading-relaxed">
              Yes, we have a hassle-free return policy. Please contact our customer service team for assistance with returns.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base text-left">Do you offer customization for balloon orders?</AccordionTrigger>
            <AccordionContent className="text-base-heading/70 leading-relaxed">
              Absolutely! We offer customization options for balloon orders, including colors, sizes, and designs. Contact us to discuss your specific needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base text-left">How do I care for my balloons after inflation?</AccordionTrigger>
            <AccordionContent className="text-base-heading/70 leading-relaxed">
              To ensure longevity, keep balloons away from sharp objects and extreme temperatures. Avoid overinflating and dispose of balloons responsibly after use to minimize environmental impact.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
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
        <p className="text-base mb-2 text-moon-500 font-semibold mx-auto md:text-center md:text-lg">FAQ</p>
        <h1 className="text-4xl mb-6 font-bold tracking-tight md:text-center lg:text-5xl">Frequently asked questions</h1>
        <p className="text-base text-base-heading/70 leading-relaxed mx-auto md:text-center md:text-lg">Our FAQ section aims to quickly address common queries, providing concise answers to enhance your experience.</p>
      </section>
      <section className="my-16 max-w-xl mx-auto">

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-left">Are there hidden fees after the payment?</AccordionTrigger>
            <AccordionContent className="leading-6 md:text-base md:leading-7 text-base-heading/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odio, facilis sit eos nobis cupiditate placeat similique! Placeat illum quisquam, deleniti veritatis odit asperiores velit, ullam voluptatum repellat aperiam tempora!
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg text-left">Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg text-left">Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg text-left">Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
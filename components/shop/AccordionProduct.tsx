import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// defaultValue="item-1" collapsible to open the first item by default and make it collapsible. Must be used in the accordion root.


export const AccordionProduct = () => {
  return (
    <Accordion type="multiple" className="mt-6">
      <AccordionItem value="item-1">
        <AccordionTrigger>Characteristics</AccordionTrigger>
        <AccordionContent>
          {/* Yes. It adheres to the WAI-ARIA design pattern. */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-base-heading/60">Collection</p>
            <p>2024</p>
          </div>

          <div className="flex justify-between items-center mb-2">
            <p className="text-base-heading/60">Size</p>
            <p>{`32"`}</p>
          </div>

          <div className="flex justify-between items-center mb-2">
            <p className="text-base-heading/60">Material</p>
            <p>Latex</p>
          </div>

        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Payment and Delivery</AccordionTrigger>
        <AccordionContent className="leading-relaxed">
          <p>At checkout, explore our Test Payment option for demo purposes. This allows you to experience our seamless payment process in a simulated environment, ensuring a smooth transactional experience. Please note, this feature is designed solely for demonstration purposes and does not process real payments.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  )
}
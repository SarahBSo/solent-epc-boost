import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does an EPC assessment take?",
    answer: "A typical domestic EPC assessment takes between 20 and 40 minutes, depending on the size and complexity of the property. We'll arrange a convenient time and be in and out as quickly as possible.",
  },
  {
    question: "How long does an EPC last?",
    answer: "An EPC is valid for 10 years from the date it's lodged on the official register. You only need a new one if yours has expired or if you've made significant improvements to the property.",
  },
  {
    question: "Do I need an EPC to sell my home?",
    answer: "Yes. By law, you must have a valid EPC before marketing your property for sale. Estate agents require it before they can list your home, and you must provide a copy to potential buyers.",
  },
  {
    question: "What does the assessor check during the visit?",
    answer: "We assess the property's construction type, insulation levels, heating systems, hot water, lighting, and windows. We take measurements and note any energy-saving features. The process is non-invasive – we won't need to move furniture or access difficult areas.",
  },
  {
    question: "When will I receive my EPC certificate?",
    answer: "In most cases, you'll receive your EPC certificate by email on the same day as the assessment. It's also lodged on the official EPC register, where anyone can access it using your postcode.",
  },
  {
    question: "What areas do you cover?",
    answer: "We cover a 25-mile radius from Lymington in the New Forest, including towns across Hampshire and Dorset such as New Milton, Christchurch, Bournemouth, Brockenhurst, Ringwood, Totton, and Southampton.",
  },
  {
    question: "What's the minimum EPC rating for rental properties?",
    answer: "Since April 2020, rental properties in England and Wales must have a minimum EPC rating of E before a new tenancy can begin. There are some exemptions, but landlords generally need to ensure their properties meet this standard.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about getting an EPC.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-card border-none"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-accent hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

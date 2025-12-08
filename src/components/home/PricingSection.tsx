import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingOptions = [
  {
    title: "Standard EPC",
    price: "From £85",
    description: "For home sellers and buyers",
    features: [
      "Full property assessment",
      "Same-day certificate delivery",
      "Lodged on official register",
      "10-year validity",
    ],
  },
  {
    title: "Rental EPC",
    price: "From £85",
    description: "For landlords and letting agents",
    features: [
      "Compliance-focused assessment",
      "Same-day certificate delivery",
      "Lodged on official register",
      "Advice on improving rating",
    ],
    highlighted: true,
  },
  {
    title: "Agent Packages",
    price: "Discounted",
    description: "For estate and letting agents",
    features: [
      "Bulk booking discounts",
      "Priority scheduling",
      "Dedicated account support",
      "Flexible invoicing",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="section-padding gradient-navy text-accent-foreground">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
            No hidden fees. The price we quote is the price you pay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div
              key={option.title}
              className={`rounded-xl p-6 animate-fade-in-up ${
                option.highlighted
                  ? "bg-primary text-primary-foreground ring-4 ring-secondary/50"
                  : "bg-card text-card-foreground"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {option.highlighted && (
                <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-semibold text-xl mb-2">
                {option.title}
              </h3>
              <p className="text-3xl font-heading font-bold mb-2">
                {option.price}
              </p>
              <p className={`text-sm mb-6 ${option.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {option.description}
              </p>
              <ul className="space-y-3 mb-6">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className={`w-5 h-5 flex-shrink-0 ${option.highlighted ? "text-secondary" : "text-secondary"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={option.highlighted ? "secondary" : "outline"}
                className="w-full"
                size="lg"
              >
                <Link to="/contact">Get My EPC</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

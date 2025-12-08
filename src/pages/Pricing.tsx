import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Helmet } from "react-helmet-async";

const pricingTiers = [
  {
    title: "Standard EPC",
    price: "£85",
    description: "For home sellers and buyers needing an EPC for their sale or purchase.",
    features: [
      "Full property assessment",
      "Same-day certificate delivery",
      "Lodged on official EPC register",
      "10-year certificate validity",
      "Energy improvement recommendations",
    ],
  },
  {
    title: "Rental EPC",
    price: "£85",
    description: "For landlords ensuring compliance with minimum energy efficiency standards.",
    features: [
      "Compliance-focused assessment",
      "Same-day certificate delivery",
      "Lodged on official EPC register",
      "Minimum rating verification",
      "Improvement advice for better ratings",
    ],
    highlighted: true,
  },
  {
    title: "Agent Packages",
    price: "From £75",
    description: "Discounted rates for estate agents and letting agents with regular bookings.",
    features: [
      "Volume-based discounts",
      "Priority scheduling",
      "Dedicated account support",
      "Flexible monthly invoicing",
      "Fast turnaround guaranteed",
    ],
  },
];

const Pricing = () => {
  return (
    <Layout>
      <Helmet>
        <title>EPC Pricing | Affordable Energy Certificates | Solent EPC</title>
        <meta name="description" content="Transparent EPC pricing from £85. No hidden fees. Same-day certificates included. Discounts for estate agents and letting agents." />
        <link rel="canonical" href="https://solentepc.co.uk/pricing" />
      </Helmet>

      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-section text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. The price we quote is the price you pay. Same-day certificates included.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.title}
                className={`rounded-xl p-6 ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground ring-4 ring-secondary/50"
                    : "bg-card text-card-foreground shadow-card"
                }`}
              >
                {tier.highlighted && (
                  <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h2 className="font-heading font-semibold text-xl mb-2">{tier.title}</h2>
                <p className="text-4xl font-heading font-bold mb-2">{tier.price}</p>
                <p className={`text-sm mb-6 ${tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className={`w-5 h-5 flex-shrink-0 ${tier.highlighted ? "text-secondary" : "text-secondary"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={tier.highlighted ? "secondary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  <Link to="/contact">Book Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
              What's Included in Every EPC
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Full property assessment (20-40 mins)",
                "Professional, accredited assessor",
                "Same-day certificate delivery",
                "Lodged on official EPC register",
                "10-year certificate validity",
                "Energy improvement recommendations",
                "PDF copy emailed directly",
                "No hidden fees or charges",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-background rounded-lg p-4">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactSection />
    </Layout>
  );
};

export default Pricing;

import { MapPin, Shield, Award, Clock, PoundSterling, Heart } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Local New Forest Assessor",
    description: "Based near Lymington, we know the area and can get to you quickly.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete peace of mind with comprehensive professional indemnity cover.",
  },
  {
    icon: Award,
    title: "Accredited DEA",
    description: "Qualified and registered Domestic Energy Assessor on the official register.",
  },
  {
    icon: Clock,
    title: "Same-Day Certificates",
    description: "Most EPCs delivered within hours of the assessment being completed.",
  },
  {
    icon: PoundSterling,
    title: "Clear, Fixed Pricing",
    description: "No hidden fees or surprises. The price we quote is the price you pay.",
  },
  {
    icon: Heart,
    title: "Friendly, No-Nonsense Service",
    description: "Professional but personable. We explain everything clearly.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent mb-4">
            Why Choose Solent EPC?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by estate agents, letting agents and landlords across Hampshire and Dorset.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-accent mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

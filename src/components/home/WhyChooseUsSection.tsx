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

        {/* Google Reviews Placeholder */}
        <div className="mt-12 bg-card rounded-xl p-8 shadow-card text-center">
          <div className="flex justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="font-heading font-semibold text-accent mb-1">
            Rated 5 Stars by Our Customers
          </p>
          <p className="text-sm text-muted-foreground">
            Read our reviews on Google
          </p>
        </div>
      </div>
    </section>
  );
}

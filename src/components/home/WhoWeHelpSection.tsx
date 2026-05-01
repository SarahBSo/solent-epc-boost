import { Building2, Home, KeyRound, TrendingUp, Briefcase } from "lucide-react";
import commercialImage from "@/assets/assessor-commercial-inspection.webp";

const audiences = [
  {
    icon: Building2,
    title: "Estate Agents",
    description: "Fast EPCs for new listings. We understand your timelines and deliver quickly so you can get properties on the market.",
  },
  {
    icon: KeyRound,
    title: "Letting Agents",
    description: "Bulk bookings with reliable availability. Partner with us for consistent, quality assessments across your portfolio.",
  },
  {
    icon: Home,
    title: "Landlords",
    description: "Stay compliant with fixed-pricing EPCs. No hidden fees, no surprises – just straightforward service.",
  },
  {
    icon: TrendingUp,
    title: "Home Movers",
    description: "Quick certificates so your listing can go live. We work around your schedule to make selling stress-free.",
  },
  {
    icon: Briefcase,
    title: "Commercial Properties",
    description: "Commercial EPCs for shops, offices, industrial units and mixed-use premises. Required for sale, new tenancy or major refurbishment.",
  },
];

export function WhoWeHelpSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent mb-4">
            Who We Help
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're selling, renting or managing properties, we make getting an EPC simple.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <audience.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-accent mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commercial inspection feature image */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-card-hover aspect-[16/9]">
            <img
              src={commercialImage}
              alt="Solent EPC assessor inspecting a commercial industrial unit in Hampshire"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width="1200"
              height="675"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

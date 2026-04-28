import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-epc-assessor.jpg";
import elmhurstLogo from "@/assets/elmhurst-approved-logo.jpg";

const usps = [
  { icon: Clock, text: "Same-Day Appointments" },
  { icon: Shield, text: "Fully Insured & Accredited" },
  { icon: Award, text: "Certificates Delivered Same Day" },
  { icon: Users, text: "Trusted by Agents & Landlords" },
];

export function HeroSection() {
  return (
    <section className="relative bg-card overflow-hidden">
      <div className="container-section py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-accent leading-tight mb-4 animate-fade-in">
              Your Local EPC Assessor – <span className="text-primary">Solent EPC</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Fast, friendly and accredited EPCs across the New Forest, Hampshire & Dorset.
            </p>

            {/* USPs */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {usps.map((usp, index) => (
                <div
                  key={usp.text}
                  className="flex items-center gap-2 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <usp.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{usp.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Book Your EPC</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <a href="tel:07803280068">Call for Today's Availability</a>
              </Button>
            </div>

            {/* Elmhurst Approved Logo */}
            <div className="mt-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <img 
                src={elmhurstLogo} 
                alt="Elmhurst Energy Approved Energy Assessor - Quality Promise Accredited Member" 
                className="h-14 w-auto"
              />
            </div>

            <div className="mt-4 animate-fade-in" style={{ animationDelay: "0.65s" }}>
              <p className="text-sm text-muted-foreground">
                Need a fire risk assessment?{" "}
                <a
                  href="https://www.solentcheck.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Visit Solent Check →
                </a>
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="relative rounded-xl overflow-hidden shadow-card-hover">
              <img
                src={heroImage}
                alt="Solent Check assessor measuring windows during a UK property inspection"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent -z-10" />
    </section>
  );
}

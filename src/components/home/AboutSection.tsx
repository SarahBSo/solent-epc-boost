import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent mb-6">
            About Solent EPC
          </h2>
          <p className="text-lg text-foreground mb-4">
            I'm Rick — a local, accredited energy assessor based near Lymington in the New Forest.
          </p>
          <p className="text-foreground mb-6">
            I provide fast, professional Energy Performance Certificates for home sellers, landlords and property agents across Hampshire and Dorset. I take pride in a personal, no-nonsense service — turning up on time, explaining everything clearly, and delivering your certificate the same day.
          </p>
          <p className="text-muted-foreground mb-8">
            Whether you're selling your home, letting a property or managing a portfolio, I'm here to make the EPC process as simple and stress-free as possible.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

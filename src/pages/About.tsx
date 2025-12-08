import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Award, MapPin, Heart } from "lucide-react";
import { ContactSection } from "@/components/home/ContactSection";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Your Local EPC Assessor | Solent EPC</title>
        <meta name="description" content="Solent EPC is a friendly, family-run energy assessment service based in the New Forest. Fully accredited and insured. Learn more about us." />
        <link rel="canonical" href="https://solentepc.co.uk/about" />
      </Helmet>

      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
              About Solent EPC
            </h1>
            <p className="text-xl text-muted-foreground">
              A friendly, family-run energy assessment service based in the New Forest.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
                Solent EPC was founded with a simple mission: to provide fast, friendly and professional EPC assessments to home sellers, landlords and property agents across Hampshire and Dorset.
              </p>
              <p>
                Based near Lymington in the beautiful New Forest, we understand the local property market and the needs of our customers. Whether you're selling your family home, letting a rental property, or managing a portfolio for an estate agency, we're here to make the EPC process as simple and stress-free as possible.
              </p>
              <p>
                As a fully accredited Domestic Energy Assessor registered on the official EPC register, you can trust that your certificate will be accurate, compliant and delivered quickly – usually on the same day as your assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-8 text-center">
            Accreditation & Insurance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Award, title: "Accredited DEA", desc: "Registered Domestic Energy Assessor on the official government register" },
              { icon: Shield, title: "Fully Insured", desc: "Comprehensive professional indemnity and public liability insurance" },
              { icon: MapPin, title: "Local Assessor", desc: "Based in the New Forest, covering a 25-mile radius" },
              { icon: Heart, title: "Friendly Service", desc: "Professional but personable – we explain everything clearly" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-accent mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-section text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-4">
            Ready to Book Your EPC?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get in touch today for a fast, friendly service. Same-day appointments often available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Book Your EPC</Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default About;

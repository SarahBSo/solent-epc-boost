import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Clock, Shield, Award, FileCheck, Zap } from "lucide-react";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Helmet } from "react-helmet-async";

const whatWeCheck = [
  "Property dimensions and floor areas",
  "Wall construction and insulation",
  "Roof type and insulation",
  "Window glazing type",
  "Heating system and controls",
  "Hot water system",
  "Lighting types",
  "Renewable energy sources",
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>EPC Services | Domestic Energy Assessments | Solent EPC</title>
        <meta name="description" content="Professional domestic EPC assessments for home sellers, landlords and letting agents. Fast same-day certificates. Fully accredited assessor." />
        <link rel="canonical" href="https://solentepc.co.uk/services" />
      </Helmet>

      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
              Domestic EPC Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional Energy Performance Certificates for home sellers, landlords and property agents across Hampshire and Dorset.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Book Your EPC</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/epc-consultancy">EPC Consultancy</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
                What's Included in Your EPC
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Every EPC assessment includes a thorough inspection of your property by our accredited Domestic Energy Assessor. We measure, photograph and record all the key features that affect your property's energy efficiency.
                </p>
                <p>
                  Your certificate includes your property's current energy rating (A-G), potential rating after improvements, estimated energy costs, and recommendations for improving efficiency.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Clock, title: "20-40 Min Visit", desc: "Quick, non-invasive assessment" },
                { icon: FileCheck, title: "Same-Day Delivery Available", desc: "Certificate emailed to you" },
                { icon: Shield, title: "Official Register", desc: "Lodged on government database" },
                { icon: Zap, title: "Improvement Tips", desc: "Advice to boost your rating" },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-5 shadow-card">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-heading font-semibold text-accent mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need an EPC */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
              Why Do You Need an EPC?
            </h2>
            <div className="text-left space-y-4 text-foreground">
              <p>
                <strong>Selling your home?</strong> You must have a valid EPC before marketing your property. Estate agents cannot list your home without one.
              </p>
              <p>
                <strong>Renting out a property?</strong> Landlords need a valid EPC to let their property, and it must meet a minimum E rating for new tenancies.{" "}
                <Link to="/landlords" className="text-primary hover:underline font-medium">
                  Read more about EPC changes for landlords and PRS
                </Link>
              </p>
              <p>
                <strong>Building or renovating?</strong> New builds and major renovations require an EPC on completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-8 text-center">
            What We Check During the Assessment
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {whatWeCheck.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm">
                <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactSection />
    </Layout>
  );
};

export default Services;

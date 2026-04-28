import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/home/ContactSection";
import { Helmet } from "react-helmet-async";

const allTowns = [
  { name: "Lymington", slug: "lymington", region: "New Forest" },
  { name: "New Milton", slug: "new-milton", region: "New Forest" },
  { name: "Brockenhurst", slug: "brockenhurst", region: "New Forest" },
  { name: "Sway", slug: "sway", region: "New Forest" },
  { name: "Lyndhurst", slug: "lyndhurst", region: "New Forest" },
  { name: "Milford-on-Sea", slug: "milford-on-sea", region: "New Forest" },
  { name: "Totton", slug: "totton", region: "Hampshire" },
  { name: "Hythe", slug: "hythe", region: "Hampshire" },
  { name: "Eastleigh", slug: "eastleigh", region: "Hampshire" },
  { name: "Romsey", slug: "romsey", region: "Hampshire" },
  { name: "Southampton", slug: "southampton", region: "Hampshire" },
  { name: "Ringwood", slug: "ringwood", region: "Hampshire" },
  { name: "Christchurch", slug: "christchurch", region: "Dorset" },
  { name: "Bournemouth", slug: "bournemouth", region: "Dorset" },
  { name: "Highcliffe", slug: "highcliffe", region: "Dorset" },
  { name: "Poole", slug: "poole", region: "Dorset" },
  { name: "Ferndown", slug: "ferndown", region: "Dorset" },
  { name: "Wimborne", slug: "wimborne", region: "Dorset" },
];

const Areas = () => {
  const newForestTowns = allTowns.filter((t) => t.region === "New Forest");
  const hampshireTowns = allTowns.filter((t) => t.region === "Hampshire");
  const dorsetTowns = allTowns.filter((t) => t.region === "Dorset");

  return (
    <Layout>
      <Helmet>
        <title>Areas We Cover | EPC Assessments Hampshire & Dorset | Solent EPC</title>
        <meta name="description" content="EPC assessments covering the New Forest, Hampshire and Dorset. 25-mile radius from Lymington including Bournemouth, Christchurch, Southampton and more." />
        <link rel="canonical" href="https://solentepc.co.uk/areas" />
      </Helmet>

      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-section text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
            Areas We Cover
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Based in the New Forest, we provide EPC assessments within a 25-mile radius of Lymington, covering Hampshire and Dorset.
          </p>

          {/* Map */}
          <div className="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-card mb-8" style={{ height: "380px" }}>
            <iframe
              title="Solent EPC coverage area"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d158000!2d-1.5474!3d50.7556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Towns by Region */}
      <section className="section-padding bg-background">
        <div className="container-section">
          {/* New Forest */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-accent mb-6">
              New Forest
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {newForestTowns.map((town) => (
                <Link
                  key={town.slug}
                  to={`/epc/${town.slug}`}
                  className="group flex items-center gap-2 bg-card rounded-lg px-4 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-card"
                >
                  <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  <span className="text-sm font-medium">{town.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Hampshire */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-accent mb-6">
              Hampshire
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {hampshireTowns.map((town) => (
                <Link
                  key={town.slug}
                  to={`/epc/${town.slug}`}
                  className="group flex items-center gap-2 bg-card rounded-lg px-4 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-card"
                >
                  <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  <span className="text-sm font-medium">{town.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Dorset */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-accent mb-6">
              Dorset
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {dorsetTowns.map((town) => (
                <Link
                  key={town.slug}
                  to={`/epc/${town.slug}`}
                  className="group flex items-center gap-2 bg-card rounded-lg px-4 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-card"
                >
                  <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  <span className="text-sm font-medium">{town.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Don't see your area? We may still be able to help.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default Areas;

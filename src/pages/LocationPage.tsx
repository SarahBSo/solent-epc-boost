import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Check, MapPin, Clock, Shield, FileCheck } from "lucide-react";
import { BookingForm } from "@/components/home/BookingForm";
import { FAQSection } from "@/components/home/FAQSection";
import { Helmet } from "react-helmet-async";

const townData: Record<string, { name: string; region: string; neighborhoods?: string[] }> = {
  lymington: { name: "Lymington", region: "New Forest", neighborhoods: ["Pennington", "Boldre", "Lower Pennington"] },
  "new-milton": { name: "New Milton", region: "New Forest", neighborhoods: ["Barton-on-Sea", "Ashley", "Bashley"] },
  christchurch: { name: "Christchurch", region: "Dorset", neighborhoods: ["Purewell", "Stanpit", "Mudeford"] },
  bournemouth: { name: "Bournemouth", region: "Dorset", neighborhoods: ["Boscombe", "Southbourne", "Winton", "Charminster"] },
  brockenhurst: { name: "Brockenhurst", region: "New Forest" },
  sway: { name: "Sway", region: "New Forest" },
  lyndhurst: { name: "Lyndhurst", region: "New Forest" },
  totton: { name: "Totton", region: "Hampshire", neighborhoods: ["Calmore", "Testwood", "Eling"] },
  hythe: { name: "Hythe", region: "Hampshire", neighborhoods: ["Dibden", "Dibden Purlieu", "Marchwood"] },
  ringwood: { name: "Ringwood", region: "Hampshire", neighborhoods: ["Poulner", "Hightown", "Ashley Heath"] },
  "milford-on-sea": { name: "Milford-on-Sea", region: "New Forest", neighborhoods: ["Keyhaven", "Everton"] },
  eastleigh: { name: "Eastleigh", region: "Hampshire", neighborhoods: ["Chandlers Ford", "Bishopstoke", "Fair Oak"] },
  romsey: { name: "Romsey", region: "Hampshire", neighborhoods: ["North Baddesley", "Ampfield", "Braishfield"] },
  southampton: { name: "Southampton", region: "Hampshire", neighborhoods: ["Shirley", "Bitterne", "Woolston", "Portswood"] },
  highcliffe: { name: "Highcliffe", region: "Dorset", neighborhoods: ["Walkford", "Hinton Admiral"] },
  poole: { name: "Poole", region: "Dorset", neighborhoods: ["Canford Cliffs", "Parkstone", "Branksome"] },
  ferndown: { name: "Ferndown", region: "Dorset" },
  wimborne: { name: "Wimborne", region: "Dorset", neighborhoods: ["Colehill", "Merley"] },
};

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const town = slug ? townData[slug] : null;

  if (!town) {
    return (
      <Layout>
        <div className="section-padding container-section text-center">
          <h1 className="text-3xl font-heading font-bold text-accent mb-4">Area Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find information for this area.</p>
          <Button asChild variant="hero">
            <Link to="/areas">View All Areas</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>EPC in {town.name} | Solent EPC | Fast Same-Day Certificates</title>
        <meta name="description" content={`Fast, accredited EPC assessments in ${town.name}, ${town.region}. Same-day certificates for home sellers, landlords and letting agents. Book your EPC today.`} />
        <link rel="canonical" href={`https://solentepc.co.uk/epc-${slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{town.region}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
              EPC in {town.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Fast, accredited Energy Performance Certificates for home sellers, landlords and letting agents in {town.name} and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="#book">Book Your EPC in {town.name}</a>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <a href="tel:07803280068">Call for Availability</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-8">
            Why Choose Solent EPC in {town.name}?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: "Local Assessor", desc: `Based in the New Forest, we know ${town.name} well and can get to you quickly.` },
              { icon: Clock, title: "Same-Day EPCs", desc: "Most certificates delivered within hours of the assessment." },
              { icon: Shield, title: "Fully Accredited", desc: "Registered Domestic Energy Assessor on the official EPC register." },
              { icon: FileCheck, title: "Fixed Pricing", desc: "Clear, transparent pricing with no hidden fees." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 shadow-card">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-accent mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
              What We Check During Your EPC Assessment
            </h2>
            <p className="text-foreground mb-6">
              Our accredited assessor will visit your property in {town.name} for approximately 20-40 minutes to assess the following:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Property dimensions and floor areas",
                "Wall construction and insulation",
                "Roof type and insulation levels",
                "Window and glazing types",
                "Heating system and controls",
                "Hot water system",
                "Lighting types throughout",
                "Any renewable energy sources",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-background rounded-lg p-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      {town.neighborhoods && (
        <section className="section-padding bg-background">
          <div className="container-section">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
              Areas We Cover in {town.name}
            </h2>
            <p className="text-muted-foreground mb-6">
              We provide EPC assessments throughout {town.name} and surrounding areas including:
            </p>
            <div className="flex flex-wrap gap-3">
              {town.neighborhoods.map((area) => (
                <span key={area} className="bg-card rounded-lg px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking Form */}
      <section id="book" className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-4 text-center">
              Book Your EPC in {town.name}
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Fill in the form below and we'll get back to you to confirm your appointment.
            </p>
            <div className="bg-background rounded-xl p-6 sm:p-8 shadow-card">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Other Areas */}
      <section className="section-padding bg-card">
        <div className="container-section text-center">
          <h2 className="text-xl font-heading font-bold text-accent mb-4">
            Other Areas We Cover
          </h2>
          <p className="text-muted-foreground mb-6">
            We also provide EPC assessments in Lymington, New Milton, Christchurch, Bournemouth, and more.
          </p>
          <Button asChild variant="outline">
            <Link to="/areas">View All Areas</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ContactSection } from "@/components/home/ContactSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertTriangle, TrendingUp, Target, ClipboardCheck, Repeat, Building2 } from "lucide-react";

const whoFor = [
  "Buy-to-let refurb projects",
  "Investors repositioning tired stock",
  "Landlords planning ahead for EPC changes",
  "Portfolio upgrades",
  "Refinance preparation",
];

const processSteps = [
  { n: "1", title: "Tell us about the property", desc: "Share the details and your refurb plans." },
  { n: "2", title: "We review pre-refurb position", desc: "Identify what's holding the EPC back." },
  { n: "3", title: "You carry out the works", desc: "With a clear, prioritised plan." },
  { n: "4", title: "We return for post-refurb EPC", desc: "Full assessment after works complete." },
  { n: "5", title: "You get a clear outcome", desc: "Certificate that reflects the upgrades." },
];

const faqs = [
  {
    q: "Can you guarantee an EPC rating?",
    a: "No — and anyone who says they can without proper assessment is guessing. We give you the clearest possible guidance before you commit spend.",
  },
  {
    q: "Are EPC rules actually changing?",
    a: "Yes. The government is already consulting on a new system using different metrics and a new methodology (HEM), with rollout expected from 2027 onwards.",
  },
  {
    q: "Will EPC C still matter?",
    a: "Very likely. Government proposals continue to centre around EPC band C as a key benchmark for future standards.",
  },
  {
    q: "Do you do both pre and post?",
    a: "Yes — that's the whole point of the service.",
  },
];

const EPCConsultancy = () => {
  return (
    <Layout>
      <Helmet>
        <title>EPC Consultancy | Pre & Post Refurb Advice | Solent EPC</title>
        <meta
          name="description"
          content="Pre- and post-refurb EPC consultancy for landlords and property investors. Plan smarter before works start and reassess properly when they're finished."
        />
        <link rel="canonical" href="https://solentepc.co.uk/epc-consultancy" />
      </Helmet>

      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-4">
              Don't waste money on the wrong EPC upgrades.
            </h1>
            <p className="text-2xl font-heading font-semibold text-primary mb-6">
              And don't get caught out by what's coming next.
            </p>
            <p className="text-xl text-muted-foreground mb-6">
              Pre- and post-refurb EPC consultancy for landlords and property investors. Plan
              smarter before works start — and reassess properly when they're finished.
            </p>
            <div className="space-y-4 text-foreground mb-8">
              <p>Most landlords either:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>spend money on upgrades that barely move the EPC</li>
                <li>or ignore it until the end… and get a nasty surprise</li>
              </ul>
              <p>
                At the same time, EPC rules are changing — and what works today may not be enough
                tomorrow.
              </p>
              <p>
                We help you make the right decisions before you spend, and understand where you
                stand after the refurb.
              </p>
            </div>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Book EPC Consultancy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Point #1 */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent">
                Stop guessing your EPC strategy
              </h2>
            </div>
            <div className="space-y-4 text-foreground">
              <p>This is where most refurb projects go wrong.</p>
              <p>You install a new boiler. Upgrade a few bits. Maybe add insulation.</p>
              <p>Then you get the EPC done… and it barely moves.</p>
              <p>Now you're stuck:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>spending more money</li>
                <li>ripping things back out</li>
                <li>or accepting a lower rating than planned</li>
              </ul>
              <p className="font-semibold">Truth is: not all upgrades carry equal weight.</p>
              <div className="bg-card rounded-xl p-6 shadow-card mt-6">
                <h3 className="font-heading font-semibold text-accent mb-3">What we do instead:</h3>
                <p className="mb-3">
                  We assess the property before works start and help you understand:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>what's actually dragging the EPC down</li>
                  <li>what improvements are likely to make a real difference</li>
                  <li>what's probably not worth the spend</li>
                  <li>how to prioritise works in the right order</li>
                </ul>
                <p className="mt-3 font-semibold">This is about protecting your refurb budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point #2 */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent">
                Worried about EPC changes by 2030? You should be.
              </h2>
            </div>
            <div className="space-y-4 text-foreground">
              <p>The EPC system is not staying the same.</p>
              <p>
                The government is actively reforming how EPCs are calculated and presented, with
                major changes already underway.
              </p>
              <p>
                New EPCs will move away from a single rating and introduce multiple performance
                metrics, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>fabric performance (insulation &amp; heat loss)</li>
                <li>heating system efficiency</li>
                <li>smart readiness (solar, batteries, controls)</li>
                <li>energy cost</li>
              </ul>
              <p>
                The methodology behind EPCs is also being replaced with a new Home Energy Model
                (HEM), which changes how properties are assessed and how improvements are scored.
              </p>
              <p>These changes are designed to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>push better-performing homes</li>
                <li>support net zero targets</li>
                <li>and shape future minimum standards for landlords</li>
              </ul>
              <div className="bg-background rounded-xl p-6 shadow-card mt-6">
                <h3 className="font-heading font-semibold text-accent mb-3">
                  What that means in plain English:
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>What gets you a good EPC today may not tomorrow</li>
                  <li>Some upgrades will matter more than they used to</li>
                  <li>Heating systems, insulation, and smart tech will all be judged separately</li>
                  <li>The "easy wins" are disappearing</li>
                </ul>
                <p className="mt-4 font-semibold text-accent">
                  And here's the big one: Future Minimum Energy Efficiency Standards are still
                  expected to centre around EPC band C as a key benchmark.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent">
                This isn't just about getting an EPC
              </h2>
            </div>
            <div className="space-y-4 text-foreground">
              <p>Anyone can turn up, tick boxes and give you a certificate.</p>
              <p>That's not the problem.</p>
              <p>The problem is:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>making the wrong upgrade decisions</li>
                <li>misunderstanding what will actually move the rating</li>
                <li>and not planning for what's coming next</li>
              </ul>
              <p className="font-semibold">
                We sit before and after the EPC — not just at the end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-8 text-center">
              Pre- and post-refurb EPC consultancy
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 shadow-card">
                <ClipboardCheck className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-accent mb-3">Pre-Refurb EPC Advice</h3>
                <p className="mb-2 text-sm text-muted-foreground">Before works begin, we help you:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>understand the current EPC position</li>
                  <li>identify what's holding it back</li>
                  <li>prioritise upgrades that move the needle</li>
                  <li>avoid spending money in the wrong areas</li>
                </ul>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-card">
                <Repeat className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-accent mb-3">
                  Post-Refurb EPC Assessment
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">Once works are complete:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>we assess the property properly</li>
                  <li>produce the EPC</li>
                  <li>ensure the final result reflects what's been done</li>
                </ul>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-card">
                <Target className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-accent mb-3">Joined-Up Approach</h3>
                <p className="mb-2 text-sm text-muted-foreground">Used together, this gives you:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>smarter planning</li>
                  <li>fewer wasted costs</li>
                  <li>better EPC outcomes</li>
                  <li>clearer long-term positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent">
                Built for landlords and investors
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {whoFor.map((item) => (
                <li
                  key={item}
                  className="bg-card rounded-lg p-4 shadow-sm text-foreground font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-4">Domestic properties only.</p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
              Do it once. Do it properly.
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 shadow-card border-l-4 border-destructive">
                <h3 className="font-heading font-semibold text-accent mb-3">
                  If you ignore EPC strategy:
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-foreground">
                  <li>you risk doing the same job twice</li>
                  <li>you risk missing future compliance targets</li>
                  <li>you risk killing deal profitability</li>
                </ul>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-card border-l-4 border-secondary">
                <h3 className="font-heading font-semibold text-accent mb-3">If you get it right:</h3>
                <ul className="list-disc pl-5 space-y-1 text-foreground">
                  <li>you spend money once</li>
                  <li>you improve the right things</li>
                  <li>you future-proof the asset</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-10 text-center">
            How it works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.n} className="bg-card rounded-xl p-5 shadow-card">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                  {step.n}
                </div>
                <h3 className="font-heading font-semibold text-accent mb-1 text-sm">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-8 text-center">
              EPC Consultancy FAQs
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-heading font-semibold text-accent">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-background">
        <div className="container-section text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-4">
            Planning a refurb?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the EPC strategy right before you spend a penny.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Book EPC Consultancy</Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Or speak to us about your project.</p>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default EPCConsultancy;

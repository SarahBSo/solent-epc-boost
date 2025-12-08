import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, Clock, FileText, Shield, Phone } from "lucide-react";

const Landlords = () => {
  return (
    <Layout>
      <Helmet>
        <title>Landlords: Upcoming EPC Regulation Changes for 2028 — What You Need to Know | Solent EPC</title>
        <meta name="description" content="New EPC regulations are coming for landlords in 2028. Learn about the changes, the £15,000 improvement allowance, and how to prepare your rental portfolio." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Landlords: EPC Rules Are Changing. Are You Ready for 2028?
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              New EPC regulations are coming, and landlords will need to take action long before the deadline.
              Solent EPC helps you stay compliant, protect your portfolio and plan improvements sensibly.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Government has confirmed its intention to tighten EPC requirements for the private rented sector by 2028.
              Although details are still emerging, the direction of travel is clear:
              landlords will need better-performing properties, clear evidence of improvement attempts, and a smarter plan for upgrades.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you own one or multiple rental properties, now is the time to get ahead. EPC legislation won't be getting easier — and leaving it too late could mean costly surprises, void periods or even being unable to legally let your home.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Solent EPC helps landlords understand exactly where they stand and what improvements will be required.
            </p>
          </div>
        </div>
      </section>

      {/* 2028 Rules Explained Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The 2028 EPC Rules Explained <span className="text-primary">(Straightforward Version)</span>
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              Here's what landlords are currently expected to face:
            </p>

            <div className="space-y-8">
              {/* Rule 1 */}
              <div className="bg-background rounded-lg p-8 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 shrink-0">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">A higher minimum EPC rating</h3>
                    <p className="text-muted-foreground mb-4">
                      The rental sector will move beyond the current E rating requirement.
                      The expected target for 2028 is <strong className="text-foreground">EPC C</strong> for most privately rented homes.
                    </p>
                    <p className="text-muted-foreground">
                      This means many properties will need insulation upgrades, heating improvements or changes to glazing to remain legally lettable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="bg-background rounded-lg p-8 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 shrink-0">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">A £15,000 improvement allowance</h3>
                    <p className="text-muted-foreground mb-4">
                      Landlords may be required to invest up to <strong className="text-foreground">£15,000</strong> in energy-efficiency improvements if needed to reach the minimum EPC band.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This doesn't mean every landlord will spend £15,000. But it does mean:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>You must be able to prove you've taken reasonable steps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>You will need evidence of quotes, recommendations, and improvement paths</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>You could be expected to invest more than the previous £3,500 cap</span>
                      </li>
                    </ul>
                    <p className="text-foreground font-semibold mt-4">
                      This is why planning early matters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rule 3 */}
              <div className="bg-background rounded-lg p-8 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 shrink-0">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Compliance evidence will become essential</h3>
                    <p className="text-muted-foreground mb-2">Expect strict enforcement.</p>
                    <p className="text-muted-foreground mb-2">Expect penalties.</p>
                    <p className="text-muted-foreground mb-4">Expect checks on rental properties, especially HMOs and larger portfolios.</p>
                    <p className="text-foreground font-semibold">
                      Landlords who can prove their EPC improvement journey will be in the strongest position.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Waiting Is Bad Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertTriangle className="h-10 w-10 text-amber-500" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Waiting Until 2027 Is a Bad Idea
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground text-center mb-8">
              Most rental properties currently sit in EPC D or E.
              When regulations change, demand for assessors, installers, and grants will skyrocket.
            </p>

            <p className="text-lg text-foreground text-center font-semibold mb-8">
              If you wait until the last minute, you're likely to face:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Long waiting times",
                "Higher installation costs",
                "Difficulty getting quotes",
                "Limited access to grants or funding",
                "Tenancy interruptions",
                "Risk of breaching compliance"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-destructive/10 rounded-lg p-4">
                  <Clock className="h-5 w-5 text-destructive shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xl text-primary font-bold text-center mt-10">
              The smart landlords are planning now.
            </p>
          </div>
        </div>
      </section>

      {/* Landlord Energy Report Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Solution — A Landlord Energy Report
              </h2>
              <p className="text-lg text-muted-foreground">
                (Portfolio Audit)
              </p>
            </div>

            <p className="text-lg text-muted-foreground text-center mb-8">
              To make informed decisions, you need more than just an EPC.
            </p>
            <p className="text-lg text-foreground text-center font-semibold mb-12">
              You need a Landlord Energy Report — a practical, property-by-property audit designed specifically for portfolio planning.
            </p>

            <div className="bg-background rounded-xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-7 w-7 text-primary" />
                Your Energy Report Includes:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Current EPC position for every property",
                  "Upgrade recommendations",
                  "Cost estimates",
                  "Expected impact on EPC banding",
                  "Improvement priority list",
                  "Potential grant eligibility",
                  "A roadmap to reach EPC C (or whatever the legislation requires)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-muted rounded-lg p-6 text-center">
              <p className="text-muted-foreground mb-2">
                This is a <strong className="text-foreground">private document</strong>, for your use only.
              </p>
              <p className="text-muted-foreground mb-4">
                It doesn't go on the EPC Register and is not shared with tenants unless you choose to.
              </p>
              <p className="text-foreground font-semibold">
                It's your blueprint for compliance — and for protecting the long-term value of your portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Landlords Choose Solent EPC
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Local, accredited, and experienced",
                "Straight-talking advice with no jargon",
                "Same-day EPCs available",
                "Portfolio-friendly reporting",
                "Practical recommendations, not guesswork",
                "Transparent pricing",
                "Familiar with landlord requirements, HHSRS considerations and upcoming reforms"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Step Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Next Step — Get Your Landlord Energy Report
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Planning ahead saves money, reduces stress and ensures your properties stay lettable.
            </p>
            <p className="text-lg text-foreground font-medium">
              Whether you own one property or fifty, Solent EPC can assess where you stand and give you a clear roadmap to prepare for the 2028 EPC changes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6">
              <Link to="/contact">Get Quote</Link>
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              No obligation — we'll outline exactly what it will cost for an EPC or full portfolio Energy Report.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <a href="tel:07879783783" className="text-lg font-semibold hover:underline">
                07879 783783
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Landlords;

import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, Clock, FileText, Shield, Phone, Building, Scale, ClipboardCheck } from "lucide-react";

const Landlords = () => {
  return (
    <Layout>
      <Helmet>
        <title>Latest EPC Rules for Landlords (2026 Update) | Solent EPC</title>
        <meta name="description" content="The January 2026 EPC update explained. What's confirmed, what's changing, and how landlords should plan sensibly for 2030. Clear, accurate advice." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Landlords: EPC Rules Are Changing. Here's What's Now Confirmed
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4">
              The Government has confirmed the future direction of EPC standards for rental property.
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              The law hasn't changed yet — but the path to 2030 is now clear.
            </p>
            <p className="text-base text-white/90 mb-8">
              Solent EPC helps landlords understand where they stand today, what's coming next, and how to plan sensibly — without panic or unnecessary spend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/contact">Book Your EPC</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Get Advice</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              What's Changed — And What Hasn't
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In January 2026, the Government published its response to the consultation on improving energy performance in the private rented sector.
              </p>
              <p className="text-lg text-foreground font-medium mb-4">
                This response does not introduce new law today.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                However, it does confirm the future direction of travel — giving landlords much clearer guidance on what to expect by 2030.
              </p>
              <p className="text-lg text-primary font-semibold">
                The result: less speculation, more certainty, and a stronger need for informed planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              The Post-2026 EPC Direction Explained
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              Here's what landlords are now expected to prepare for, based on confirmed Government policy.
            </p>

            <div className="space-y-8">
              {/* Rule 1 */}
              <div className="bg-background rounded-lg p-8 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 shrink-0">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">A higher minimum standard from 2030</h3>
                    <p className="text-muted-foreground mb-4">
                      From 1 October 2030, privately rented homes will be required to meet a higher energy efficiency standard, broadly equivalent to EPC C.
                    </p>
                    <p className="text-foreground font-medium mb-4">
                      However, future compliance will not rely on EPC letters alone.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The Government has confirmed a move toward:
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span><strong className="text-foreground">Fabric performance</strong> as the primary measure</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground mb-2">Plus either:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>Heating system efficiency, or</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>Smart readiness (controls and monitoring)</span>
                      </li>
                    </ul>
                    <p className="text-primary font-semibold mt-4">
                      This represents a shift from letter-chasing to building performance.
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
                    <h3 className="text-xl font-bold mb-4">A confirmed £10,000 cost cap — not £15,000</h3>
                    <p className="text-muted-foreground mb-4">
                      Earlier proposals suggested landlords might need to spend up to £15,000 per property.
                    </p>
                    <p className="text-foreground font-medium mb-4">
                      That figure is now out of date.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The Government has confirmed:
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>A <strong className="text-foreground">£10,000 maximum cost cap</strong> per property</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>This is a legal ceiling, not a target</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>The Government estimates average spend at around <strong className="text-foreground">£5,400</strong></span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      Landlords stop once the next suitable improvement would push them over the cap.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Eligible improvements installed from 1 October 2025 onwards can count toward this cap, provided costs are properly evidenced.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      (Spending on fossil fuel heating systems does not count.)
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
                    <h3 className="text-xl font-bold mb-4">Exemptions are broader — and last longer</h3>
                    <p className="text-muted-foreground mb-4">
                      The new guidance confirms a wider, more realistic exemption framework, including:
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>High-cost exemptions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>Solid wall insulation opt-outs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>Negative impacts exemptions (where works would harm the building)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>Property value adjustments for homes under £100,000</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>Third-party consent refusals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>Cost cap exemptions once £10,000 is genuinely exhausted</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      Most exemptions last <strong className="text-foreground">5 years</strong>, but key exemptions — including cost cap and negative impacts — last <strong className="text-foreground">10 years</strong>.
                    </p>
                    <p className="text-primary font-semibold">
                      Not every property can be upgraded sensibly — and the Government has now acknowledged that.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rule 4 */}
              <div className="bg-background rounded-lg p-8 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 shrink-0">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Evidence-led compliance will matter more</h3>
                    <p className="text-muted-foreground mb-4">
                      As standards tighten, evidence will be essential.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Landlords will need to demonstrate:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>What improvements were suitable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>What was installed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>What was spent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ClipboardCheck className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span>Why exemptions apply (where relevant)</span>
                      </li>
                    </ul>
                    <p className="text-primary font-semibold mt-4">
                      This makes accurate EPC assessments and clear professional advice more important than ever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertTriangle className="h-10 w-10 text-amber-500" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Early Understanding Matters
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground text-center mb-8">
              Most rental properties currently sit at EPC D or E.
            </p>

            <p className="text-lg text-foreground text-center font-semibold mb-8">
              Leaving everything until the last minute increases the risk of:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Higher installation costs",
                "Long waiting times",
                "Rushed decisions",
                "Missed exemption opportunities"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-destructive/10 rounded-lg p-4">
                  <Clock className="h-5 w-5 text-destructive shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xl text-primary font-bold text-center mt-10">
              Understanding your position early gives you options, not obligations.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Solution — EPCs with Forward Planning in Mind
              </h2>
            </div>

            <p className="text-lg text-foreground text-center font-medium mb-8">
              An EPC is more than a certificate.
            </p>

            <div className="bg-background rounded-xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-7 w-7 text-primary" />
                Solent EPC helps landlords understand:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Their current EPC position",
                  "Likely improvement routes under future standards",
                  "Where costs may or may not be justified",
                  "Where exemptions may apply",
                  "How to plan sensibly toward 2030"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-primary font-semibold text-center mt-8">
              This is about clarity, not pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
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
                "Clear explanation of current law vs future policy",
                "Practical recommendations — not guesswork",
                "Portfolio-friendly reporting",
                "Transparent pricing"
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

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Understand Where You Stand?</h2>
            <p className="text-white/90 mb-8">
              Whether you own one rental property or a portfolio, Solent EPC helps you understand what applies today, what's coming next, and how to plan without overspending.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6">
              <Link to="/contact">Book Your EPC</Link>
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              No obligation — just clear, practical advice.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <a href="tel:07803280068" className="text-lg font-semibold hover:underline">
                07803 280068
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Landlords;

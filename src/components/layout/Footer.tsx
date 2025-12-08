import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Domestic EPCs", href: "/services" },
    { label: "Landlord EPCs", href: "/services" },
    { label: "Estate Agent EPCs", href: "/services" },
    { label: "Pricing", href: "/pricing" },
  ],
  areas: [
    { label: "Lymington", href: "/epc-lymington" },
    { label: "New Milton", href: "/epc-new-milton" },
    { label: "Christchurch", href: "/epc-christchurch" },
    { label: "Bournemouth", href: "/epc-bournemouth" },
    { label: "View All Areas", href: "/areas" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book an EPC", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-section py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
              </div>
              <span className="font-heading font-bold text-lg">Solent EPC</span>
            </Link>
            <p className="text-accent-foreground/80 text-sm mb-4">
              Your trusted local EPC assessor covering Hampshire, Dorset and the New Forest. Fast, friendly and fully accredited.
            </p>
            <div className="space-y-2">
              <a href="tel:01onal" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>Call for availability</span>
              </a>
              <a href="mailto:info@solentepc.co.uk" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@solentepc.co.uk</span>
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>New Forest, Hampshire</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Areas We Cover</h4>
            <ul className="space-y-2">
              {footerLinks.areas.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-accent-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-foreground/70">
              © {new Date().getFullYear()} Solent EPC. All rights reserved.
            </p>
            <p className="text-sm text-accent-foreground/70">
              Accredited Domestic Energy Assessor • Fully Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

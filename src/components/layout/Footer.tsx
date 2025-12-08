import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/solent-check-logo.png";

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
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Solent EPC" className="h-10 w-auto" />
            </Link>
            <p className="text-accent-foreground/80 text-sm mb-4">
              Your trusted local EPC assessor covering Hampshire, Dorset and the New Forest. Fast, friendly and fully accredited.
            </p>
            <div className="space-y-2">
              <a href="tel:07803280068" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>07803 280068</span>
              </a>
              <a href="mailto:rick@solentcheck.co.uk" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>rick@solentcheck.co.uk</span>
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
              © 2026 Solent EPC. All rights reserved.
            </p>
            <p className="text-sm text-accent-foreground/70">
              Accredited Domestic Energy Assessor • Fully Insured • DBS Checked
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

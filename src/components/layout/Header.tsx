import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/solent-check-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "EPC Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/areas", label: "Areas We Cover" },
  { href: "/landlords", label: "Landlords" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary/80">
      <nav className="container-section">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Solent EPC" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 text-sm font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:07803280068" className="flex items-center gap-2 text-sm font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors">
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>07803 280068</span>
            </a>
            <Button asChild size="lg" className="bg-card text-primary font-bold hover:bg-card/90">
              <Link to="/contact">Book Your EPC</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/20 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-3 text-sm font-bold text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button asChild size="lg" className="w-full bg-card text-primary font-bold hover:bg-card/90">
                  <Link to="/contact">Book Your EPC</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

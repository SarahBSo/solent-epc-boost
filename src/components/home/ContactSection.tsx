import { BookingForm } from "./BookingForm";
import { Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="book" className="section-padding bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent mb-4">
              Book Your EPC
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill in the form below and we'll get back to you to confirm your appointment.
            </p>
            <div className="bg-card rounded-xl p-6 sm:p-8 shadow-card">
              <BookingForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <h3 className="font-heading font-semibold text-xl text-accent mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-accent">Call Us</p>
                  <p className="text-muted-foreground">For same-day availability</p>
                  <a href="tel:01onal" className="text-primary font-semibold hover:underline">
                    Call Now
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-accent">Email Us</p>
                  <p className="text-muted-foreground">We'll respond within 24 hours</p>
                  <a href="mailto:info@solentepc.co.uk" className="text-primary font-semibold hover:underline">
                    info@solentepc.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-accent">Working Hours</p>
                  <p className="text-muted-foreground">Monday – Saturday</p>
                  <p className="text-foreground">9:00am – 6:00pm</p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted & Accredited</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-card rounded-lg px-4 py-3 shadow-sm">
                  <span className="text-sm font-medium text-accent">Accredited DEA</span>
                </div>
                <div className="bg-card rounded-lg px-4 py-3 shadow-sm">
                  <span className="text-sm font-medium text-accent">Fully Insured</span>
                </div>
                <div className="bg-card rounded-lg px-4 py-3 shadow-sm">
                  <span className="text-sm font-medium text-accent">Official EPC Register</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

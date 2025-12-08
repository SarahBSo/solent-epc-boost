import { Calendar, Home, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "1",
    title: "Book Your EPC",
    description: "Choose a time that suits you – often same-day or next-day availability.",
  },
  {
    icon: Home,
    step: "2",
    title: "We Visit the Property",
    description: "Our assessor visits for 20-40 minutes to measure and inspect key features.",
  },
  {
    icon: FileCheck,
    step: "3",
    title: "Receive Your Certificate",
    description: "Your EPC is lodged on the official register and emailed to you the same day.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting your EPC is simple. Here's what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className="relative text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative">
                <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6 shadow-button">
                  <item.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-heading font-bold text-sm left-1/2 ml-8">
                  {item.step}
                </div>
              </div>
              <h3 className="font-heading font-semibold text-xl text-accent mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

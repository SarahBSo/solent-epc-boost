import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const towns = [
  { name: "Lymington", slug: "lymington" },
  { name: "New Milton", slug: "new-milton" },
  { name: "Christchurch", slug: "christchurch" },
  { name: "Bournemouth", slug: "bournemouth" },
  { name: "Brockenhurst", slug: "brockenhurst" },
  { name: "Sway", slug: "sway" },
  { name: "Lyndhurst", slug: "lyndhurst" },
  { name: "Totton", slug: "totton" },
  { name: "Hythe", slug: "hythe" },
  { name: "Ringwood", slug: "ringwood" },
  { name: "Milford-on-Sea", slug: "milford-on-sea" },
  { name: "Eastleigh", slug: "eastleigh" },
  { name: "Romsey", slug: "romsey" },
  { name: "Southampton", slug: "southampton" },
  { name: "Highcliffe", slug: "highcliffe" },
];

export function AreasSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent mb-4">
            Areas We Cover
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Based in the New Forest, we provide EPC assessments within 25 miles of Lymington, covering Hampshire and Dorset.
          </p>
        </div>

        {/* Map placeholder + Towns grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-card" style={{ height: "300px" }}>
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

          {/* Towns grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {towns.map((town, index) => (
                <Link
                  key={town.slug}
                  to={`/epc/${town.slug}`}
                  className="group flex items-center gap-2 bg-background rounded-lg px-4 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  <span className="text-sm font-medium">{town.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                to="/areas"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                View all areas we cover
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

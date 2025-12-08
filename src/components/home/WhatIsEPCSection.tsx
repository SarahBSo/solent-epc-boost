export function WhatIsEPCSection() {
  const ratings = [
    { grade: "A", color: "#00AD8E", label: "92+" },
    { grade: "B", color: "#4CB748", label: "81-91" },
    { grade: "C", color: "#8BC540", label: "69-80" },
    { grade: "D", color: "#FFE500", label: "55-68" },
    { grade: "E", color: "#FCBA00", label: "39-54" },
    { grade: "F", color: "#EF7F00", label: "21-38" },
    { grade: "G", color: "#E1251B", label: "1-20" },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent mb-6">
              What Is an EPC?
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
                An <strong>Energy Performance Certificate (EPC)</strong> rates the energy efficiency of a property on a scale from A (most efficient) to G (least efficient).
              </p>
              <p>
                Every property in England and Wales needs a valid EPC before it can be sold or rented. Landlords must also ensure their rental properties meet a minimum E rating.
              </p>
              <p>
                EPCs are valid for <strong>10 years</strong> and provide potential buyers or tenants with valuable information about a property's energy costs and carbon emissions.
              </p>
              <p>
                Our accredited Domestic Energy Assessor will visit your property, take measurements and assess key features to produce your certificate – typically delivered the same day.
              </p>
            </div>
          </div>

          {/* EPC Rating Graphic */}
          <div className="flex justify-center">
            <div className="bg-background rounded-xl p-6 shadow-card">
              <h3 className="font-heading font-semibold text-center text-accent mb-4">
                EPC Rating Scale
              </h3>
              <div className="space-y-2">
                {ratings.map((rating, index) => (
                  <div
                    key={rating.grade}
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="w-16 h-10 rounded flex items-center justify-center font-heading font-bold text-lg"
                      style={{
                        backgroundColor: rating.color,
                        color: ["D", "E"].includes(rating.grade) ? "#0A2342" : "#fff",
                        width: `${100 - index * 8}%`,
                        minWidth: "60px",
                        maxWidth: "200px",
                      }}
                    >
                      {rating.grade}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {rating.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Higher scores = better energy efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const brands = [
  { name: 'DJI', category: 'Drone Technology' },
  { name: 'SONY', category: 'Electronics' },
  { name: 'KAHF', category: 'Personal Care' },
  { name: 'PLN', category: 'Energy' },
  { name: 'BUMN', category: 'State Enterprise' },
  { name: 'ADHI', category: 'Construction' },
  { name: 'AKASO', category: 'Action Camera' },
  { name: 'BEIKE', category: 'Camera Gear' },
  { name: 'CANON', category: 'Imaging' },
  { name: 'GOPRO', category: 'Action Camera' },
  { name: 'INSTA360', category: 'Camera Tech' },
  { name: 'ZHIYUN', category: 'Stabilizers' },
  { name: 'GODOX', category: 'Lighting' },
  { name: 'BLACKMAGIC', category: 'Cinema' },
  { name: 'RØDE', category: 'Audio' },
  { name: 'MANFROTTO', category: 'Tripods' },
  { name: 'SANDISK', category: 'Storage' },
  { name: 'HOLLYLAND', category: 'Wireless' },
  { name: 'NEEWER', category: 'Studio Gear' },
  { name: 'ASUS', category: 'Technology' },
];

const CollaborationsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Brand <span className="text-primary font-medium">Collaborations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Proud to have worked with leading brands across industries, 
            delivering cinematic excellence for every project.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 h-28 flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10">
                <span className="text-xl md:text-2xl font-bold text-foreground/80 group-hover:text-primary transition-colors duration-300 tracking-wide">
                  {brand.name}
                </span>
                <span className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          {[
            { number: '50+', label: 'Brand Partners' },
            { number: '200+', label: 'Projects Delivered' },
            { number: '5+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-light text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;

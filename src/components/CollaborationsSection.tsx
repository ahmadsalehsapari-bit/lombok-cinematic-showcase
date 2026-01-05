import React from 'react';
import lombokLogo from '@/assets/lombok-visual-logo.jpg';

const brands = [
  { name: 'DJI', style: 'font-bold tracking-wider' },
  { name: 'SONY', style: 'font-light tracking-[0.3em]' },
  { name: 'KAHF', style: 'font-bold italic' },
  { name: 'PLN', style: 'font-black' },
  { name: 'BUMN', style: 'font-bold tracking-wide' },
  { name: 'ADHI', style: 'font-semibold tracking-widest' },
  { name: 'AKASO', style: 'font-bold' },
  { name: 'BEIKE', style: 'font-medium tracking-wide' },
  { name: 'CANON', style: 'font-bold tracking-[0.2em]' },
  { name: 'GOPRO', style: 'font-black italic' },
  { name: 'INSTA360', style: 'font-bold' },
  { name: 'ZHIYUN', style: 'font-medium tracking-wider' },
  { name: 'GODOX', style: 'font-bold' },
  { name: 'BLACKMAGIC', style: 'font-light tracking-wide' },
  { name: 'RØDE', style: 'font-bold tracking-widest' },
  { name: 'MANFROTTO', style: 'font-semibold' },
  { name: 'SANDISK', style: 'font-bold italic' },
  { name: 'HOLLYLAND', style: 'font-medium tracking-wide' },
  { name: 'NEEWER', style: 'font-bold' },
  { name: 'ASUS', style: 'font-black tracking-wider' },
];

const CollaborationsSection = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Logo + Header */}
        <div className="text-center mb-10 animate-fade-in">
          <img 
            src={lombokLogo} 
            alt="Lombok Visual" 
            className="h-16 w-16 object-contain rounded-lg mx-auto mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-light text-foreground">
            Brand <span className="text-primary font-medium">Collaborations</span>
          </h2>
        </div>

        {/* Compact Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-5xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <span 
                className={`text-base md:text-lg text-muted-foreground/70 group-hover:text-primary transition-colors duration-300 ${brand.style}`}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;

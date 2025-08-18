import React from 'react';
import { Camera, Award, Users, Zap } from 'lucide-react';
import aboutPortrait from '../assets/about-portrait.jpg';

const stats = [
  { icon: Camera, label: 'Projects Completed', value: '150+' },
  { icon: Award, label: 'Awards Won', value: '12' },
  { icon: Users, label: 'Happy Clients', value: '200+' },
  { icon: Zap, label: 'Years Experience', value: '8' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="slide-up">
              <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-6">
                Crafting <span className="text-copper-gradient">Visual Stories</span>
              </h2>
            </div>
            
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Based in the heart of Lombok, we specialize in capturing life's most 
                precious moments through a cinematic lens. Our passion lies in transforming 
                ordinary moments into extraordinary visual narratives.
              </p>
            </div>
            
            <div className="slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From intimate wedding ceremonies to grand corporate events, each project 
                is approached with meticulous attention to detail and a commitment to 
                storytelling excellence that resonates with our clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 slide-up" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-3">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-cinematic font-bold text-copper-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-cinematic">
                <img
                  src={aboutPortrait}
                  alt="Professional Videographer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              
              {/* Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm p-4 rounded-lg border border-border">
                <p className="text-sm font-medium text-foreground/90 italic">
                  "Every frame is a moment, every moment tells a story."
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  — Creative Director, Lombok Visual
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
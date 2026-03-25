import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '../assets/hero-bg.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cinematic Lombok Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-parallax-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary/60 rounded-full animate-parallax-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full animate-parallax-float opacity-80" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="slide-up">
          <h1 className="font-cinematic font-bold mb-6 leading-tight">
            <span className="text-5xl md:text-6xl lg:text-7xl block">Lombok Videographer</span>
            <span className="text-copper-gradient block text-2xl md:text-3xl lg:text-4xl mt-3">Cinematic Stories for Brands & Luxury Experiences</span>
          </h1>
        </div>
        
        <div className="slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            High-end videography services in Lombok, creating cinematic content 
            for brands, villas, and unforgettable experiences.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="hero" 
            size="xl" 
            className="group"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            View Our Work
          </Button>
          
          <Button 
            variant="cinematic" 
            size="xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </div>
        
        <div className="mt-16 fade-in" style={{ animationDelay: '0.9s' }}>
          <p className="text-sm text-foreground/60 mb-4 uppercase tracking-widest">Scroll to Explore</p>
          <ChevronDown className="h-6 w-6 mx-auto text-primary animate-bounce" />
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
    </section>
  );
};

export default HeroSection;
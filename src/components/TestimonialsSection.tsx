import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Johnson',
    role: 'Wedding Clients',
    content: 'Lombok Visual captured our wedding day with such artistry and emotion. Every frame tells our story beautifully. The cinematic quality is beyond our expectations.',
    rating: 5,
    location: 'Senggigi Beach Wedding',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Resort Manager',
    content: 'Outstanding professional work for our luxury resort promotional video. The team understood our vision perfectly and delivered a masterpiece that elevated our brand.',
    rating: 5,
    location: 'Luxury Resort Lombok',
  },
  {
    id: 3,
    name: 'Lisa Rodriguez',
    role: 'Travel Blogger',
    content: 'The travel documentary they created for our Lombok expedition was absolutely stunning. Professional, creative, and captured the essence of the island perfectly.',
    rating: 5,
    location: 'Adventure Travel Series',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="slide-up">
            <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-4">
              Client <span className="text-copper-gradient">Stories</span>
            </h2>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our clients say about their cinematic journey with us.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="slide-up hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-6 shadow-cinematic hover:shadow-copper transition-all duration-500 h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/60" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-primary/20 pt-4">
                  <div className="font-semibold text-copper-gradient">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-primary/80 mt-1">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-cinematic font-semibold mb-4">
              Ready to Create Your <span className="text-copper-gradient">Story?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our growing family of satisfied clients and let us craft your perfect cinematic experience.
            </p>
            <div className="flex gap-1 justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-primary font-medium">
              5.0 Stars • 200+ Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
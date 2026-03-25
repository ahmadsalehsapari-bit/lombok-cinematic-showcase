import React from 'react';
import { MessageCircle, Mail, Instagram, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="slide-up">
            <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-4">
              Let's Create <span className="text-copper-gradient">Together</span>
            </h2>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to turn your vision into cinematic reality? Get in touch and let's discuss your project.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8 shadow-cinematic">
            <h3 className="text-2xl font-cinematic font-semibold mb-6 text-copper-gradient text-center">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Mataram, Lombok<br />
                    West Nusa Tenggara, Indonesia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+62 81 943 390 626</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">lombokvisuals@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h4 className="font-semibold mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                <a href="https://wa.me/6281943390626" target="_blank" rel="noopener noreferrer">
                  <Button variant="cinematic" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/dracobarth_/" target="_blank" rel="noopener noreferrer">
                  <Button variant="cinematic" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Instagram className="h-4 w-4" />
                  </Button>
                </a>
                <a href="mailto:lombokvisuals@gmail.com">
                  <Button variant="cinematic" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-primary font-medium">
                ⚡ We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

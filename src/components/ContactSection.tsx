import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Instagram, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="slide-up" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Videography</option>
                  <option value="brand">Brand/Commercial Video</option>
                  <option value="travel">Travel Documentation</option>
                  <option value="storytelling">Custom Storytelling</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground resize-none"
                  placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8 shadow-cinematic">
              <h3 className="text-2xl font-cinematic font-semibold mb-6 text-copper-gradient">
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
                    <p className="text-muted-foreground">hello@lombardvisual.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-primary/20">
                <h4 className="font-semibold mb-4">Follow Our Journey</h4>
                <div className="flex gap-4">
                  <Button variant="cinematic" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <a href="https://www.instagram.com/dracobarth_?igsh=NmE3bTlzb3hmM3Uz" target="_blank" rel="noopener noreferrer">
                    <Button variant="cinematic" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </a>
                  <Button variant="cinematic" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Mail className="h-4 w-4" />
                  </Button>
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
      </div>
    </section>
  );
};

export default ContactSection;
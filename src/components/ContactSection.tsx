import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Instagram, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { supabase } from '@/integrations/supabase/client';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Mohon isi semua field yang wajib diisi.');
      return;
    }

    if (formData.name.length > 100 || formData.email.length > 255 || formData.message.length > 2000) {
      setStatus('error');
      setErrorMessage('Input melebihi panjang maksimum yang diizinkan.');
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          service: formData.service,
          message: formData.message.trim(),
        },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (err: any) {
      console.error('Error sending message:', err);
      setStatus('error');
      setErrorMessage('Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via WhatsApp.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status !== 'idle') setStatus('idle');
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
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
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
                  className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="Wedding Videography">Wedding Videography</option>
                  <option value="Brand/Commercial Video">Brand/Commercial Video</option>
                  <option value="Travel Documentation">Travel Documentation</option>
                  <option value="Custom Storytelling">Custom Storytelling</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Project Details <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={2000}
                  className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground resize-none"
                  placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                />
                <p className="text-xs text-muted-foreground mt-1 text-right">{formData.message.length}/2000</p>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-accent/30 border border-primary/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-foreground text-sm">
                    Pesan berhasil dikirim! Kami akan merespons dalam 24 jam.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
                  <p className="text-destructive text-sm">{errorMessage}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
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
                  <a href="https://www.instagram.com/dracobarth_?igsh=NmE3bTlzb3hmM3Uz" target="_blank" rel="noopener noreferrer">
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
      </div>
    </section>
  );
};

export default ContactSection;

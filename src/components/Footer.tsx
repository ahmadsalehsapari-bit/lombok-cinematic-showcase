import React from 'react';
import { Heart, Camera } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-cinematic font-bold">
                <span className="text-copper-gradient">Lombok</span> Visual
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Crafting cinematic stories that capture the essence of your most precious moments 
              in the beautiful landscapes of Lombok.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Wedding Videography</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Brand Videos</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Travel Documentation</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Commercial Projects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Mataram, Lombok</p>
              <p>West Nusa Tenggara, Indonesia</p>
              <p className="hover:text-primary transition-colors cursor-pointer">+62 812-3456-7890</p>
              <p className="hover:text-primary transition-colors cursor-pointer">hello@lombardvisual.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>in Lombok</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2024 Lombok Visual. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
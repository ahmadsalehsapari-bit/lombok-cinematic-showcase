import React from 'react';
import { X, Play } from 'lucide-react';
import { Button } from './ui/button';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
    thumbnail: string;
  } | null;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative max-w-5xl w-full mx-4 bg-card rounded-lg shadow-cinematic border border-border overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-background/20 backdrop-blur-sm hover:bg-background/40"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div className="aspect-video bg-secondary/20 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-primary/20 backdrop-blur-sm rounded-full p-6 mx-auto mb-4 w-24 h-24 flex items-center justify-center">
              <Play className="h-8 w-8 text-primary ml-2" />
            </div>
            <p className="text-muted-foreground">Video Player Coming Soon</p>
          </div>
        </div>
        
        <div className="p-6 border-t border-border">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl font-cinematic font-semibold mb-2 text-copper-gradient">
            {project.title}
          </h3>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
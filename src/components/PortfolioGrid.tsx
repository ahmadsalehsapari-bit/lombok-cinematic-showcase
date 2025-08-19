import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';
import Lightbox from './Lightbox';
import portfolioWedding from '../assets/portfolio-wedding.jpg';
import portfolioBrand from '../assets/portfolio-brand.jpg';
import portfolioTravel from '../assets/portfolio-travel.jpg';
import portfolioGoldenHour from '../assets/portfolio-golden-hour.jpg';

// TO ADD YOUR OWN VIDEOS:
// 1. Put video files in src/assets/ folder (e.g., video1.mp4, video2.mp4)
// 2. Import them: import myVideo from '../assets/my-video.mp4'
// 3. Add videoUrl property to each item below
// 4. Or use YouTube/Vimeo links: videoUrl: 'https://youtube.com/embed/VIDEO_ID'

const portfolioItems = [
  {
    id: '1',
    title: 'Golden Hour Romance',
    description: 'An intimate wedding ceremony capturing the essence of Lombok\'s natural beauty during the perfect golden hour.',
    category: 'Wedding',
    thumbnail: '/lovable-uploads/700e46e3-2a78-4345-9c10-103d88494aba.png',
    videoUrl: 'https://www.youtube.com/embed/WD4Z1Tbdeec?start=3', // Wedding video
  },
  {
    id: '2',
    title: 'Luxury Resort Showcase',
    description: 'Premium brand video showcasing the elegance and sophistication of Lombok\'s finest resort destination.',
    category: 'Brand',
    thumbnail: portfolioBrand,
    videoUrl: 'https://www.youtube.com/embed/zj1L5zm_f78', // Your Brand video
  },
  {
    id: '3',
    title: 'Cultural Heritage',
    description: 'Documentary-style storytelling capturing the authentic traditions and daily life of Sasak village communities.',
    category: 'Travel',
    thumbnail: portfolioTravel,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video
  },
  {
    id: '4',
    title: 'Sunset Celebration',
    description: 'Cinematic coverage of a beachfront celebration with dramatic sunset lighting.',
    category: 'Wedding',
    thumbnail: portfolioWedding,
    videoUrl: 'https://www.youtube.com/embed/WD4Z1Tbdeec?start=3', // Wedding video
  },
  {
    id: '5',
    title: 'Adventure Journey',
    description: 'Epic travel documentation of mountain adventures and scenic landscapes.',
    category: 'Travel',
    thumbnail: portfolioTravel,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video
  },
  {
    id: '6',
    title: 'Corporate Excellence',
    description: 'Professional brand storytelling for enterprise clients.',
    category: 'Brand',
    thumbnail: portfolioBrand,
    videoUrl: 'https://www.youtube.com/embed/zj1L5zm_f78', // Your Brand video
  },
];

const categories = ['All', 'Wedding', 'Brand', 'Travel', 'Storytelling'];

const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-4">
              <span className="text-copper-gradient">Cinematic</span> Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each frame tells a story. Discover our collection of premium videography work.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'filter'}
                onClick={() => setActiveCategory(category)}
                className="font-medium"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className={`group cursor-pointer fade-in ${index % 3 === 1 ? 'md:mt-8' : ''}`}
                onClick={() => setSelectedProject(item)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary shadow-cinematic hover:shadow-copper transition-all duration-500 hover:scale-105">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 shadow-copper animate-cinematic-glow">
                      <Play className="h-6 w-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Gradient Background for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent rounded-b-lg" />
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-cinematic font-semibold mb-2 text-copper-gradient">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
};

export default PortfolioGrid;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  category: string;
  featured: boolean;
  links: {
    github: string;
    demo: string;
  };
  fullDescription?: string;
  technologies?: string[];
  challenges?: string[];
  outcomes?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const hasMultipleImages = project.images && project.images.length > 1;
  const displayImages = project.images || [project.image];
  const currentImage = displayImages[currentImageIndex];

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-bold gradient-text pr-8">
              {project.title}
            </DialogTitle>
            {project.featured && (
              <Badge className="bg-primary text-white">Featured</Badge>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image Gallery */}
          <div className="relative rounded-lg overflow-hidden group">
            <OptimizedImage
              src={currentImage}
              alt={project.title}
              className="w-full h-64 md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            
            {/* Gallery Navigation */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={goToPrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {displayImages.length}
                </div>

                {/* Thumbnail Strip */}
                <div className="absolute bottom-4 right-4 flex gap-1 bg-black/30 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {displayImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-primary w-6'
                          : 'bg-white/50 hover:bg-white'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {project.challenges && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Challenges</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.outcomes && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Results & Impact</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Category</h3>
                <Badge className="capitalize bg-primary/10 text-primary border-primary/20">
                  {project.category}
                </Badge>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Project Links</h3>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="default"
                    className="w-full bg-gradient-primary hover:shadow-primary text-white"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
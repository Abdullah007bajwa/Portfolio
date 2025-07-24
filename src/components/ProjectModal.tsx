import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
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
  if (!project) return null;

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
          {/* Project Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
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
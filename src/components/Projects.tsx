import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye, Info } from 'lucide-react';
import ProjectModal from '@/components/ProjectModal';

// Import project images
import workoutImage from '@/assets/project-workout.png';
import stockImage from '@/assets/project-stock.png';
import elderlyImage from '@/assets/project-elderly.png';
import llmImage from '@/assets/project-llm.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Cuddly Fortnight – AI Career Assistant',
      description: 'An AI-powered career planning assistant that recommends tailored career paths, courses, and skills based on your goals.',
      image: stockImage, // You can replace this with a real screenshot later
      tags: ['React', 'LLM', 'AI Agent', 'Express.js'],
      category: 'ai',
      featured: false,
      links: {
        github: 'https://github.com/Abdullah007bajwa/cuddly-fortnight',
        demo: 'https://cuddly-fortnight-o8t6.onrender.com/'
      },
      fullDescription: 'Cuddly Fortnight is an intelligent career assistant that leverages AI agents to provide users with real-time career guidance. It suggests next steps, relevant skills, and even learning resources based on user input.',
      challenges: [
        'Creating dynamic agent responses using LLMs',
        'Designing intuitive UX for conversation flow',
        'Deploying and optimizing performance on Render'
      ],
      outcomes: [
        'Launched an interactive AI-based career assistant',
        'Enabled dynamic suggestions based on user profile',
        'Deployed full-stack app with React + Express + LLMs'
      ]
    },

    {
      id: 2,
      title: 'Stock Pattern Predictor',
      description: 'Predictive model using LSTM neural networks for stock market trend analysis and pattern recognition with high accuracy forecasting.',
      image: stockImage,
      tags: ['LSTM', 'Time Series', 'Financial Analysis', 'PyTorch'],
      category: 'ai',
      featured: true,
      links: {
        github: 'https://github.com/Abdullah007bajwa/Advanced-Stock-Pattern-Prediction-using-LSTM-with-Attention-Mechanism-in-TensorFlow',
        demo: '#'
      },
      fullDescription: 'A sophisticated financial prediction system using LSTM neural networks to analyze historical stock data and predict future trends. The model incorporates multiple technical indicators and sentiment analysis for enhanced accuracy.',
      challenges: ['Handling market volatility', 'Feature engineering for time series', 'Preventing overfitting'],
      outcomes: ['Achieved 78% prediction accuracy', 'Reduced risk exposure by 35%', 'Generated consistent returns']
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'Modern portfolio built using Next.js, Tailwind CSS, and Shadcn showcasing projects, experience, and contact.',
      image: llmImage, // Replace with actual screenshot of the portfolio later
      tags: ['Next.js', 'Tailwind CSS', 'Shadcn', 'TypeScript'],
      category: 'web',
      featured: false,
      links: {
        github: 'https://github.com/Abdullah007bajwa/Portfolio-',
        demo: 'https://abdullah007bajwa.vercel.app' // or your live link
      },
      fullDescription: 'This portfolio is a clean, fast, and responsive website showcasing my skills, experience, and projects. Built with a strong focus on performance, accessibility, and developer experience.',
      challenges: ['Implementing dark mode toggle', 'Building reusable UI components', 'Deploying dynamic sections'],
      outcomes: ['Improved online presence', 'Increased recruiter engagement', 'Mobile-first responsive design']
    },
    {
      id: 4,
      title: 'Million Parameter LLM',
      description: 'Large language model with millions of parameters designed for advanced text generation and natural language processing tasks.',
      image: llmImage,
      tags: ['NLP', 'Transformers', 'LLM', 'Text Generation'],
      category: 'ai',
      featured: true,
      links: {
        github: 'https://github.com/Abdullah007bajwa/Million-Parameter-LLM',
        demo: 'https://github.com/Abdullah007bajwa/Million-Parameter-LLM'
      }
    },
    {
      id: 5,
      title: 'MintArt Platform',
      description: 'Flutter-based creative platform for AI-powered image generation and digital art creation with modern UI/UX design.',
      image: workoutImage, // Placeholder - would need actual image
      tags: ['Flutter', 'AI Art', 'Image Generation', 'Creative'],
      category: 'mobile',
      featured: false,
      links: {
        github: 'https://github.com/Abdullah007bajwa/MintArt',
        demo: 'https://mint-q0ue6twkq-abdullah-bajwas-projects-db31a83a.vercel.app/'
      }
    },
    {
      id: 6,
      title: 'Recipe Management System',
      description: 'Modern web application for browsing, managing, and sharing recipes with smart categorization and search functionality.',
      image: stockImage, // Placeholder - would need actual image
      tags: ['Web App', 'React', 'Database', 'UI/UX'],
      category: 'web',
      featured: false,
      links: {
        github: '#',
        demo: '#'
      }
    },

    {
      id: 7,
      title: 'Elderly Companion App',
      description: 'Flutter-based mobile application for senior care featuring AI companionship, health monitoring, and drone assistance integration.',
      image: elderlyImage,
      tags: ['Flutter', 'Mobile', 'Healthcare', 'IoT'],
      category: 'mobile',
      featured: false,
      links: {
        github: 'https://github.com/Abdullah007bajwa/Elderly_Care_Companion',
        demo: 'https://github.com/Abdullah007bajwa/Elderly_Care_Companion'
      }
    },
    {
      id: 8,
      title: 'Workout Video Classifier',
      description: 'AI-driven exercise video classification using deep learning to automatically detect and categorize different workout movements and exercises.',
      image: workoutImage,
      tags: ['Computer Vision', 'Deep Learning', 'TensorFlow', 'OpenCV'],
      category: 'ai',
      featured: true,
      links: {
        github: 'https://github.com/Abdullah007bajwa/WorkoutVideoAnalyzer',
        demo: '#'
      },
      fullDescription: 'This project leverages advanced computer vision techniques to analyze workout videos in real-time. Using convolutional neural networks and temporal analysis, it can identify and classify various exercise movements with high accuracy.',
      challenges: ['Real-time processing requirements', 'Handling diverse lighting conditions', 'Accurate pose estimation'],
      outcomes: ['95% accuracy in exercise classification', 'Real-time processing at 30fps', 'Reduced training supervision by 60%']
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const categories = ['all', 'ai', 'mobile', 'web'];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const visibleProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, 3); // Show only 6 projects initially


  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my latest work in AI, machine learning, and software development. 
            Each project represents a unique challenge solved with innovative technology.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className={`capitalize px-6 py-2 transition-all ${
                filter === category 
                  ? 'bg-gradient-primary text-white shadow-primary' 
                  : 'hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
              <Card
              key={project.id}
              className={`group hover-lift bg-gradient-card border-border/50 hover:border-primary/20 overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    Featured
                  </Badge>
                )}

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/95 text-black hover:bg-white shadow-lg"
                      onClick={() => openProjectModal(project)}
                    >
                      <Info className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/95 text-black hover:bg-white shadow-lg"
                      asChild
                    >
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/95 text-black hover:bg-white shadow-lg"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <CardContent className="p-6">
                <button
                  onClick={() => openProjectModal(project)}
                  className="w-full text-left"
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </button>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary/10 hover:text-primary"
                    onClick={() => openProjectModal(project)}
                  >
                    <Info className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="View demo">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-muted/50"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="View source code">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && visibleProjects.length < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="px-8 py-3 hover:bg-primary/10 hover:text-primary border-primary/20"
            >
              View All Projects
            </Button>
          </div>
        )}


        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Projects;
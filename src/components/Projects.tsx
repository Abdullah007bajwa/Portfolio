import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye, Info } from 'lucide-react';
import ProjectModal from '@/components/ProjectModal';
import { OptimizedImage } from '@/components/OptimizedImage';
import mintImage from '@/assets/mintart.png';
// Import project images
import workoutImage from '@/assets/project-workout.png';
import stockImage from '@/assets/project-stock.png';
import elderlyImage from '@/assets/project-elderly.png';
import llmImage from '@/assets/project-llm.png';
import cuddlyImage from '@/assets/cuddly.png';
import portfolioImage from '@/assets/portfolio.png';
import recipeImage from '@/assets/recipes .jpg';
import inceptraImage from '@/assets/inceptra.png';
import inceptra2Image from '@/assets/inceptra2.png';
import inceptraaaImage from '@/assets/inceptraaa.png';
// Import SMS (Screen Monitoring System) screenshots
import smsScreenshot1 from '@/assets/SMS.png';
import smsScreenshot2 from '@/assets/SMS (2).png';
import smsScreenshot3 from '@/assets/SMS (3).png';
// Import VertexHub screenshots
import vertexhubScreenshot1 from '@/assets/Screenshot 2025-10-14 145023.png';
import vertexhubScreenshot2 from '@/assets/Screenshot 2025-10-14 145055.png';
import vertexhubScreenshot3 from '@/assets/Screenshot 2025-10-14 145525.png';
import vertexhubScreenshot4 from '@/assets/Screenshot 2025-10-14 145635.png';
import vertexhubScreenshot5 from '@/assets/Screenshot 2025-10-14 145811.png';
import vertexhubScreenshot6 from '@/assets/Screenshot 2025-10-14 150138.png';

const Projects = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'VertexHub – Enterprise Collaboration Platform',
      description: 'Production-ready unified platform combining Slack messaging, Jira ticketing, and advanced project management in one cost-effective solution.',
      image: vertexhubScreenshot1,
      images: [vertexhubScreenshot1, vertexhubScreenshot2, vertexhubScreenshot3, vertexhubScreenshot4, vertexhubScreenshot5, vertexhubScreenshot6],
      tags: ['React', 'TypeScript', 'FastAPI', 'WebSocket', 'Redis', 'PostgreSQL'],
      categories: ['web'],
      featured: true,
      links: {
        github: 'https://slack-clone-t1mc.onrender.com/',
        demo: 'https://slack-clone-t1mc.onrender.com/'
      },
      fullDescription: 'Enterprise-grade full-stack collaboration platform replacing Slack + Jira subscriptions. Features real-time WebSocket messaging, multi-workspace architecture, advanced ticket management with workflow states, role-based access control (SUPER_ADMIN, ADMIN, EMPLOYEE), AWS S3 file storage, and Clerk authentication. React 18 + TypeScript frontend with Vite, FastAPI async backend, PostgreSQL + Redis, deployed with Docker + Kubernetes.',
      challenges: [
        'Real-time bidirectional WebSocket communication at scale',
        'Complex state synchronization across 100+ concurrent users',
        'Horizontal scaling with Redis Pub/Sub and connection pooling',
        'Optimistic UI updates with offline-first architecture',
        'Enterprise security with JWT + Clerk integration'
      ],
      outcomes: [
        'Sub-100ms message delivery with <50ms latency',
        '100+ concurrent user support with connection pooling',
        '51 custom reusable UI components with Radix + Tailwind',
        'Thread support, typing indicators, presence tracking',
        'Advanced ticket management (Jira-like capabilities)',
        'Multi-tenant workspace architecture',
        'Production Docker + Kubernetes deployment',
        'Comprehensive audit logging for compliance'
      ]
    },
    {
      id: 2,
      title: 'Cuddly Fortnight – AI Career Assistant',
      description: 'AI-powered career guidance tool providing personalized paths, skill recommendations, and learning resources.',
      image: cuddlyImage,
      tags: ['React', 'LLM', 'AI Agent', 'Express.js'],
      categories: ['ai', 'web'],
      featured: false,
      links: {
        github: 'https://github.com/Abdullah007bajwa/cuddly-fortnight',
        demo: 'https://cuddly-fortnight-o8t6.onrender.com/'
      },
      fullDescription: 'Intelligent career planning assistant using LLM agents to deliver personalized career guidance. Analyzes user profile, goals, and experience to recommend next career moves, relevant skills, and curated learning resources with real-time conversational interface.',
      challenges: [
        'Dynamic LLM response generation and streaming',
        'Smooth multi-turn conversation UX',
        'Server-side rendering and Render optimization'
      ],
      outcomes: [
        'Interactive AI conversation interface',
        'Context-aware career recommendations',
        'Reduced API response time by 40%'
      ]
    },
    {
      id: 3,
      title: 'Inceptra: Autonomous Agent Framework',
      description: 'Open-source TypeScript framework for building modular, event-driven AI agents and workflows.',
      image: inceptraImage,
      images: [inceptraImage, inceptra2Image, inceptraaaImage],
      tags: ['Agents', 'LangGraph', 'Event-Driven', 'TypeScript'],
      categories: ['ai', 'framework'],
      featured: true,
      links: {
        github: 'https://github.com/Abdullah007bajwa/inceptra',
        demo: 'https://frontend-lake-zeta-90.vercel.app/'
      },
      fullDescription: 'Infrastructure framework for agent-based systems. Event-driven architecture with LangGraph, plug-and-play tool integration, fine-grained state management, and modular workflow design. Ideal for autonomous AI agents, automation pipelines, and orchestrated ML workflows.'
    },
    {
      id: 4,
      title: 'Screen Monitoring System',
      description: 'Desktop app for real-time activity tracking, screen monitoring, and performance analytics.',
      image: smsScreenshot1,
      images: [smsScreenshot1, smsScreenshot2, smsScreenshot3],
      tags: ['Python', 'Desktop', 'Monitoring', 'Real-time'],
      categories: ['web'],
      featured: true,
      links: {
        github: 'https://github.com/Abdullah007bajwa/Screen-Monitoring-System',
        demo: 'https://drive.google.com/file/d/13369RBVlz7uMV3sauz_C7hpdHIjPigId/view?usp=sharing'
      },
      fullDescription: 'Robust Python desktop application for real-time screen capture, activity tracking, and system metrics monitoring. Features comprehensive analytics dashboard, efficient data storage, and detailed reporting with privacy-first architecture.',
      challenges: [
        'Zero-overhead real-time screen capture',
        'Efficient time-series data storage',
        'Responsive analytics dashboard',
        'Privacy and security compliance'
      ],
      outcomes: [
        '60 FPS screen monitoring',
        'Real-time activity reports',
        'Efficient memory footprint',
        'Standalone executable deployment'
      ]
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'High-performance portfolio showcasing projects, skills, and experience with responsive design.',
      image: portfolioImage,
      tags: ['React', 'Vite', 'Tailwind', 'TypeScript'],
      categories: ['web'],
      featured: false,
      links: {
        github: 'https://github.com/Abdullah007bajwa/Portfolio-',
        demo: 'https://abdullah007bajwa.vercel.app'
      },
      fullDescription: 'Fast, accessible portfolio built with React + Vite + Tailwind CSS. Features dark/light theme toggle, lazy-loaded images, smooth animations, and mobile-first responsive design. Deployed on custom domain with GitHub Pages and GitHub Actions CI/CD.',
      challenges: [
        'Dynamic component rendering',
        'Custom domain routing',
        'Image optimization for performance'
      ],
      outcomes: [
        'LightHouse score: 95+',
        'Mobile-first design',
        'Automated CI/CD pipeline'
      ]
    },
    {
      id: 6,
      title: 'Million Parameter LLM',
      description: 'Custom-trained transformer model with advanced text generation and NLP capabilities.',
      image: llmImage,
      tags: ['NLP', 'Transformers', 'PyTorch', 'LSTM'],
      categories: ['ai'],
      featured: true,
      links: {
        github: 'https://github.com/Abdullah007bajwa/Million-Parameter-LLM',
        demo: 'https://github.com/Abdullah007bajwa/Million-Parameter-LLM'
      },
      fullDescription: 'Custom-built language model with millions of trainable parameters. Trained on diverse datasets for coherent text generation and NLP tasks. Features attention mechanisms, positional encoding, and optimized inference.',
      challenges: [
        'Training efficiency and convergence',
        'Memory optimization for large batches',
        'Quality output generation'
      ],
      outcomes: [
        'Successful model convergence',
        'Fast inference performance',
        'High-quality text generation'
      ]
    },
    {
      id: 7,
      title: 'MintArt – AI Art Generation Platform',
      description: 'Flutter mobile app for AI-powered digital art creation with intuitive UI.',
      image: mintImage,
      tags: ['Flutter', 'AI Art', 'Mobile', 'Image Gen'],
      categories: ['mobile', 'ai'],
      featured: false,
      links: {
        github: 'https://github.com/Abdullah007bajwa/MintArt',
        demo: 'https://mint-q0ue6twkq-abdullah-bajwas-projects-db31a83a.vercel.app/'
      },
      fullDescription: 'Creative mobile platform enabling AI-powered image generation. Beautiful Flutter UI with smooth animations, real-time preview, and gallery management for digital artists and creators.',
      challenges: [
        'Real-time AI processing',
        'Smooth mobile animations',
        'Efficient image storage'
      ],
      outcomes: [
        'Intuitive creative interface',
        '100+ generated artworks',
        'Responsive cross-platform design'
      ]
    },
    {
      id: 8,
      title: 'Recipe Management System',
      description: 'Web app for discovering, managing, and sharing recipes with smart search and categorization.',
      image: recipeImage,
      tags: ['React', 'Database', 'Search', 'UI/UX'],
      categories: ['web'],
      featured: false,
      links: {
        github: '#',
        demo: '#'
      },
      fullDescription: 'Recipe discovery and management platform with advanced search, smart categorization by cuisine/difficulty, and community sharing features.'
    },
    {
      id: 9,
      title: 'AI Elderly Companion',
      description: 'Healthcare mobile app for seniors featuring AI companionship, health monitoring, and IoT integration.',
      image: elderlyImage,
      tags: ['Flutter', 'Healthcare', 'AI', 'IoT'],
      categories: ['mobile', 'ai'],
      featured: false,
      links: {
        github: 'https://github.com/Abdullah007bajwa/Elderly_Care_Companion',
        demo: 'https://github.com/Abdullah007bajwa/Elderly_Care_Companion'
      },
      fullDescription: 'Compassionate healthcare app for senior care. Features AI chatbot companion for daily interaction, health metrics monitoring, emergency alerts, and drone-assisted emergency response integration.'
    },
    {
      id: 10,
      title: 'Workout Video Classifier',
      description: 'Deep learning model for real-time exercise detection and movement classification from video.',
      image: workoutImage,
      tags: ['Computer Vision', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      categories: ['ai'],
      featured: true,
      links: {
        github: 'https://github.com/Abdullah007bajwa/WorkoutVideoAnalyzer',
        demo: '#'
      },
      fullDescription: 'Advanced computer vision system analyzing workout videos in real-time using CNNs and temporal analysis. Automatically detects and classifies exercise movements with pose estimation and frame-by-frame analysis.',
      challenges: [
        'Real-time 30fps processing',
        'Invariance to lighting and angles',
        'Accurate pose skeleton detection'
      ],
      outcomes: [
        '95% classification accuracy',
        '30 FPS real-time performance',
        '60% reduction in manual annotation'
      ]
    },
    {
      id: 11,
      title: 'Stock Pattern Predictor',
      description: 'LSTM-based financial forecasting model for stock trend analysis with attention mechanisms.',
      image: stockImage,
      tags: ['LSTM', 'Time Series', 'PyTorch', 'Technical Analysis'],
      categories: ['ai'],
      featured: true,
      links: {
        github: 'https://github.com/Abdullah007bajwa/Advanced-Stock-Pattern-Prediction-using-LSTM-with-Attention-Mechanism-in-TensorFlow',
        demo: '#'
      },
      fullDescription: 'Sophisticated LSTM network with attention mechanisms for stock market prediction. Processes historical data with 100+ technical indicators and sentiment analysis to forecast price trends with high accuracy.',
      challenges: [
        'Managing market volatility',
        'Feature engineering for temporal data',
        'Preventing model overfitting'
      ],
      outcomes: [
        '78% prediction accuracy',
        '35% reduced risk exposure',
        'Consistent positive returns'
      ]
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const categories = ['all', 'ai', 'mobile', 'web', 'framework'];

  const toggleCategory = (category: string) => {
    if (category === 'all') {
      setFilters([]);
    } else {
      setFilters(prev =>
        prev.includes(category)
          ? prev.filter(cat => cat !== category)
          : [...prev, category]
      );
    }
  };

  const filteredProjects = filters.length === 0
    ? projects
    : projects.filter(project => {
        const projectCategories = project.categories || [];
        return filters.some(filter => projectCategories.includes(filter));
      });

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

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
          {categories.map((category) => {
            const isActive = category === 'all' 
              ? filters.length === 0 
              : filters.includes(category);
            
            return (
              <Button
                key={category}
                variant={isActive ? 'default' : 'outline'}
                onClick={() => toggleCategory(category)}
                className={`capitalize px-6 py-2 transition-all ${
                  isActive 
                    ? 'bg-gradient-primary text-white shadow-primary' 
                    : 'hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </Button>
            );
          })}
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
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 group-hover:scale-110 transition-transform duration-500"
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
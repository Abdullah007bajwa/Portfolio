import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Brain, 
  Eye, 
  Smartphone, 
  Zap,
  GraduationCap,
  Briefcase,
  Award
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'LLMs', 'Transformers', 'LSTM', 'NLP', 'LangGraph', 'Agents']
    },
    {
      category: 'Computer Vision',
      icon: Eye,
      skills: ['OpenCV', 'Object Detection', 'Pose Estimation', 'Image Classification', 'Real-time Processing']
    },
    {
      category: 'Frontend',
      icon: Code2,
      skills: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Shadcn/UI', 'Performance Optimization']
    },
    {
      category: 'Backend & Databases',
      icon: Briefcase,
      skills: ['FastAPI', 'Node.js', 'Django', 'PostgreSQL', 'Redis', 'WebSocket', 'REST APIs']
    },
    {
      category: 'DevOps & Cloud',
      icon: Zap,
      skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS S3', 'Azure', 'Production Deployment']
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      skills: ['Flutter', 'React Native', 'Cross-platform', 'Responsive Design', 'iOS/Android']
    },
    {
      category: 'Languages',
      icon: Code2,
      skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'SQL', 'HTML/CSS']
    }
  ];

  const experience = [
    {
      title: 'Full-Stack AI Engineer',
      company: 'Freelance & Open Source',
      period: '2022 – Present',
      description: 'Architected and deployed 10+ production systems: VertexHub (100+ concurrent users), Inceptra framework, computer vision models (95% accuracy), stock predictors (78% accuracy). Specialized in real-time systems, scalability, and enterprise-grade deployments.'
    },
    {
      title: 'AI/ML Specialist',
      company: 'Independent Innovation',
      period: '2021 – Present',
      description: 'Pioneered intelligent systems: LLM agents, autonomous workflows, video analysis pipelines. Delivered end-to-end solutions from model training to production deployment with focus on optimization and performance.'
    }
  ];


  const education = [
    {
      degree: 'BSc in Artificial Intelligence',
      institution: 'University of Management and Technology (UMT)',
      institutionLink: 'https://www.umt.edu.pk/',
      period: '2021 – 2025',
      description: 'Specialized in AI, machine learning, deep learning, and intelligent systems. Completed coursework in neural networks, NLP, computer vision, and reinforcement learning.'
    }
  ];


  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm <strong className="text-primary">Abdullah Bajwa</strong>, an AI Specialist & Full-Stack Developer 
            from Lahore, Pakistan. Passionate about building intelligent systems that solve real-world problems. 
            Expertise in AI/ML, computer vision, enterprise web platforms, and scalable backend architectures.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50">
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card 
                  key={skillGroup.category} 
                  className="hover-lift bg-gradient-card border-border/50 hover:border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <skillGroup.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="animate-fade-in">
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card 
                  key={index} 
                  className="hover-lift bg-gradient-card border-border/50 hover:border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="font-semibold text-xl">{exp.title}</h3>
                          <Badge variant="outline" className="border-primary/20 text-primary w-fit">
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-primary/80 font-medium mb-3">{exp.company}</p>
                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="animate-fade-in">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="hover-lift bg-gradient-card border-border/50 hover:border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-secondary/10 mt-1">
                        <GraduationCap className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="font-semibold text-xl">{edu.degree}</h3>
                          <Badge variant="outline" className="border-secondary/20 text-secondary w-fit">
                            {edu.period}
                          </Badge>
                        </div>
                        <p className="text-secondary/80 font-medium mb-3">{edu.institution}</p>
                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
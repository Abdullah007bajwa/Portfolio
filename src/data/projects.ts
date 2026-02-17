export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  icon?: string;
  altText?: string;
  fullDescription?: string;
  challenges?: string[];
  outcomes?: string[];
  links?: { github?: string; demo?: string };
}

export const projects: Project[] = [
  {
    id: "vertexhub",
    title: "VertexHub – Enterprise Collaboration Platform",
    description:
      "Production-ready unified platform combining Slack messaging, Jira ticketing, and advanced project management in one cost-effective solution.",
    image: "/Vertex.png",
    link: "https://slack-clone-t1mc.onrender.com/",
    tags: ["React", "TypeScript", "FastAPI", "WebSocket", "Redis", "PostgreSQL"],
    altText: "Abdullah VertexHub Enterprise Collaboration Platform Full Stack Development | Neural Nest Portfolio",
    links: {
      github: "https://slack-clone-t1mc.onrender.com/",
      demo: "https://slack-clone-t1mc.onrender.com/",
    },
    fullDescription:
      "Enterprise-grade full-stack collaboration platform replacing Slack + Jira subscriptions.",
    challenges: [
      "Real-time bidirectional WebSocket communication at scale",
      "Complex state synchronization across 100+ concurrent users",
    ],
    outcomes: [
      "Sub-100ms message delivery with <50ms latency",
      "100+ concurrent user support with connection pooling",
    ],
  },
  {
    id: "cuddly",
    title: "Cuddly Fortnight – AI Career Assistant",
    description:
      "AI-powered career guidance tool providing personalized paths, skill recommendations, and learning resources.",
    image: "/Cuddly.png",
    link: "https://cuddly-fortnight-o8t6.onrender.com/",
    tags: ["React", "LLM", "AI Agent", "Express.js"],
    altText: "Abdullah Cuddly Fortnight AI Career Assistant Application | Multi-Platform Full-Stack Project",
    links: {
      github: "https://github.com/Abdullah007bajwa/cuddly-fortnight",
      demo: "https://cuddly-fortnight-o8t6.onrender.com/",
    },
  },
  {
    id: "inceptra",
    title: "Inceptra: Autonomous Agent Framework",
    description:
      "Open-source TypeScript framework for building modular, event-driven AI agents and workflows.",
    image: "/inceptra.png",
    link: "https://frontend-lake-zeta-90.vercel.app/",
    tags: ["Agents", "LangGraph", "Event-Driven", "TypeScript"],
    altText: "Abdullah Inceptra Autonomous Agent Framework RAG Pipeline Architecture | AI Automation Expert",
    links: {
      github: "https://github.com/Abdullah007bajwa/inceptra",
      demo: "https://frontend-lake-zeta-90.vercel.app/",
    },
  },
  {
    id: "sms",
    title: "Screen Monitoring System",
    description:
      "Desktop app for real-time activity tracking, screen monitoring, and performance analytics.",
    image: "/ScreenMS.png",
    link: "https://github.com/Abdullah007bajwa/Screen-Monitoring-System",
    tags: ["Python", "Desktop", "Monitoring", "Real-time"],
    altText: "Abdullah Screen Monitoring System Desktop Application | Computer Vision Multi-Platform Development",
    links: {
      github: "https://github.com/Abdullah007bajwa/Screen-Monitoring-System",
      demo: "https://drive.google.com/file/d/13369RBVlz7uMV3sauz_C7hpdHIjPigId/view",
    },
  },
  {
    id: "workout",
    title: "Workout Video Classifier",
    description:
      "Deep learning model for real-time exercise detection and movement classification from video.",
    image: "/workout.png",
    link: "https://github.com/Abdullah007bajwa/WorkoutVideoAnalyzer",
    tags: ["Computer Vision", "TensorFlow", "OpenCV", "Deep Learning"],
    altText: "Abdullah Workout Video Classifier Machine Learning Expert Computer Vision TensorFlow | Neural Nest",
    links: {
      github: "https://github.com/Abdullah007bajwa/WorkoutVideoAnalyzer",
      demo: "#",
    },
  },
  {
    id: "stock",
    title: "Stock Pattern Predictor",
    description:
      "LSTM-based financial forecasting model for stock trend analysis with attention mechanisms.",
    image: "/Stock.png",
    link: "https://github.com/Abdullah007bajwa/Advanced-Stock-Pattern-Prediction-using-LSTM-with-Attention-Mechanism-in-TensorFlow",
    tags: ["LSTM", "Time Series", "PyTorch", "Technical Analysis"],
    altText: "Abdullah Stock Pattern Predictor Machine Learning AI Model PyTorch TensorFlow | Neural Nest Portfolio",
    links: {
      github: "https://github.com/Abdullah007bajwa/Advanced-Stock-Pattern-Prediction-using-LSTM-with-Attention-Mechanism-in-TensorFlow",
      demo: "#",
    },
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Collaborating with Abdullah was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. His enthusiasm for every facet of development truly stands out.",
    author: "Michael Johnson",
    role: "Director of AlphaStream Technologies",
    avatar: "/placeholder.svg",
  },
  {
    quote:
      "Abdullah's expertise in AI integration transformed our platform completely. His attention to detail and technical prowess are outstanding. Highly recommend for any AI or full-stack project.",
    author: "Sarah Chen",
    role: "CTO at TechCorp",
    avatar: "/placeholder.svg",
  },
  {
    quote:
      "Working with Abdullah on the VertexHub project was seamless. He delivered a production-ready system with real-time features and clear documentation. A true professional.",
    author: "David Park",
    role: "Product Lead",
    avatar: "/placeholder.svg",
  },
];

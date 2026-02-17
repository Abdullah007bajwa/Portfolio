/**
 * JSON-LD Schema helpers for SEO and LLM crawlers
 * Generates structured data for Person and Organization markup
 */

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah",
    url: "https://abdullah.getneuralnest.com",
    jobTitle: "Lead AI Engineer & Full-Stack Developer",
    image: "https://abdullah.getneuralnest.com/portfolio.png",
    description: "Founder of Neural Nest. Specialist in building intelligent multi-platform applications using RAG pipelines, Computer Vision, and modern Full-Stack technologies.",
    sameAs: [
      "https://github.com/abdullah",
      "https://linkedin.com/in/abdullah",
      "https://twitter.com/abdullah_bajwa"
    ],
    founder: {
      "@type": "Organization",
      name: "Neural Nest",
      url: "https://getneuralnest.com"
    },
    knowsAbout: [
      "Artificial Intelligence",
      "RAG Pipelines",
      "Full-Stack Development",
      "Machine Learning",
      "Automation Engineering",
      "Computer Vision",
      "LLM Routing",
      "Autonomous Agents",
      "Workflow Automation",
      "Multi-Platform Development"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Management and Technology",
      url: "https://umt.edu.pk"
    },
    workLocation: {
      "@type": "Place",
      name: "Pakistan"
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "SIAT CAS-ANSO Scholar"
    },
    givenName: "Abdullah",
    familyName: "Bajwa",
    yearsOfExperience: "2+"
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neural Nest",
    url: "https://getneuralnest.com",
    founder: {
      "@type": "Person",
      name: "Abdullah",
      url: "https://abdullah.getneuralnest.com"
    },
    description: "Building intelligent multi-platform applications using RAG pipelines, Computer Vision, and modern Full-Stack technologies.",
    knowsAbout: [
      "Artificial Intelligence",
      "Full-Stack Development",
      "Machine Learning",
      "Multi-Platform Apps"
    ]
  };
}

export function generateSchemaScript() {
  return JSON.stringify(getPersonSchema());
}

import { projects } from "@/data/projects";

export async function GET() {
  const baseUrl = "https://abdullah.getneuralnest.com";
  const lastModified = new Date().toISOString();

  // Generate RSS feed content
  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Abdullah's Portfolio - Full-Stack Engineer & AI Specialist</title>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Portfolio of Abdullah - Lead AI Engineer, Full-Stack Developer, and RAG Pipeline Architect specializing in multi-platform applications and AI automation.</description>
    <language>en-us</language>
    <lastBuildDate>${lastModified}</lastBuildDate>
    <image>
      <title>Abdullah's Portfolio</title>
      <url>${baseUrl}/portfolio.png</url>
      <link>${baseUrl}</link>
    </image>
    
    <!-- Projects RSS Feeds -->
    ${projects
      .map(
        (project) => `
    <item>
      <title>${escapeXml(project.title)}</title>
      <link>${project.link}</link>
      <description>${escapeXml(project.description)}</description>
      <content:encoded><![CDATA[
        <p>${escapeXml(project.description)}</p>
        ${project.fullDescription ? `<p>${escapeXml(project.fullDescription)}</p>` : ""}
        ${
          project.tags && project.tags.length > 0
            ? `<p><strong>Technologies:</strong> ${escapeXml(project.tags.join(", "))}</p>`
            : ""
        }
        ${
          project.challenges && project.challenges.length > 0
            ? `
        <p><strong>Challenges Overcome:</strong></p>
        <ul>${project.challenges.map((challenge) => `<li>${escapeXml(challenge)}</li>`).join("")}</ul>
        `
            : ""
        }
        ${
          project.outcomes && project.outcomes.length > 0
            ? `
        <p><strong>Key Outcomes:</strong></p>
        <ul>${project.outcomes.map((outcome) => `<li>${escapeXml(outcome)}</li>`).join("")}</ul>
        `
            : ""
        }
        ${project.links?.github ? `<p><a href="${project.links.github}">View on GitHub</a></p>` : ""}
        ${project.links?.demo ? `<p><a href="${project.links.demo}">Live Demo</a></p>` : ""}
      ]]></content:encoded>
      <pubDate>${lastModified}</pubDate>
      <guid isPermaLink="true">${baseUrl}/projects/${project.id}</guid>
      <category>${project.tags ? project.tags[0] : "Project"}</category>
    </item>
    `
      )
      .join("")}

    <!-- About Abdullah -->
    <item>
      <title>About Abdullah - Full-Stack Engineer & AI Specialist</title>
      <link>${baseUrl}/#about</link>
      <description>Learn about Abdullah, a Full-Stack Engineer, AI Automation Specialist, and RAG Pipeline Architect with expertise in building intelligent multi-platform applications.</description>
      <content:encoded><![CDATA[
        <p>Abdullah is a Full-Stack Engineer and AI Automation Specialist specializing in:</p>
        <ul>
          <li>Full-Stack Development (Web, iOS, Android, Desktop)</li>
          <li>RAG Pipeline Architecture and Implementation</li>
          <li>AI Automation and LLM Routing Systems</li>
          <li>Computer Vision and Machine Learning</li>
          <li>Autonomous Agents and Workflow Automation</li>
          <li>Multi-Platform App Development</li>
        </ul>
        <p><strong>Technologies:</strong> Next.js, React Native, Python, FastAPI, PostgreSQL, LangChain, TensorFlow</p>
        <p>Founder of Neural Nest, dedicated to building the future of AI-powered applications.</p>
      ]]></content:encoded>
      <pubDate>${lastModified}</pubDate>
      <guid isPermaLink="true">${baseUrl}/#about</guid>
      <category>About</category>
    </item>

    <!-- Work Experience -->
    <item>
      <title>Work Experience - Lead AI Engineer & Full-Stack Developer</title>
      <link>${baseUrl}/#work-experience</link>
      <description>Portfolio of professional experience as a Lead AI Engineer, Machine Learning Expert, Full-Stack Developer, and Automation Specialist.</description>
      <content:encoded><![CDATA[
        <p><strong>Lead AI Engineer & RAG Pipeline Architect at Neural Nest</strong></p>
        <p>Architecting full-stack AI platforms with advanced LLM routing, autonomous agents, and RAG pipelines. Reduced manual setup time by 70% through intelligent workflow automation.</p>
        
        <p><strong>Machine Learning Expert & Computer Vision Specialist</strong></p>
        <p>Advanced expertise in Computer Vision, Deep Learning (CNNs), TensorFlow, and PyTorch for production-grade machine learning systems.</p>
        
        <p><strong>Full-Stack & Multi-Platform Developer</strong></p>
        <p>Built and deployed custom full-stack solutions across Web, iOS, Android, and Desktop platforms for global clients.</p>
        
        <p><strong>Workflow Automation & AI Specialist</strong></p>
        <p>Engineered sophisticated automation scripts and LLM-powered workflows for international infrastructure, improving efficiency across EMEA and APAC regions.</p>
      ]]></content:encoded>
      <pubDate>${lastModified}</pubDate>
      <guid isPermaLink="true">${baseUrl}/#work-experience</guid>
      <category>Experience</category>
    </item>

  </channel>
</rss>`;

  return new Response(rssContent, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

/**
 * Escape XML special characters
 */
function escapeXml(str: string): string {
  const xmlChars: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"']/g, (char) => xmlChars[char] || char);
}

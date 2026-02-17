import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { generateSchemaScript } from "@/lib/schema";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0a0f1e",
};

export const metadata: Metadata = {
  title: "Abdullah | Lead AI Engineer & Full-Stack Developer | Neural Nest",
  description:
    "Founder of Neural Nest. Specialist in building intelligent multi-platform applications using RAG pipelines, Computer Vision, and modern Full-Stack technologies (Next.js, Python, PostgreSQL).",
  keywords: [
    "Abdullah",
    "Full-Stack Engineer",
    "AI Automation Specialist",
    "RAG Pipeline Architect",
    "Machine Learning Expert",
    "Multi-Platform App Developer",
    "Neural Nest",
    "SIAT CAS-ANSO Scholar",
    "AI Engineer",
    "LLM Routing",
    "Autonomous Agents",
    "Computer Vision",
    "Workflow Automation",
  ].join(", "),
  authors: [{ name: "Abdullah" }],
  creator: "Abdullah Bajwa",
  publisher: "Abdullah Bajwa",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://abdullah.getneuralnest.com",
  },
  openGraph: {
    type: "website",
    url: "https://abdullah.getneuralnest.com",
    title: "Abdullah | Lead AI Engineer & Full-Stack Developer | Neural Nest",
    description:
      "Founder of Neural Nest. Specialist in building intelligent multi-platform applications using RAG pipelines, Computer Vision, and modern Full-Stack technologies.",
    siteName: "Abdullah - Portfolio",
    images: [
      {
        url: "https://abdullah.getneuralnest.com/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Neural Nest Portfolio AI Background",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abdullah_bajwa",
    creator: "@abdullah_bajwa",
    title: "Abdullah | Lead AI Engineer & Full-Stack Developer | Neural Nest",
    description:
      "Specialist in AI automation, RAG pipelines, and full-stack development. Founder of Neural Nest.",
    images: ["https://abdullah.getneuralnest.com/portfolio.png"],
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Abdullah - Portfolio",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaScript = generateSchemaScript();

  return (
    <html lang="en" className="dark overflow-x-hidden">
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaScript,
          }}
        />
      </head>
      <body className={`${lato.variable} font-sans antialiased overflow-x-hidden`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

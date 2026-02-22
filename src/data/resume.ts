/** Edit these once; used for LinkedIn and project link redirects. */
const PROFILE_LINKS = {
  linkedin: "https://www.linkedin.com/in/nityasav",
  github: "https://github.com/Nityasav",
  devpost: "https://devpost.com/savnitya?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
} as const;

export const contact = {
  name: "Nitya Savaliya",
  tagline:
    "Breaking through building. Learning through building. Building through breaking. Software Engineer, builder, and explorer.",
  email: "email@nitya.ca",
  linkedin: PROFILE_LINKS.linkedin,
  linkedinLabel: "Nitya Savaliya",
} as const;

export type Experience = {
  role: string;
  company: string;
  location: string;
  dateRange: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Clover Labs",
    location: "Remote",
    dateRange: "Jan 2026 – Present",
    highlights: [
      "Key member of the fastest-growing company in Canada, reaching $8MM ARR, acquiring 3 companies, and automating the future of growth in less than 6 months",
      "Successfully driving growth as the lead engineer using Next.js, React, and TypeScript for the primary SEO platform used by key clients including Kalshi, GPTZero, Paraform, and others",
    ],
  },
  {
    role: "Vice President of Technology",
    company: "JA",
    location: "Ajax, Ontario",
    dateRange: "Nov 2022 – Present",
    highlights: [
      "Strategically started as technology member and earned executive role in JA over the last 4 years, navigating a balance of entrepreneurship and technology",
      "Successfully contributed and led the technology department, resulting in the company's online growth",
      "Developed an AI chatbot to promote corporate social responsibility (CSR) in pedestrian and driving safety through Botpress",
    ],
  },
  {
    role: "Co-founder & CTO",
    company: "Antifragility Labs",
    location: "Remote",
    dateRange: "Sept 2025 – Dec 2025",
    highlights: [
      "Co-founded the company and led technical strategy from MVP to production, now acquired at a six-figure valuation by Clover Labs",
      "SEO, GEO platform and agency providing consulting to 7 and 8-figure businesses from NASDAQ, Y Combinator, etc., to drive first page indexing and improve impressions by ~200%, with some ranked on Google's first page",
      "Services delivered through an AI product that generates SEO blogs with primary and secondary keywords, including relevant images and hyperlinks, fully automated",
    ],
  },
  {
    role: "Intern",
    company: "1855",
    location: "Whitby, Ontario",
    dateRange: "July 2025 – August 2025",
    highlights: [
      "Collaborating with startups and local businesses to provide technical support and client-facing assistance",
      "Managing AI-powered tools and front-end solutions across multiple ventures to improve business efficiency",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Trace",
    location: "Remote",
    dateRange: "June 2025 – August 2025",
    highlights: [
      "Engineered a backend service that compares sneaker resale prices between StockX and GOAT in real-time",
      "Built scalable APIs with TypeScript, Bun, and Drizzle ORM, while leveraging PostgreSQL databases and Ngrok",
    ],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  stack?: string;
  links: ProjectLink[];
  imagePlaceholderKey: string;
};

export const projects: Project[] = [
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis",
    shortDescription: "NLP-based sentiment analysis using VADER, RoBERTa, and Transformers.",
    stack: "VADER, RoBERTa, Transformers",
    links: [
      { label: "Article", href: "https://medium.com/@nityasav/enhancing-review-efficiency-through-sentiment-analysis-a-comparison-of-vader-and-roberta-c6920c9946f8" },
      { label: "Github", href: "https://github.com/Nityasav/SentimentAnalysisAmazon" },
    ],
    imagePlaceholderKey: "project-sentiment-analysis",
  },
  {
    id: "text-summarizer",
    title: "Text Summarizer",
    shortDescription: "Automated text summarization with BeautifulSoup and transformer pipelines.",
    stack: "BeautifulSoup, transformers, pipelines",
    links: [
      { label: "Article", href: "https://medium.com/@nityasav/saving-time-with-ai-building-a-text-summarizer-using-transformers-1d9888081889" },
      { label: "Github", href: "https://github.com/Nityasav/Textsummarizer" },
    ],
    imagePlaceholderKey: "project-text-summarizer",
  },
  {
    id: "news-digestor",
    title: "Personalized News Digestor",
    shortDescription: "Personalized news aggregation and summarization.",
    stack: "News API, requests, pipelines, personalization",
    links: [
      { label: "Article", href: "https://medium.com/@nityasav/ever-since-i-was-a-kid-i-have-always-been-attached-to-the-ever-changing-world-where-active-wars-824edbd6ffc5" },
      { label: "Github", href: "https://github.com/Nityasav/PersonalizedNewsDigestor" },
    ],
    imagePlaceholderKey: "project-news-digestor",
  },
  {
    id: "therapeigh",
    title: "Therapeigh",
    shortDescription: "Hackathon project — therapy AI chatbot (satirical wrong advice).",
    stack: "Hackathon",
    links: [
      { label: "Github", href: "https://github.com/Nityasav/thera-buddy-main" },
      { label: "Deck", href: "https://docs.google.com/presentation/d/12THspqR1iqiQOVjlNwVvRMvD6ZMSEmxNipcN1AcsbxI/edit?usp=sharing" },
    ],
    imagePlaceholderKey: "project-therapeigh",
  },
  {
    id: "hackbuddy",
    title: "Hackbuddy",
    shortDescription: "Superconnector for hackathon teams through a voice AI agent.",
    stack: "Hackathon",
    links: [
      { label: "Github", href: "https://github.com/Nityasav/hackbuddy" },
      { label: "Devpost", href: "https://devpost.com/software/hackbuddy-dxp4fa" },
    ],
    imagePlaceholderKey: "project-hackbuddy",
  },
  {
    id: "konnect",
    title: "konnect",
    shortDescription: "Helping people connect by combining Pokémon Go and LinkedIn.",
    stack: "Hackathon",
    links: [
      { label: "Devpost", href: "https://devpost.com/software/konnect-uqfmc3" },
      { label: "Github", href: "https://github.com/Nityasav/konnect" },
    ],
    imagePlaceholderKey: "project-konnect",
  },
  {
    id: "venturly",
    title: "Venturly",
    shortDescription: "TKS Startup — multiple workflow automations through AI agents.",
    stack: "TKS Startup",
    links: [
      { label: "venturly.ca", href: "https://venturly.ca" },
      { label: "Masterplan", href: "https://medium.com/@nityasav/masterplan-venturly-3fa98e25d5bb" },
    ],
    imagePlaceholderKey: "project-venturly",
  },
  {
    id: "samsung-proposal",
    title: "Samsung Executive Proposal",
    shortDescription: "1st place in TKS International Samsung Challenge out of ~100 teams. Executive-level proposal for Samsung.",
    stack: "TKS Challenge",
    links: [
      { label: "Deck", href: "https://docs.google.com/presentation/d/1Zlzny-Ez2OgGBhXMd_LoZtWCb4vl9bEW-05RnB1ipsc/edit?usp=sharing" },
    ],
    imagePlaceholderKey: "project-samsung-proposal",
  },
  {
    id: "others",
    title: "Others",
    shortDescription:
      "Deep Dive into Ray Tracing and AI, Ikea Executive Proposal, Hypnosis Horror Game UE5, Discord Movie Bot, Inventory tracking AI Agent.",
    stack: "Various",
    links: [],
    imagePlaceholderKey: "project-others",
  },
];

export type EducationEntry = {
  name: string;
  detail: string;
  dateRange: string;
  bullets?: string[];
};

export const education: EducationEntry[] = [
  {
    name: "Sinclair Secondary School",
    detail: "Will obtain OSSD in 2026",
    dateRange: "Sept 2022 – Present",
  },
  {
    name: "The Knowledge Society – Velocity",
    detail: "Top global accelerator for high-achieving teens in technology and innovation",
    dateRange: "Sept 2024 – June 2025",
    bullets: [
      "Selected for TKS's Velocity program, an accelerated track for ~ the top 7% of TKS students",
    ],
  },
];

export const awardsAndClubs: string[] = [
  "Honors Student",
  "Pascal Certification of Distinction",
  "CSMC Certification of Distinction",
  "Top 10 Regionals Overall, Roleplay ETDM DECA",
  "Company of the Year JA",
  "Battle of the Ads – 1st Place JA",
  "Garry and Joanne Reamey Family Award JA",
  "Attendance Award (100% Attendance) – 2 years JA",
  "Top 30 out of 172 Teams in IKEA Challenge TKS",
  "1st place in TKS International Samsung Challenge out of ~100 teams",
  "Chess Club",
  "SHSM (Graduation with Majors in Business)",
  "Winner for Best Pitch in Hack United for konnect",
  "1st Place JA Best Brand Award",
];

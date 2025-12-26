import { SectionTitle } from "./SectionTitle";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "DenLabs",
    status: "main" as const,
    description: "Onchain tools & mini-products laboratory. The main project.",
    tags: ["Tools", "Treasury", "Identity"],
    links: [
      { type: "demo" as const, url: "https://denlabs.vercel.app/" },
      { type: "repo" as const, url: "https://github.com/den-labs/denlabs" },
    ],
    isMain: true,
  },
  {
    title: "ModeSpray",
    status: "mvp" as const,
    description: "Token spray distribution tool for Mode Network.",
    tags: ["Spray", "Mode", "Distribution"],
    links: [
      { type: "x" as const, url: "https://x.com/ModeSpray" },
      { type: "repo" as const, url: "https://github.com/wolfcito/mode-spray" },
    ],
  },
  {
    title: "PrivyCredit",
    status: "paused" as const,
    description: "Hackathon MVP for privacy-preserving credit scoring.",
    tags: ["Privacy", "Credit", "ZK"],
    links: [
      { type: "x" as const, url: "https://x.com/privyCredit" },
      { type: "repo" as const, url: "https://github.com/den-labs/privycredit" },
    ],
  },
  {
    title: "Colombia-Blockchain",
    status: "collabs" as const,
    description: "Community-driven blockchain education and collaboration.",
    tags: ["Community", "Education", "Latam"],
    links: [
      { type: "repo" as const, url: "https://github.com/Colombia-Blockchain" },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section className="py-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

import { SectionTitle } from "./SectionTitle";
import { ContentCard } from "./ContentCard";
import { Youtube, Podcast, PenLine } from "lucide-react";

const content = [
  {
    title: "YouTube",
    description: "Tutorials, demos & web3 content.",
    url: "https://www.youtube.com/@akawolfcito",
    icon: <Youtube className="w-4 h-4" />,
  },
  {
    title: "Podcast",
    description: "Conversations about web3 & building.",
    url: "https://open.spotify.com/show/03BmsK22qi4tspI6SQvWDf?si=32037480706d49b4&nd=1&dlsi=c5566f53b67244c9",
    icon: <Podcast className="w-4 h-4" />,
  },
  {
    title: "Writing",
    description: "Essays & deep dives on Paragraph.",
    url: "https://paragraph.com/@wolfcito-2",
    icon: <PenLine className="w-4 h-4" />,
  },
];

export function ContentSection() {
  return (
    <section className="py-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <SectionTitle>Content</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {content.map((item) => (
          <ContentCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

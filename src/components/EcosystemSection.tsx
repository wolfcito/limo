import { SectionTitle } from "./SectionTitle";
import { EcosystemChip } from "./EcosystemChip";

const ecosystems = [
  { name: "WalletConnect", url: "https://walletconnect.com" },
  { name: "Alchemy", url: "https://www.alchemy.com" },
  { name: "Avalanche", url: "https://www.avax.network" },
];

export function EcosystemSection() {
  return (
    <section className="py-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <SectionTitle>Ecosystem</SectionTitle>
      <p className="text-sm text-muted-foreground mb-4">
        Built with and around these ecosystems (selected).
      </p>
      <div className="flex flex-wrap gap-2">
        {ecosystems.map((ecosystem) => (
          <EcosystemChip key={ecosystem.name} {...ecosystem} />
        ))}
      </div>
    </section>
  );
}

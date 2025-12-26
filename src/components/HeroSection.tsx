import { Button } from './ui/button'
import { Github, ExternalLink, MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="text-center pt-12 pb-8 animate-slide-up">
      {/* Avatar with Banner Background */}
      <div className="relative mx-auto mb-6">
        {/* Banner Background */}
        <div className="absolute -inset-x-32 -inset-y-16 flex items-center justify-center opacity-20 blur-sm">
          <img
            src="/banner.png"
            alt="Background Banner"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Avatar */}
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-transparent animate-pulse-glow" />
          <div className="relative w-24 h-24 rounded-full border-2 border-glass-border overflow-hidden">
            <img
              src="/avatar.png"
              alt="Wolfcito Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name & Handle */}
      <h1 className="text-2xl font-bold text-foreground mb-1">Wolfcito</h1>
      <p className="text-muted-foreground text-sm mb-2">@akawolfcito</p>

      {/* Location */}
      <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
        <MapPin className="w-3.5 h-3.5" />
        <span>Superchain — Colombia</span>
      </div>

      {/* Headline */}
      <p className="text-lg font-medium text-foreground mb-2 px-4">
        Building DenLabs: onchain tools & mini-products.
      </p>

      {/* Subline */}
      <p className="text-sm text-muted-foreground mb-6 px-4 max-w-md mx-auto">
        Spray · identity · treasury rails · x402 / ERC-8004 experiments.
      </p>

      {/* CTA Buttons */}
      <div className="grid grid-cols-2 gap-3 px-4 max-w-sm mx-auto">
        <Button asChild className="w-full">
          <a
            href="https://x.com/akawolfcito"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Profile
          </a>
        </Button>

        <Button asChild className="w-full">
          <a
            href="https://github.com/wolfcito"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </Button>

        <Button variant="outline" asChild className="w-full">
          <a
            href="https://denlabs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            DenLabs
          </a>
        </Button>
      </div>

      {/* CTA Microcopy */}
      <p className="text-xs text-muted-foreground mt-8 animate-bounce">
        Start here ↓
      </p>
    </section>
  )
}

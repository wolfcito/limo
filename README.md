# akawolfcito.eth.limo

Personal portfolio website for Wolfcito (@akawolfcito) — Web3 Builder & DenLabs Founder.

## About

Building onchain tools & mini-products at DenLabs. Focused on spray, identity, treasury rails, and x402 / ERC-8004 experiments on the Superchain.

**Location**: Colombia 🇨🇴
**Ecosystem**: Optimism Superchain

## Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **UI Library**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod

## Development

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/wolfcito/akawolfcito.eth.limo.git

# Navigate to project directory
cd akawolfcito.eth.limo

# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev
```

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run build:dev  # Build in development mode
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── HeroSection.tsx  # Hero with avatar and social links
│   ├── NowSection.tsx   # Current activities
│   ├── ProjectsSection.tsx
│   ├── EcosystemSection.tsx
│   ├── ContentSection.tsx
│   └── Footer.tsx
├── pages/
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── main.tsx            # Application entry point
```

## Features

- ✨ Modern, minimal design with glass-morphism aesthetics
- 🎨 Custom avatar and banner integration
- 📱 Fully responsive (mobile-first)
- 🚀 Fast page loads with Vite
- 🎯 Type-safe with TypeScript
- ♿ Accessible UI components via Radix UI
- 🌓 Theme support with CSS variables

## Deployment

The site can be deployed to any static hosting service:

- Vercel (recommended)
- Netlify
- Cloudflare Pages
- GitHub Pages
- IPFS/ENS for decentralized hosting

## Links

- **Portfolio**: [akawolfcito.eth.limo](https://akawolfcito.eth.limo)
- **DenLabs**: [denlabs.vercel.app](https://denlabs.vercel.app)
- **GitHub**: [@wolfcito](https://github.com/wolfcito)
- **X/Twitter**: [@akawolfcito](https://x.com/akawolfcito)

## License

MIT License - feel free to use this as a template for your own portfolio.

---

**Built with** ❤️ **by Wolfcito**

# Vrosk Energies — Modern Website Redesign & Infrastructure

[![Astro](https://img.shields.io/badge/Astro-5.0-BC52EE.svg?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Design](https://img.shields.io/badge/Design_Language-Outgriid-4DFFB0.svg?style=flat)](https://outgriid.webflow.io/)

A complete, high-performance corporate redesign of the **[Vrosk Energies](https://vroskenergies.com/)** corporate website, meticulously engineered using **Astro**, **TypeScript**, and **Custom CSS3**, styled with the editorial luxury and clean grid architecture inspired by the **Outgriid** design reference.

---

## ⚡ Overview & Strategic Positioning

**Vrosk Energies Limited** is an integrated Pan-African energy enterprise providing physical petroleum commodities trading, downstream storage logistics, clean gas commercialization (LPG, CNG, LNG), and capital market risk structuring across West Africa and international markets.

### Key Highlights
- **Authentic Brand & Content Audit**: Preserved 100% of the company's real content, executive profiles, office directory, and business lines.
- **Outgriid Visual Aesthetics**: Editorial serif headings (`Lora`), modern geometric body (`Geist`), and high-tech monospace labels (`Geist Mono`) paired with luminous mint (`#4dffb0`) and obsidian dark card surfaces (`#161515`).
- **Full Route Coverage**: Complete implementation of all 20 corporate pages, articles, and partner profiles.
- **Micro-Interactions**: Dynamic number counter animations, interactive executive team profile modals, sticky frosted-glass navigation, and responsive mobile navigation drawers.

---

## 🛠️ Technology Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation for sub-millisecond page loads)
- **Language**: TypeScript & HTML5
- **Styling**: Custom CSS3 design tokens (`/src/styles/global.css`) without bloated utility frameworks
- **Typography**: Google Fonts (`Lora`, `Geist`, `Geist Mono`)
- **Assets**: Authentic high-resolution logos, refinery photography, and executive portraits stored in `/public/assets/`

---

## 🧭 Page Architecture & Routes

| Route | Description |
| :--- | :--- |
| `/` | **Homepage** — Hero bento showcase, metrics counter, services grid, roadmap matrix, leadership, and partner ecosystem |
| `/our-company-overview` (or `/about`) | Corporate vision, mission, founding heritage, and core drivers |
| `/our-core-values` | The V-R-O-S-K framework: Vision, Resourceful, Optimize, Safety, Knowledgeable |
| `/our-competence` | The 10 core commercial, trading, and logistics competencies |
| `/our-business` | Business model, value chain integration, and cost-efficiency |
| `/our-operation` | Five operational pillars: procurement, storage, partnerships, and market intelligence |
| `/our-products-services` | Comprehensive catalog across 8 petroleum verticals, gas solutions, and derivatives |
| `/our-roadmap` | Strategic growth plan: Where We Are (Phase 1) vs Where We Are Going (Phase 2 & 3) |
| `/management-team` | Complete executive profiles with interactive modal biographies |
| `/sustainability` | Sustainability overview: HSE, CSR, and environmental governance |
| `/health-safety-environment` | HSE policy statement, ISO 9001 alignment, UK HSE HS(G) guidelines, zero-incident target |
| `/community-relations-csr` | Community equity, local content employment, and youth education programs |
| `/environmental-risks` | Environmental risk mitigation, spill containment, and clean gas adoption |
| `/krosk-partners-limited` | Capital markets partner profile (inter-dealer fixed income brokerage) |
| `/zrosk` | Asset management partner profile (SEC-licensed alternative manager, $150M+ AUM) |
| `/trosk` | Dubai-based global sponsor profile ($200M+ portfolio backing) |
| `/news-and-insights` | Market intelligence briefing library and articles index |
| `/the-future-of-sustainable-energy-trends-and-innovations` | Full article: Sustainable energy innovations, solar, wind, and hydrogen |
| `/the-latest-oil-news-in-nigeria-trends-and-developments` | Full article: Nigerian crude production targets, PIA policies, and refining |
| `/the-role-of-ai-in-the-oil-and-gas-industry` | Full article: AI exploration, predictive maintenance, and cargo risk modeling |
| `/contact-us` | Direct inquiry form, floor trading schedule, and Lekki Phase 1 office directory |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/amazinernest/vroskenergies.git

# Navigate into project directory
cd vroskenergies

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Production Build

```bash
# Build static site to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🏢 Corporate Headquarters

**Vrosk Energies Limited**  
6 Tunde Fisayo Street, Off Ayinde Akinmade,  
Lekki Phase 1, Lagos, Nigeria  
**Email**: [info@vroskenergies.com](mailto:info@vroskenergies.com)  
**Website**: [https://vroskenergies.com](https://vroskenergies.com)

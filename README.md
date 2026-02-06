

# KAT Group Website v2

A modern React/TypeScript SPA for KAT Group — an industrial manpower and technical services company headquartered in Sharjah, UAE with regional operations in Dubai.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Routing | React Router (HashRouter) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| AI Service | Google GenAI (Gemini) |
| Build Tool | Vite |

---

## Directory Structure

```
/Users/jrp/codes/kat_group_website_v2/
├── components/
│   ├── ui/                    # Primitive components (Button, Badge, SectionHeader)
│   ├── Navbar.tsx             # Responsive nav with mobile menu & search
│   ├── Hero.tsx               # 4-slide video carousel hero
│   ├── AboutSection.tsx       # Company intro with animated values grid
│   ├── ServicesGrid.tsx       # Service cards with hover effects
│   ├── ExpertiseGrid.tsx      # 6 industry sector cards
│   ├── Portfolio.tsx          # Homepage portfolio preview
│   ├── Footer.tsx             # Site footer with contact info
│   ├── AIAdvisor.tsx          # Floating AI chat widget (Gemini-powered)
│   ├── ServiceDetailPage.tsx  # Individual service detail view
│   ├── PortfolioPage.tsx      # Portfolio grid component
│   └── SearchModal.tsx        # Global search overlay
├── pages/
│   ├── AboutPage.tsx          # Full about page with philosophy grid
│   ├── ContactPage.tsx        # Contact form with inquiry fields
│   ├── ExpertisePage.tsx      # Detailed sectors breakdown
│   ├── ServicesPage.tsx       # All services listing + methodology
│   ├── PortfolioPage.tsx      # Filterable portfolio grid
│   ├── PortfolioDetailPage.tsx # Case study with stats & gallery
│   ├── MediaPage.tsx          # Blog/press listing with featured article
│   ├── ArticleDetailPage.tsx  # Individual article with sidebar
│   └── SearchPage.tsx         # Search results page
├── services/
│   └── geminiService.ts       # AI chat integration with knowledge base
├── constants.tsx              # All content data (services, portfolio, blog)
├── types.ts                   # TypeScript interfaces & enums
└── App.tsx                    # Root router, loader & layout
```

---

## Routing Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Hero → About → Services → Expertise → Portfolio → CTA |
| `/about` | AboutPage | Company legacy, philosophy grid, strategic presence |
| `/expertise` | ExpertisePage | 6 vertical specializations with technical specs |
| `/services` | ServicesPage | Capabilities hub + KAT Method section |
| `/services/:slug` | ServiceDetailPage | Individual service with features & benefits |
| `/portfolio` | PortfolioPage | Filterable museum-style project grid |
| `/portfolio/:id` | PortfolioDetailPage | Case study with stats, challenge, solution, gallery |
| `/media` | MediaPage | Editorial blog hub with featured story |
| `/media/:id` | ArticleDetailPage | Full article with quote blocks & related reads |
| `/contact` | ContactPage | Project inquiry form + contact cards |

---

## Key Features

### Navigation & UX
- **Responsive Navbar**: Desktop links + mobile hamburger with animated overlay
- **Global Search**: Modal searches across services, portfolio, articles, and sectors
- **Page Loader**: Animated loader with rotating status messages (2.2s duration)
- **Smooth Animations**: Framer Motion for scroll-triggered reveals, staggered grids, route transitions

### Hero Section
- 4-slide video carousel (12s auto-advance with progress bars)
- Animated text gradients and parallax effects
- Glass-morphism badges and CTAs

### AI Chat Widget (`AIAdvisor.tsx`)
- Floating chat bubble powered by Google Gemini AI
- Knowledge base grounded in website content (services, portfolio, blog)
- Quote request form flow for lead generation
- Suggested question quick-actions

### Content Sections
- **About**: Mission, 4 core values (Precision, Scalability, Commitment, Quality), company stats (2023 founded, 50k+ deployed)
- **Services**: 2 main categories — Technical Services & On-Demand Labor Supply
- **Expertise**: 6 sectors — Oil & Gas, Infrastructure, Healthcare, Manufacturing, Energy, Logistics
- **Portfolio**: Case studies with challenge/solution/impact format, stats cards, image galleries
- **Media**: Blog articles with categories (Technology, Industrial Blog, Press Release, Corporate)

---

## Design System

### Colors
- **Primary**: `#0a1d4d` (deep navy)
- **Accent**: `#3b82f6` (blue-500)
- **Backgrounds**: White, Slate-50, Navy gradients

### Typography
- **Headings**: `font-heading` custom black weight, tracking-tighter
- **UI Labels**: Uppercase, tracking-widest, 9px-11px for premium feel

### Animation Patterns
- `whileInView` for scroll-triggered content reveals
- `staggerChildren` for grid item sequencing
- `AnimatePresence` for smooth route/page transitions
- Hover effects with `group-hover` for interactive cards

---

## Environment Variables

Create `.env.local` with:

```
GEMINI_API_KEY=your_google_genai_api_key_here
```

The AI Advisor uses Gemini 2.0 Flash to provide context-aware responses about KAT Group's services and capabilities.

---

## Local Development

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Data Architecture

Content is centralized in `constants.tsx` with these key interfaces:

```typescript
// Service types
enum ServiceType {
  LABOR = 'On-Demand Labor Supply',
  RECRUITMENT = 'Overseas Recruitment',
  HEALTHCARE = 'Healthcare Manpower',
  TECHNICAL = 'Technical Services',
  EQUIPMENT = 'Heavy Equipment Rental',
  TRAVEL = 'Tours & Travel Services'
}

// Content structures
interface ServiceDetail { slug, features[], coreServices[] }
interface PortfolioItem { id, category, fullCaseStudy? { stats[], gallery[] } }
interface Sector { name, icon, technicalSpecs[] }
interface BlogPost { id, category, content[], tags[] }
```

---

## License

© 2026 KAT GROUPS SFZ LLC. All rights reserved.

appinventiv-clone/
├── app/
│   ├── layout.js          # Root layout (imports global CSS, fonts; wraps children)
│   ├── page.js            # Homepage: Imports and renders all sections in order
│   └── globals.css        # Global styles (Tailwind base, resets)
├── components/            # All reusable components
│   ├── Header.js          # Navigation bar
│   ├── Footer.js          # Footer with locations
│   ├── common/            # Shared utilities
│   │   ├── SectionWrapper.js  # Wrapper for consistent section padding/margins (responsive)
│   │   ├── Button.js      # Reusable button (e.g., "Case Study", "Contact")
│   │   ├── Card.js        # Base card for cases, testimonials (with hover/animations)
│   │   └── Grid.js        # Responsive grid layout (for stats, logos, tech)
│   └── sections/          # Homepage-specific sections
│       ├── HeroSection.js # Intro/hero banner
│       ├── TransformingBusinesses.js # Stats section
│       │   └── StatItem.js # Child: Individual stat card
│       ├── CaseStudies.js # Case studies carousel/slider
│       │   └── CaseStudyCard.js # Child: Per case (e.g., Adidas)
│       ├── ClientsLogos.js # Client logos grid
│       │   └── LogoItem.js # Child: Individual logo
│       ├── Testimonials.js # Video testimonials slider
│       │   └── TestimonialVideo.js # Child: Per video with play/mute controls
│       ├── CreateSolutions.js # "We Create New Solutions" section with CTA
│       ├── Partnerships.js # Partnerships logos grid (similar to ClientsLogos)
│       ├── GrowthJourney.js # Awards/accolades section
│       ├── ClientOpinions.js # Additional testimonials/opinions
│       ├── TechCapabilities.js # Tech stack sections
│       │   ├── FrontendTech.js # Child: Frontend languages grid
│       │   ├── BackendTech.js  # Child: Backend
│       │   ├── MobileTech.js   # Child: Mobile
│       │   ├── BigDataTech.js # Child: Big Data
│       │   ├── DatabasesTech.js # Child: Databases
│       │   ├── CloudTech.js    # Child: Cloud DB/Warehouses
│       │   ├── DevOpsTech.js   # Child: DevOps
│       │   ├── ArchitectureTech.js # Child: Architecture patterns
│       │   └── AITech.js       # Child: AI (models, vectors, frameworks, deployment)
│       ├── StrategicPartnerships.js # Strategic partnerships section
│       ├── ExpertsConsultation.js # Consultation form section
│       │   └── ConsultationForm.js # Child: Form with inputs (e.g., 6 + 2 = captcha)
│       └── FAQs.js            # FAQs accordion
│           └── FAQItem.js     # Child: Individual question/answer
├── public/                # Assets: Images, logos, videos (download from site)
│   ├── images/            # Hero bg, client logos, tech icons, etc.
│   └── videos/            # Testimonial videos
├── next.config.js         # Config for images, etc.
└── tailwind.config.js     # Tailwind setup (install next)
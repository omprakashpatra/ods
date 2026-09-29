import { Service, PortfolioItem, Review, QuoteRequest, SupportTicket, ContactEnquiry } from '../types';

export const HERO_IMAGE = '/src/assets/images/ods_hero_workspace_1790699339208.jpg';
export const PORTFOLIO_WEB_IMAGE = '/src/assets/images/ods_portfolio_web_1790699357385.jpg';
export const PORTFOLIO_EXCEL_IMAGE = '/src/assets/images/ods_portfolio_excel_1790699371316.jpg';
export const PORTFOLIO_BRANDING_IMAGE = '/src/assets/images/ods_portfolio_branding_1790699386201.jpg';
export const ABOUT_TEAM_IMAGE = '/src/assets/images/ods_about_teamwork_1790699400345.jpg';

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    name: 'Website Development',
    tagline: 'Fast, responsive, conversion-focused websites that elevate your credibility.',
    shortDescription: 'Professional responsive websites for businesses, portfolios and startups.',
    longDescription: 'We build modern, mobile-friendly websites with clean code, search engine optimization, and fast load speeds. Whether you need a corporate showcase, a high-converting landing page, or a tailored portfolio, ODS delivers turnkey digital web solutions.',
    iconName: 'Globe',
    features: [
      '100% Mobile & Tablet Responsive Architecture',
      'Modern High-Performance Stack (React, Next.js, Vite)',
      'SEO-Optimized Structure with Schema Markup',
      'Clean Contact Forms & Lead Capture Integrations',
      'Secure Deployment & Free SSL Configuration Guidance'
    ],
    deliverables: [
      'Production-ready web application / site code',
      'Custom domain setup & DNS configuration guide',
      'Interactive contact and quotation forms',
      '30-day post-launch technical support'
    ],
    turnaroundTime: '5 – 12 business days',
    startingPrice: 'Custom Quotation (Based on project scope)',
    faqs: [
      {
        question: 'Will my website work properly on mobile phones and tablets?',
        answer: 'Yes, every website we design is thoroughly tested across iOS, Android, tablets, and desktop resolutions down to 320px.'
      },
      {
        question: 'Can you help update an existing website instead of starting from scratch?',
        answer: 'Yes, we can audit, redesign, and improve the speed, responsiveness, and aesthetics of your current website.'
      }
    ]
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    tagline: 'Distinctive visual identities and marketing creatives that leave a lasting impression.',
    shortDescription: 'Logos, social media creatives, banners, posters and business graphics.',
    longDescription: 'Establish visual authority across digital and print touchpoints. From brand logos and stationery to high-impact marketing banners and presentation decks, we craft consistent, aesthetically refined designs tailored to your audience.',
    iconName: 'Palette',
    features: [
      'Vector Logo Design with Comprehensive Brand Guidelines',
      'High-Resolution Social Media Creative Packs (Instagram, LinkedIn, X)',
      'Corporate Stationery (Business Cards, Letterheads, Envelopes)',
      'Marketing Banners, Brochures & Digital Flyers',
      'Exported in AI, SVG, PNG, PDF & WebP formats'
    ],
    deliverables: [
      'Editable vector source files and high-res print PDFs',
      'Social media aspect-ratio templates (1:1, 16:9, 9:16)',
      'Brand style sheet (color codes, typographic hierarchy)',
      'Commercial usage rights included'
    ],
    turnaroundTime: '3 – 6 business days',
    startingPrice: 'Custom Quotation (Clear per-deliverable pricing)',
    faqs: [
      {
        question: 'Do I receive full ownership and source files of the artwork?',
        answer: 'Yes, you receive complete commercial ownership and all editable source files upon final project delivery.'
      },
      {
        question: 'How many design revisions are included?',
        answer: 'Our standard design projects include 2-3 structured revision rounds to ensure the final output matches your vision.'
      }
    ]
  },
  {
    id: 'excel-data',
    name: 'Excel & Data Solutions',
    tagline: 'Transform raw data into clear, automated spreadsheets and executive dashboards.',
    shortDescription: 'Professional Excel formatting, dashboards, reports, formulas and data management.',
    longDescription: 'Tired of messy spreadsheets? We create automated Excel models, intuitive KPI dashboards, dynamic lookup formulas (XLOOKUP, INDEX/MATCH), pivot reports, and clean data consolidation templates that save hours of weekly manual work.',
    iconName: 'BarChart3',
    features: [
      'Interactive Financial & Operational KPI Dashboards',
      'Complex Formula Architecture & Automated Calculators',
      'Data Cleaning, Deduplication & Normalization',
      'Automated Pivot Tables, Slicers & Conditional Formatting',
      'Google Sheets & Microsoft Excel cross-compatibility'
    ],
    deliverables: [
      'Clean, unlocked Excel workbook (.xlsx / .xlsm)',
      'Interactive executive dashboard with dynamic filters',
      'Step-by-step user instruction guide / video walkthrough',
      'Formula reference sheet for team onboarding'
    ],
    turnaroundTime: '2 – 5 business days',
    startingPrice: 'Custom Quotation (Based on complexity)',
    faqs: [
      {
        question: 'Can you work with Google Sheets as well as Microsoft Excel?',
        answer: 'Yes, we build seamlessly in both Microsoft Excel (desktop/Office 365) and Google Sheets with equal proficiency.'
      },
      {
        question: 'Is our company data handled confidentially?',
        answer: 'Absolutely. We sign strict non-disclosure agreements (NDAs) on request and never share proprietary data.'
      }
    ]
  },
  {
    id: 'business-support',
    name: 'Digital Business Support',
    tagline: 'Practical operational support to set up, organize, and run your online presence.',
    shortDescription: 'Digital documentation, business setup assistance and online solutions.',
    longDescription: 'Navigating digital tools can be overwhelming. We provide hands-on assistance setting up business email addresses, Google Workspace, cloud storage structures, client intake flows, and online profiles so your business operates smoothly.',
    iconName: 'Briefcase',
    features: [
      'Google Workspace / Custom Domain Email Setup',
      'Cloud Storage Organization (Drive, OneDrive, Dropbox)',
      'Digital Intake & Onboarding Form Setup',
      'Business Directory & Google Business Profile Setup',
      'Workflow Standardization & SOP Documentation'
    ],
    deliverables: [
      'Fully verified business tools and admin credentials',
      'Written Standard Operating Procedures (SOPs)',
      'Team access configuration with secure permission levels',
      'Direct setup walkthrough and post-setup guidance'
    ],
    turnaroundTime: '3 – 7 business days',
    startingPrice: 'Custom Quotation (Milestone-based)',
    faqs: [
      {
        question: 'Can you help us migrate our emails without losing message history?',
        answer: 'Yes, we assist with domain verification, MX record configuration, and safe email data migration.'
      }
    ]
  },
  {
    id: 'social-media',
    name: 'Social Media Services',
    tagline: 'Consistent, professional social content that keeps your brand top of mind.',
    shortDescription: 'Social media creatives, content support and digital branding.',
    longDescription: 'Build trust with consistent, on-brand social media assets. We design branded monthly post packs, carousel slides, cover banners, and structured content calendars that position your business as a leader in your sector.',
    iconName: 'Share2',
    features: [
      'Branded Post & Story Creatives (Instagram, LinkedIn, Facebook)',
      'Educational Multi-Slide Carousel Design',
      'Channel Header & Banner Standardization',
      'Content Calendar & Posting Schedule Template',
      'Editable Canva or Figma Templates for In-House Reusability'
    ],
    deliverables: [
      'Organized high-res image sets categorized by week',
      'Editable master templates with font and color styles',
      'Curated caption ideas and industry hashtag guide',
      'Re-usable vector graphic badges'
    ],
    turnaroundTime: '4 – 8 business days',
    startingPrice: 'Custom Quotation (Package or single pack)',
    faqs: [
      {
        question: 'Do you manage posting or only provide creatives and schedule?',
        answer: 'We provide the full creative package, scheduling calendar, and copy ready for posting, or can collaborate on direct distribution.'
      }
    ]
  },
  {
    id: 'document-services',
    name: 'Document Services',
    tagline: 'Executive-grade PDF, Word, and document formatting for high-stakes business needs.',
    shortDescription: 'Professional PDF, Word, Excel and business document solutions.',
    longDescription: 'Turn sloppy documents into polished, professional assets. We format company proposals, contracts, service catalogs, user manuals, invoices, and fillable PDF forms with crisp typography, structured grids, and brand consistency.',
    iconName: 'FileText',
    features: [
      'Interactive Fillable PDF Forms with Signature Fields',
      'Executive Word Document Templates with Custom Styles',
      'Service Proposal & Business Pitch Deck Formatting',
      'Document Conversion (Scanned/PDF to Editable Word/Excel)',
      'Print-Ready Layouts with Bleed and Margin Precision'
    ],
    deliverables: [
      'Editable Microsoft Word / InDesign / Docs templates',
      'Protected fillable interactive PDF with form validation',
      'Embedded brand fonts and vector iconography',
      'Print-ready high-resolution CMYK or RGB exports'
    ],
    turnaroundTime: '1 – 3 business days',
    startingPrice: 'Custom Quotation (Per document / bulk tier)',
    faqs: [
      {
        question: 'Can you make PDF forms that calculate totals automatically?',
        answer: 'Yes, we can program fillable PDF forms with automatic calculation scripts for invoice totals, quantities, and taxes.'
      }
    ]
  },
  {
    id: 'ai-solutions',
    name: 'AI Solutions & Automation',
    tagline: 'Smart automation workflows and AI tooling to accelerate team productivity.',
    shortDescription: 'AI-powered content, automation ideas and productivity solutions.',
    longDescription: 'Harness practical AI capabilities without the fluff. We design prompt libraries, automated document summaries, content drafting pipelines, and smart Zapier/Make automations that remove repetitive friction from your daily operations.',
    iconName: 'Cpu',
    features: [
      'Custom Prompt Engineering for In-House Workflows',
      'Zapier / Make Automation Pipelines for Inquiries & Invoicing',
      'AI-Powered Document Processing & Data Extraction',
      'Customer Support Response Templates & Knowledge Bases',
      'Practical AI Tooling Feasibility Consultations'
    ],
    deliverables: [
      'Configured and tested workflow automations',
      'Prompt playbook tailored to your specific industry',
      'Video walkthrough demonstrating end-to-end flow',
      '30-day monitoring and fine-tuning'
    ],
    turnaroundTime: '4 – 10 business days',
    startingPrice: 'Custom Quotation (Scope-driven)',
    faqs: [
      {
        question: 'Do we need technical coding skills to maintain the AI automations?',
        answer: 'No, we build with user-friendly no-code platforms and provide clear visual instructions so anyone on your team can manage them.'
      }
    ]
  },
  {
    id: 'custom-services',
    name: 'Custom Digital Services',
    tagline: 'Tailored digital solutions engineered specifically for your unique requirements.',
    shortDescription: 'Customized solutions based on individual customer requirements.',
    longDescription: 'Have a requirement that doesn’t fit into a standard box? We combine web design, data modeling, creative design, and technical troubleshooting to build custom digital solutions that solve your exact challenge.',
    iconName: 'Sparkles',
    features: [
      'Comprehensive Requirement Scoping & Architecture',
      'Blended Skillsets (Web + Data + Graphic + Documentation)',
      'Flexible Milestone-Based Project Execution',
      'Direct Communication with Senior Solution Architect',
      'Custom Delivery Formats According to Your Specifications'
    ],
    deliverables: [
      'Full custom deliverables agreed in signed scope of work',
      'Detailed project handover documentation',
      'Dedicated post-delivery revision window',
      'Transparent milestone reports'
    ],
    turnaroundTime: 'Custom Timeline',
    startingPrice: 'Custom Quotation (Clear milestone breakdown)',
    faqs: [
      {
        question: 'How do we get started with a custom requirement?',
        answer: 'Simply click "Get Quote", share what you are trying to accomplish, and we will schedule a rapid discovery conversation within 24 hours.'
      }
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Apex Industrial Supply – Corporate Web Platform',
    category: 'Websites',
    shortDescription: 'Modern, high-performance responsive web portal with product inquiry flows.',
    fullDescription: 'Apex required a modern corporate presence to replace their outdated 2014 site. We developed a lightning-fast responsive website with clear product categorization, technical specification downloads, and an interactive quotation request engine.',
    image: PORTFOLIO_WEB_IMAGE,
    deliverables: ['Custom Responsive Web Portal', 'Product Inquiry Engine', 'Search Engine Optimization', 'Speed Optimization (98/100 Lighthouse)'],
    outcome: 'Doubled qualified organic quotation requests in 90 days with sub-second page loads across mobile devices.',
    clientType: 'B2B Distribution & Manufacturing',
    demoNotice: 'Demo showcase project illustrating ODS corporate web development capabilities.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Schema.org']
  },
  {
    id: 'port-2',
    title: 'Executive Financial & Sales BI Dashboard',
    category: 'Excel/Data',
    shortDescription: 'Automated multi-branch KPI reporting workbook with dynamic slicers.',
    fullDescription: 'Consolidated messy monthly CSV dumps from 4 branch offices into a single automated Excel dashboard. Built automated lookup logic, variance calculations, and executive summary charts updated with one-click data paste.',
    image: PORTFOLIO_EXCEL_IMAGE,
    deliverables: ['Automated Excel Workbook', 'Dynamic Pivot Dashboards', 'Error-proof Data Validation', 'SOP Video Walkthrough'],
    outcome: 'Reduced monthly reporting preparation from 14 hours to under 20 minutes with zero formula errors.',
    clientType: 'Commercial Real Estate & Finance',
    demoNotice: 'Sample model demonstrating ODS advanced spreadsheet architecture.',
    technologies: ['Microsoft Excel 365', 'Power Query Logic', 'Dynamic Arrays', 'Data Modeling']
  },
  {
    id: 'port-3',
    title: 'Nova Botanicals – Brand Identity & Packaging Suite',
    category: 'Graphic Design',
    shortDescription: 'Minimalist luxury brand stationery, vector logo, and social creative kit.',
    fullDescription: 'Crafted a timeless visual identity for an emerging wellness and organic skincare brand. Project included primary logo, sub-marks, packaging labels, business stationery, and a 30-post launch creative package.',
    image: PORTFOLIO_BRANDING_IMAGE,
    deliverables: ['Master Vector Logo Files', 'Brand Style Guide (Colors, Typography)', 'Product Label Templates', 'Social Media Launch Pack'],
    outcome: 'Successfully launched retail presence in 12 boutique outlets with consistent visual identity across physical and digital channels.',
    clientType: 'Consumer Brand & Retail',
    demoNotice: 'Curated design sample showcasing ODS visual identity standards.',
    technologies: ['Adobe Illustrator', 'Figma', 'Vector Rendering', 'Print CMYK Setup']
  },
  {
    id: 'port-4',
    title: 'CloudSync SaaS – Landing Page & Conversion Funnel',
    category: 'Websites',
    shortDescription: 'High-converting SaaS product page with interactive feature breakdowns.',
    fullDescription: 'Designed and built an interactive marketing landing page for an enterprise data syncing tool. Focused on clear typography, responsive feature cards, and high-visibility CTA placement.',
    image: PORTFOLIO_WEB_IMAGE,
    deliverables: ['Conversion-Focused Landing Page', 'Interactive Pricing Calculator', 'Mobile-First Layout', 'Analytics Tracking Integration'],
    outcome: 'Increased visitor-to-demo conversion rate by 34% within the first 6 weeks of launch.',
    clientType: 'Tech Startup / SaaS',
    demoNotice: 'Demo project reflecting ODS conversion design standards.',
    technologies: ['TypeScript', 'Tailwind CSS', 'Vite', 'SVG Animations']
  },
  {
    id: 'port-5',
    title: 'FleetLogix – Operational Logistics Dispatch Model',
    category: 'Excel/Data',
    shortDescription: 'Mileage, fuel consumption, and maintenance tracking spreadsheet solution.',
    fullDescription: 'Built a structured spreadsheet system for a 45-vehicle logistics fleet. Features automated alerts for scheduled maintenance, per-mile fuel efficiency graphs, and driver performance summaries.',
    image: PORTFOLIO_EXCEL_IMAGE,
    deliverables: ['Custom Logistics Template', 'Automatic Maintenance Alerts', 'Cost-per-mile KPI Graphs', 'Monthly Export Macro'],
    outcome: 'Identified $18,000 in annual fuel inefficiencies and eliminated late vehicle servicing penalties.',
    clientType: 'Transport & Logistics',
    demoNotice: 'Sample operational tool created by ODS data specialists.',
    technologies: ['Excel Formulas', 'Conditional Formatting', 'Interactive Slicers']
  },
  {
    id: 'port-6',
    title: 'Zenith Legal – Corporate Document & Pitch Deck Suite',
    category: 'Business Solutions',
    shortDescription: 'Polished client intake PDFs, retainers, and executive presentation deck.',
    fullDescription: 'Standardized all client-facing documentation for a boutique commercial advisory firm. Created fillable electronic intake PDFs, branded proposal decks in Word, and PowerPoint presentation masters.',
    image: PORTFOLIO_BRANDING_IMAGE,
    deliverables: ['Interactive Fillable PDF Forms', 'Branded Word Proposal Template', 'Executive Presentation Deck', 'Font & Asset Bundle'],
    outcome: 'Elevated firm presentation standards, leading to faster contract sign-offs with high-value enterprise accounts.',
    clientType: 'Legal & Professional Services',
    demoNotice: 'Sample business documentation showcase by ODS.',
    technologies: ['Adobe Acrobat Pro', 'Microsoft Word Typography', 'Vector Graphic Layouts']
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    customerName: 'Rajesh K. Mehta',
    roleOrCompany: 'Founder, Mehta Logistics',
    serviceId: 'excel-data',
    serviceName: 'Excel & Data Solutions',
    rating: 5,
    reviewText: 'Om Digital Services completely overhauled our operational reporting spreadsheet. What used to take our accounting clerk two full days every month now happens in 15 minutes with their clean formulas and dashboard. Thoroughly professional and transparent.',
    date: '2026-08-14',
    status: 'approved',
    verifiedCustomer: true
  },
  {
    id: 'rev-2',
    customerName: 'Ananya Sharma',
    roleOrCompany: 'Creative Director, Studio Vibe',
    serviceId: 'graphic-design',
    serviceName: 'Graphic Design',
    rating: 5,
    reviewText: 'We needed a fast turnaround for brand collateral and social media launch assets. ODS delivered pristine vector files ahead of deadline. The design sense is modern, clean, and not cluttered. Will definitely work with them again.',
    date: '2026-08-28',
    status: 'approved',
    verifiedCustomer: true
  },
  {
    id: 'rev-3',
    customerName: 'Vikram Sengupta',
    roleOrCompany: 'Director, Sengupta Tech Solutions',
    serviceId: 'web-dev',
    serviceName: 'Website Development',
    rating: 5,
    reviewText: 'Their website development service is top notch. The site loads instantly, looks razor-sharp on mobile phones, and our clients have remarked how clean and trustworthy our business looks now. No hidden charges, just clear communication.',
    date: '2026-09-05',
    status: 'approved',
    verifiedCustomer: true
  },
  {
    id: 'rev-4',
    customerName: 'Priya N. Deshmukh',
    roleOrCompany: 'Owner, Wellness Roots',
    serviceId: 'document-services',
    serviceName: 'Document Services',
    rating: 4,
    reviewText: 'ODS formatted our client intake contracts into fillable PDF documents with digital signature capability. Very convenient for our patients and saved us hours of scanning physical paper.',
    date: '2026-09-12',
    status: 'approved',
    verifiedCustomer: true
  },
  {
    id: 'rev-5',
    customerName: 'Arun Patel',
    roleOrCompany: 'E-commerce Entrepreneur',
    serviceId: 'social-media',
    serviceName: 'Social Media Services',
    rating: 5,
    reviewText: 'The monthly creative pack was well structured with great color balance and cohesive templates. Excellent customer support when we asked for small layout tweaks.',
    date: '2026-09-19',
    status: 'approved',
    verifiedCustomer: true
  }
];

export const PRICING_PACKAGES = [
  {
    id: 'tier-basic',
    name: 'Basic / Starter',
    subtitle: 'For individuals, students, and small requirements',
    badge: 'Popular for Quick Tasks',
    priceDescription: 'Transparent project-based quotation',
    typicalTurnaround: '2 – 4 Business Days',
    features: [
      'Single service focus (e.g. 1-page site, logo design, or spreadsheet)',
      '1 to 2 rounds of structured revisions',
      'Complete editable source files & exports',
      'Email support during delivery',
      'Clear project milestone timeline'
    ],
    recommendedFor: 'Individual creators, freelancers, and small tasks'
  },
  {
    id: 'tier-pro',
    name: 'Professional Business',
    subtitle: 'For businesses requiring comprehensive digital services',
    badge: 'Best Value for Growth',
    priceDescription: 'Detailed scope quotation with milestones',
    typicalTurnaround: '5 – 10 Business Days',
    features: [
      'Multi-page responsive website OR comprehensive brand suite',
      'Advanced Excel dashboard with automated formulas',
      'SEO setup & mobile optimization included',
      'Up to 3 rounds of refinement',
      'Priority communication via WhatsApp & Email',
      '30-day post-delivery technical warranty'
    ],
    recommendedFor: 'Growing businesses, startups, and established practices'
  },
  {
    id: 'tier-custom',
    name: 'Custom / Enterprise',
    subtitle: 'For customized, recurring, or specialized workflows',
    badge: 'Full Flexibility',
    priceDescription: 'Tailored quotation based on exact specifications',
    typicalTurnaround: 'Agreed in project scope',
    features: [
      'Bespoke multi-disciplinary scope (Web + Data + Brand + Automation)',
      'Dedicated solution specialist and direct sprint calls',
      'Custom integrations (APIs, CRM, automation pipelines)',
      'Ongoing maintenance & retainer support options',
      'Custom NDA and enterprise service level agreement (SLA)'
    ],
    recommendedFor: 'Enterprises, multi-brand founders, and complex operations'
  }
];

export const INITIAL_QUOTES: QuoteRequest[] = [
  {
    id: 'QT-2026-001',
    createdAt: '2026-09-20',
    customerName: 'Kunal Verma',
    customerEmail: 'kunal.verma@example.com',
    customerPhone: '+91 98765 43210',
    serviceId: 'web-dev',
    serviceName: 'Website Development',
    requirements: 'Need a 5-page responsive website for our dental clinic with appointment inquiry form and doctor profiles.',
    budget: '$300 – $600',
    deadline: 'Within 2 weeks',
    status: 'quoted',
    quoteAmount: 480,
    discount: 30,
    tax: 0,
    finalAmount: 450,
    validUntil: '2026-10-15',
    terms: '50% advance upon agreement, 50% upon final staging approval. Includes 30-day technical support.',
    adminNotes: 'Scope includes 5 pages, mobile testing, Google Maps integration, and inquiry email notifications.'
  },
  {
    id: 'QT-2026-002',
    createdAt: '2026-09-24',
    customerName: 'Sneha Kapur',
    customerEmail: 'sneha@kapurconsulting.in',
    customerPhone: '+91 91234 56789',
    serviceId: 'excel-data',
    serviceName: 'Excel & Data Solutions',
    requirements: 'Consolidate 12 monthly client attendance and billing sheets into a single automated dashboard.',
    budget: '$150 – $300',
    deadline: 'Within 5 days',
    status: 'pending_review'
  }
];

export const INITIAL_TICKETS: SupportTicket[] = [
  {
    id: 'TKT-1081',
    createdAt: '2026-09-22',
    customerName: 'Kunal Verma',
    customerEmail: 'kunal.verma@example.com',
    phone: '+91 98765 43210',
    service: 'Website Development',
    subject: 'Question about adding clinic photos to gallery',
    message: 'Hello ODS team, we have taken updated high-res photos of the clinic. Where can we send the Google Drive link to have them inserted?',
    urgency: 'normal',
    status: 'resolved',
    adminReply: 'Hi Kunal! You can share the Drive folder with editor access to support@omdigitalservices.com, and we will update the gallery within 24 hours.'
  },
  {
    id: 'TKT-1082',
    createdAt: '2026-09-26',
    customerName: 'Priya N. Deshmukh',
    customerEmail: 'priya@deshmukhclinic.com',
    service: 'Document Services',
    subject: 'Minor typo update in intake PDF form header',
    message: 'We noticed the clinic room number changed from Suite 201 to Suite 204. Could you update that in the fillable PDF header?',
    urgency: 'normal',
    status: 'in_review'
  }
];

export const INITIAL_ENQUIRIES: ContactEnquiry[] = [
  {
    id: 'ENQ-901',
    createdAt: '2026-09-25',
    fullName: 'Mohit Agarwal',
    email: 'mohit@agarwalgroups.com',
    phone: '+91 98111 22334',
    service: 'Graphic Design',
    budget: '$200 – $400',
    details: 'Looking for a clean corporate brochure and digital product catalogue for our industrial valve products.',
    status: 'in_progress'
  },
  {
    id: 'ENQ-902',
    createdAt: '2026-09-27',
    fullName: 'Deepika Nair',
    email: 'deepika.nair@startupfoundry.co',
    service: 'AI Solutions & Automation',
    budget: 'Flexible',
    details: 'We want to automate the flow from inbound form submission to Google Sheet, Slack notification, and draft email response.',
    status: 'new'
  }
];

export const FAQS_DATA = [
  {
    category: 'General',
    question: 'What services does ODS – Om Digital Services provide?',
    answer: 'ODS provides an end-to-end suite of digital solutions including Website Development, Graphic Design & Branding, Excel & Data Solutions, Digital Business Support, Social Media Content, Document Formatting, AI Solutions & Automations, and Custom Digital Services.'
  },
  {
    category: 'Quotations & Pricing',
    question: 'How can I request a quotation?',
    answer: 'You can click any "Get Started" or "Get Quote" button across our website. Fill out the simple quotation form with your requirements, budget, and desired deadline. We review every request and provide a clear, transparent quotation within 24 hours.'
  },
  {
    category: 'Timeline',
    question: 'How long does a typical project take?',
    answer: 'Project durations depend on scope: quick graphic design or document formatting usually takes 1 to 4 business days; Excel models take 2 to 5 days; and complete responsive websites typically take 5 to 12 business days. Exact timelines are committed upfront in your project quote.'
  },
  {
    category: 'Customization',
    question: 'Can I request a customized service that combines multiple areas?',
    answer: 'Absolutely. Many clients require a website plus brand assets, or an Excel dashboard plus automation. We provide bundled custom quotations tailored to your exact needs without paying for unused extras.'
  },
  {
    category: 'Communication',
    question: 'How can I contact ODS?',
    answer: 'You can reach us through our online contact form, request quote system, direct email (support@omdigitalservices.com), or instant WhatsApp chat during our regular business hours (Monday – Saturday, 9:00 AM – 7:00 PM).'
  },
  {
    category: 'Revisions',
    question: 'Do you provide revisions on delivered work?',
    answer: 'Yes. All standard projects include 2 to 3 structured revision rounds to ensure every detail meets your specifications. We do not consider a project complete until you are satisfied.'
  },
  {
    category: 'Support',
    question: 'Do you provide support after project delivery?',
    answer: 'Yes, we provide 30 days of post-delivery technical warranty support for websites and digital systems, ensuring that questions or minor setup tweaks are resolved quickly at no extra charge.'
  },
  {
    category: 'Multiple Services',
    question: 'Can I order multiple services or request ongoing recurring support?',
    answer: 'Yes! We offer monthly retainer arrangements for businesses requiring ongoing social media creatives, continuous spreadsheet maintenance, website updates, or regular documentation support.'
  }
];

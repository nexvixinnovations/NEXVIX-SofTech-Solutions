/**
 * NEXVIX SofTech Solutions — Official Pricing & Currency Matrix Data
 */

export const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar (USD)', flag: '🇺🇸' },
  { code: 'GBP', symbol: '£', name: 'British Pound (GBP)', flag: '🇬🇧' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar (AUD)', flag: '🇦🇺' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar (CAD)', flag: '🇨🇦' },
];

export const pricingCategories = [
  {
    category: 'Business Website (5 Pages)',
    shortName: 'Business Website',
    tiers: [
      {
        tierName: 'Starter',
        delivery: '48-Hour Delivery',
        description: 'Ideal for single-service businesses & startups needing a high-converting landing page.',
        features: [
          'High-Converting Single/Landing Page',
          'Built with React + Tailwind CSS',
          'Mobile-First Responsive Layout',
          'Basic On-Page SEO Meta Setup',
          'Fast 48-Hour Delivery Guarantee',
          'Personal Domain ID Included FREE'
        ],
        prices: {
          USD: { original: '$2,499', offer: '$1,499', save: '$1,000', offerNum: 1499, originalNum: 2499 },
          GBP: { original: '£1,917', offer: '£1,150', save: '£767', offerNum: 1150, originalNum: 1917 },
          AUD: { original: 'A$3,583', offer: 'A$2,150', save: 'A$1,433', offerNum: 2150, originalNum: 3583 },
          CAD: { original: 'C$3,499', offer: 'C$2,099', save: 'C$1,400', offerNum: 2099, originalNum: 3499 }
        }
      },
      {
        tierName: 'Professional',
        delivery: '72-Hour Delivery',
        popular: true,
        description: 'Complete multi-page marketing website built for established service providers & clinics.',
        features: [
          'Up to 5 Custom Pages (Home, Work, Pricing, About, Contact)',
          'Sub-Second Speed Guarantee',
          'Interactive Contact Forms & Google Maps',
          'Advanced Localized SEO Setup',
          'WhatsApp & Mailto Instant Integration',
          'Personal Domain ID Included FREE'
        ],
        prices: {
          USD: { original: '$4,999', offer: '$2,999', save: '$2,000', offerNum: 2999, originalNum: 4999 },
          GBP: { original: '£3,750', offer: '£2,250', save: '£1,500', offerNum: 2250, originalNum: 3750 },
          AUD: { original: 'A$7,083', offer: 'A$4,250', save: 'A$2,833', offerNum: 4250, originalNum: 7083 },
          CAD: { original: 'C$6,999', offer: 'C$4,199', save: 'C$2,800', offerNum: 4199, originalNum: 6999 }
        }
      },
      {
        tierName: 'Premium',
        delivery: '4-7 Days Delivery',
        description: 'High-performance premium business website with advanced UI, 3D animations, and admin portal.',
        features: [
          'Premium Business Website (Unlimited Pages)',
          'Modern 3D Website Experience & Animations',
          'Custom UI/UX Design System',
          'Admin Dashboard & Customer Management',
          'Advanced SEO & Analytics Integration',
          'Personal Domain ID Included FREE'
        ],
        prices: {
          USD: { original: '$8,332', offer: '$4,999', save: '$3,333', offerNum: 4999, originalNum: 8332 },
          GBP: { original: '£6,250', offer: '£3,750', save: '£2,500', offerNum: 3750, originalNum: 6250 },
          AUD: { original: 'A$11,665', offer: 'A$6,999', save: 'A$4,666', offerNum: 6999, originalNum: 11665 },
          CAD: { original: 'C$11,583', offer: 'C$6,950', save: 'C$4,633', offerNum: 6950, originalNum: 11583 }
        }
      }
    ]
  },
  {
    category: 'E-Commerce Store',
    shortName: 'E-Commerce Store',
    tiers: [
      {
        tierName: 'Starter Store',
        delivery: '3-5 Days Delivery',
        description: 'Ultra-fast online store optimized for high-converting product sales and instant checkout.',
        features: [
          'High-Converting E-Commerce Storefront',
          'Product Catalog & Category Filtering',
          'Slide-out Cart Drawer & Instant Checkout',
          'Multi-Currency Display (INR/USD/GBP)',
          'Mobile Payment Gateway Integration',
          'Product SEO & Mobile Optimization'
        ],
        prices: {
          USD: { original: '$5,832', offer: '$3,499', save: '$2,333', offerNum: 3499, originalNum: 5832 },
          GBP: { original: '£4,332', offer: '£2,599', save: '£1,733', offerNum: 2599, originalNum: 4332 },
          AUD: { original: 'A$8,250', offer: 'A$4,950', save: 'A$3,300', offerNum: 4950, originalNum: 8250 },
          CAD: { original: 'C$8,083', offer: 'C$4,850', save: 'C$3,233', offerNum: 4850, originalNum: 8083 }
        }
      },
      {
        tierName: 'Growth Store',
        delivery: '5-7 Days Delivery',
        popular: true,
        description: 'Advanced e-commerce storefront for scaling brands with custom product customizers & inventory flows.',
        features: [
          'Full-Featured E-Commerce Ecosystem',
          'Interactive Customizer (Before/After Previews)',
          'Automated Order & Inventory Notifications',
          'Discounts, Coupon Engine & Upsells',
          'Stripe / PayPal / Apple Pay Integration',
          'Dedicated Merchant Support'
        ],
        prices: {
          USD: { original: '$13,332', offer: '$7,999', save: '$5,333', offerNum: 7999, originalNum: 13332 },
          GBP: { original: '£9,917', offer: '£5,950', save: '£3,967', offerNum: 5950, originalNum: 9917 },
          AUD: { original: 'A$18,750', offer: 'A$11,250', save: 'A$7,500', offerNum: 11250, originalNum: 18750 },
          CAD: { original: 'C$18,583', offer: 'C$11,150', save: 'C$7,433', offerNum: 11150, originalNum: 18583 }
        }
      },
      {
        tierName: 'Website + Admin App',
        delivery: '7-10 Days Delivery',
        description: 'Complete e-commerce platform + custom admin control center for managing orders, stock & analytics.',
        features: [
          'Custom E-Commerce Storefront + Dedicated Admin App',
          'Real-time Sales & Inventory Dashboard',
          'Order Management & Fulfillment Webhooks',
          'Customer Account Management Portal',
          'Role-Based Staff Access & Security',
          'Full Source Code & Cloud Hosting Included'
        ],
        prices: {
          USD: { original: '$24,999', offer: '$14,999', save: '$10,000', offerNum: 14999, originalNum: 24999 },
          GBP: { original: '£18,750', offer: '£11,250', save: '£7,500', offerNum: 11250, originalNum: 18750 },
          AUD: { original: 'A$35,417', offer: 'A$21,250', save: 'A$14,167', offerNum: 21250, originalNum: 35417 },
          CAD: { original: 'C$34,750', offer: 'C$20,850', save: 'C$13,900', offerNum: 20850, originalNum: 34750 }
        }
      }
    ]
  },
  {
    category: 'Custom SaaS Development',
    shortName: 'SaaS Packages',
    tiers: [
      {
        tierName: 'MVP SaaS Package',
        delivery: '5-7 Days Delivery',
        popular: true,
        description: 'Complete MVP SaaS platform built for rapid launch, user acquisition, and investor demos.',
        features: [
          'Custom React / Tailwind SaaS Frontend',
          'Secure User Auth & User Management',
          'Cloud Database & API Backend',
          'Stripe Subscription / Billing Integration',
          '5-7 Days Rapid Delivery Guarantee',
          '100% Full Source Code & IP Ownership'
        ],
        prices: {
          USD: { original: '$4,500', offer: '$3,999', save: '$501', offerNum: 3999, originalNum: 4500 },
          GBP: { original: '£3,450', offer: '£3,070', save: '£380', offerNum: 3070, originalNum: 3450 },
          AUD: { original: 'A$6,450', offer: 'A$5,730', save: 'A$720', offerNum: 5730, originalNum: 6450 },
          CAD: { original: 'C$6,300', offer: 'C$5,600', save: 'C$700', offerNum: 5600, originalNum: 6300 }
        }
      },
      {
        tierName: 'Full Scale SaaS Platform',
        delivery: '10-14 Days Delivery',
        description: 'Full-scale enterprise SaaS product ecosystem with admin portal, team roles, and multi-tenant scaling.',
        features: [
          'Full Multi-Tenant SaaS Architecture',
          'Comprehensive Admin Control Center',
          'Automated Workflows & Email Webhooks',
          'Advanced Business Analytics & Metrics',
          'Multi-Tier Billing & Role Authorization',
          'Dedicated Engineer Support & SLA'
        ],
        prices: {
          USD: { original: '$12,999', offer: '$9,999', save: '$3,000', offerNum: 9999, originalNum: 12999 },
          GBP: { original: '£9,995', offer: '£7,690', save: '£2,305', offerNum: 7690, originalNum: 9995 },
          AUD: { original: 'A$18,650', offer: 'A$14,350', save: 'A$4,300', offerNum: 14350, originalNum: 18650 },
          CAD: { original: 'C$18,200', offer: 'C$13,990', save: 'C$4,210', offerNum: 13990, originalNum: 18200 }
        }
      }
    ]
  },
  {
    category: 'Web App',
    shortName: 'Web App',
    tiers: [
      {
        tierName: 'MVP / Simple Tool',
        delivery: '5-7 Days Delivery',
        description: 'Fast, scalable web application MVP built with React, Node/Cloud backend, and authentication.',
        features: [
          'React Web Application MVP',
          'Cloud Backend & Database Integration',
          'User Authentication (Login / Signup)',
          'Core Functional Workflow Engine',
          'REST / GraphQL API Endpoints',
          'High Performance & Cloud Deployment'
        ],
        prices: {
          USD: { original: '$16,665', offer: '$9,999', save: '$6,666', offerNum: 9999, originalNum: 16665 },
          GBP: { original: '£12,417', offer: '£7,450', save: '£4,967', offerNum: 7450, originalNum: 12417 },
          AUD: { original: 'A$23,750', offer: 'A$14,250', save: 'A$9,500', offerNum: 14250, originalNum: 23750 },
          CAD: { original: 'C$23,250', offer: 'C$13,950', save: 'C$9,300', offerNum: 13950, originalNum: 23250 }
        }
      },
      {
        tierName: 'Standard App',
        delivery: '10-14 Days Delivery',
        popular: false,
        description: 'Full SaaS / enterprise web application with admin portal, billing, role management, and analytics.',
        features: [
          'Full Enterprise Web Application Ecosystem',
          'SaaS Subscription Billing & Stripe Portal',
          'Admin Dashboard & Business Analytics',
          'Role-Based Authorization & Security',
          'Automated Workflows & Notification Engine',
          'Complete Source Code & 100% IP Ownership'
        ],
        prices: {
          USD: { original: '$41,665', offer: '$24,999', save: '$16,666', offerNum: 24999, originalNum: 41665 },
          GBP: { original: '£30,833', offer: '£18,500', save: '£12,333', offerNum: 18500, originalNum: 30833 },
          AUD: { original: 'A$58,333', offer: 'A$35,000', save: 'A$23,333', offerNum: 35000, originalNum: 58333 },
          CAD: { original: 'C$57,917', offer: 'C$34,750', save: 'C$23,167', offerNum: 34750, originalNum: 57917 }
        }
      }
    ]
  },
  {
    category: 'AI Video Production',
    shortName: 'AI Video',
    footnote: "Need a longer or custom-length short-form video? Pricing is scoped individually — reach out and we'll quote it for you.",
    tiers: [
      {
        tierName: 'Quick Cut — 15 Seconds',
        delivery: '48–72 Hours Delivery',
        description: 'Built for a single hook or announcement — a product reveal, a promo line, a quick social ad. Best for platforms where attention spans are shortest (Reels, Shorts, TikTok, Stories).',
        features: [
          '15-Second AI-Generated Video',
          'Single Core Message / Hook',
          'Optimized for Social Feeds (9:16)',
          '1 Round of Revisions',
          'Delivery in 48–72 Hours'
        ],
        prices: {
          USD: { offer: '$500', offerNum: 500 },
          GBP: { offer: '£385', offerNum: 385 },
          AUD: { offer: 'A$750', offerNum: 750 },
          CAD: { offer: 'C$680', offerNum: 680 }
        }
      },
      {
        tierName: 'Story Reel — 30 Seconds',
        delivery: '3–4 Days Delivery',
        popular: true,
        description: 'Enough room to introduce a problem, show the product or service in action, and close with a clear call to action. This is the length that performs best across most paid social and landing-page use cases.',
        features: [
          '30-Second AI-Generated Video',
          'Problem → Solution → CTA Structure',
          'Multi-Platform Aspect Ratios (9:16 / 1:1 / 16:9)',
          'Voiceover or Captions Included',
          '2 Rounds of Revisions',
          'Delivery in 3–4 Days'
        ],
        prices: {
          USD: { offer: '$750', offerNum: 750 },
          GBP: { offer: '£575', offerNum: 575 },
          AUD: { offer: 'A$1,125', offerNum: 1125 },
          CAD: { offer: 'C$1,020', offerNum: 1020 }
        }
      },
      {
        tierName: 'Full Story — 60 Seconds',
        delivery: '5–7 Days Delivery',
        description: 'Room for a complete explainer or brand story with multiple scenes/beats — useful for landing-page hero videos, investor/pitch clips, or a fuller product walkthrough that needs more than one idea to land.',
        features: [
          '60-Second AI-Generated Video',
          'Multi-Scene Storytelling',
          'Custom Voiceover & Sound Design',
          'All Platform Aspect Ratios',
          '3 Rounds of Revisions',
          'Delivery in 5–7 Days'
        ],
        prices: {
          USD: { offer: '$1,000', offerNum: 1000 },
          GBP: { offer: '£770', offerNum: 770 },
          AUD: { offer: 'A$1,500', offerNum: 1500 },
          CAD: { offer: 'C$1,360', offerNum: 1360 }
        }
      }
    ]
  }
];


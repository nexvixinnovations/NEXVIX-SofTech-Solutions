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
        popular: true,
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
  }
];

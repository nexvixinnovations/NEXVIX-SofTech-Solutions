/**
 * Showcase Projects Data Store
 * Easily append new projects to this array following the standard schema.
 */

export const categoryBadgeStyles = {
  'E-commerce Store': 'bg-[#FBE8E4] text-[#8C3A2B] border-[#F2C5BD]',
  'Business Website (Medical)': 'bg-[#E8F3EE] text-[#1E5641] border-[#C3E2D4]',
  'Business Website (Fitness)': 'bg-[#FEF3E7] text-[#9A4C0F] border-[#FCD5B5]',
  'Restaurant & Catering': 'bg-[#FAF0D9] text-[#7E520A] border-[#F3DBA7]',
  'Commercial Services': 'bg-[#EAF1F8] text-[#224A75] border-[#C9DCED]',
};

export const filterCategories = [
  'All Projects',
  'E-commerce Store',
  'Business Website (Medical)',
  'Business Website (Fitness)',
  'Restaurant & Catering',
  'Commercial Services',
];

export const projectsData = [
  {
    id: 'madurai-food-corner',
    name: 'Madurai Food Corner',
    url: null,
    hasLiveLink: false,
    categoryTag: 'Restaurant & Catering',
    description: 'Authentic South Indian restaurant & catering platform featuring interactive menu, online combo offers, and instant order booking.',
    image: '/showcase/madurai-food-corner.png',
    video: 'https://res.cloudinary.com/ji86uvi3/video/upload/v1786465551/Madurai_sji3uu.mp4',
    isFlagship: true,
    fullDetails: 'Custom food service web app featuring interactive video walkthrough of the ordering flow, daily special menu highlights, Kari Dosa / Jigarthanda spotlight, and direct WhatsApp ordering.'
  },
  {
    id: 'digital-art-studio',
    name: 'Digital Art Studio',
    url: 'https://digitalartstudio.pages.dev/',
    hasLiveLink: true,
    categoryTag: 'E-commerce Store',
    description: 'Custom e-commerce store built for the Indian market — personalized watercolor portrait products with before/after previews, live pricing (INR), and streamlined checkout flow.',
    image: '/showcase/digital-art-studio.png',
    isFlagship: true,
    fullDetails: 'Engineered with live currency & pricing calculation, interactive portrait artwork preview engine, sub-second product customization choices, and mobile-optimized Indian payment checkout experience.'
  },
  {
    id: 'serene-health',
    name: 'Serene Health',
    url: 'https://serene-health.netlify.app/',
    hasLiveLink: true,
    categoryTag: 'Business Website (Medical)',
    description: 'A calm, trust-focused website design for a medical/healthcare practice, built to convert visitors into patient inquiries.',
    image: '/showcase/serene-health.png',
    isFlagship: false,
    fullDetails: 'Designed around patient empathy and clinical trust. Includes online appointment inquiry forms, doctor specialties overview, and patient satisfaction social proof integration.'
  },
  {
    id: 'nexvix-gym',
    name: 'Nexvix Gym',
    url: 'https://nexvix-gym.netlify.app/',
    hasLiveLink: true,
    categoryTag: 'Business Website (Fitness)',
    description: 'A bold, high-energy website design for a gym/fitness brand, focused on class signups and membership conversions.',
    image: '/showcase/nexvix-gym.png',
    isFlagship: false,
    fullDetails: 'High-octane aesthetic with bold typography, trainer profiles, class program schedules, and a streamlined free-trial booking call to action.'
  },
  {
    id: 'nexvix-ecommerce',
    name: 'Nexvix E-commerce',
    url: 'https://nexvix-ecommerce.netlify.app/',
    hasLiveLink: true,
    categoryTag: 'E-commerce Store',
    description: 'A modern e-commerce storefront sample with product grid, cart, and checkout flow.',
    image: '/showcase/nexvix-ecommerce.png',
    isFlagship: false,
    fullDetails: 'Luxury editorial apparel showcase featuring dynamic product filtering, slide-out cart draw, lookbook gallery, and multi-currency readiness.'
  },
  {
    id: 'sunpeak-solar',
    name: 'SunPeak Solar Co.',
    url: null,
    hasLiveLink: false,
    categoryTag: 'Commercial Services',
    description: 'High-converting solar lead generation platform designed for homeowners seeking renewable energy installations.',
    image: '/showcase/SunPeak Solar Co. MU.png',
    isFlagship: false,
    fullDetails: 'Includes rapid solar quote estimator, roof mapping preview, savings calculator, and high-converting lead forms.'
  },
  {
    id: 'summit-roof-air',
    name: 'Summit Roof & Air',
    url: null,
    hasLiveLink: false,
    categoryTag: 'Commercial Services',
    description: 'Commercial and residential roofing & HVAC service engine built for rapid contractor emergency lead response.',
    image: '/showcase/Summit Roof & Air MU.png',
    isFlagship: false,
    fullDetails: 'Features 1-click emergency service dispatching, customer review integration, and localized contractor SEO optimization.'
  },
  {
    id: 'harley-street-dental',
    name: 'Harley Street Dental Studio',
    url: null,
    hasLiveLink: false,
    categoryTag: 'Business Website (Medical)',
    description: 'Luxury dental clinic web platform designed for Harley Street practitioners — features online appointment booking, doctor profiles, treatments overview, and patient trust testimonials.',
    image: '/showcase/Harley Street Dental Studio.png',
    isFlagship: false,
    fullDetails: 'Engineered with Harley Street clinical aesthetic, appointment inquiry workflow, specialty treatment showcases, and patient review integrations.'
  }
];

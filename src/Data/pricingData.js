// src/data/pricingData.js
export const plans = [
  {
    id: "standard",
    name: "Standard",
    price: "₹999 / user / month",
    subtitle: "Core CRM features for small teams",
    highlights: ["Lead & contact management", "Basic email & SMS", "Mobile app access"],
    cta: { label: "Sign Up Now", href: "/signup?plan=standard" },
    accent: "bg-white", // you can use different styles
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹1,999 / user / month",
    subtitle: "Advanced workflows & analytics",
    highlights: ["Everything in Standard", "Lead scoring", "Advanced analytics"],
    cta: { label: "Start Free Trial", href: "/signup?plan=premium" },
    featured: true, // center card
  },
  {
    id: "diamond",
    name: "Diamond",
    price: "Custom Pricing",
    subtitle: "Enterprise features and integrations",
    highlights: ["Everything in Premium", "Role-based access", "WhatsApp API"],
    cta: { label: "Contact Sales", href: "/contact-sales" },
    accent: "bg-white",
  },
];

export const featureRows = [
  { feature: "Lead, contact and deal management", standard: true, premium: true, diamond: true },
  { feature: "Task & follow-up system", standard: true, premium: true, diamond: true },
  { feature: "Email & SMS integration (basic)", standard: true, premium: true, diamond: true },
  { feature: "Pipeline automation", standard: true, premium: true, diamond: true },
  { feature: "Advanced analytics", standard: false, premium: true, diamond: true },
  { feature: "Call tracking & recording", standard: false, premium: true, diamond: true },
  { feature: "3rd-party integrations (full)", standard: false, premium: false, diamond: true },
  { feature: "Records limit", standard: "1,00,000", premium: "5,00,000", diamond: "Unlimited" },
];

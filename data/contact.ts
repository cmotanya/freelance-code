export const contactDetails = {
  phoneLabel: "+254 712 909 475",
  phoneHref: "tel:+254712909475",
  whatsappLabel: "WhatsApp",
  whatsappHref: "https://wa.me/254712909475",
  emailLabel: "motanyac@gmail.com",
  emailHref: "mailto:motanyac@gmail.com",
  location: "Mombasa, Kenya",
};

export const quickLinks = [
  {
    title: "Phone",
    value: contactDetails.phoneLabel,
    href: contactDetails.phoneHref,
    iconSrc: "/socials/smart-phone.svg",
    note: "Call for urgent or direct inquiries.",
  },
  {
    title: "Email",
    value: contactDetails.emailLabel,
    href: contactDetails.emailHref,
    iconSrc: "/socials/gmail.png",
    note: "Best for project details and formal requests.",
  },
  {
    title: "WhatsApp",
    value: contactDetails.whatsappLabel,
    href: contactDetails.whatsappHref,
    iconSrc: "/socials/whatsapp.svg",
    note: "Quick chat for simple questions and follow-ups.",
  },
];

export const faqs = [
  {
    q: "What is your typical project lead time?",
    a: "For web builds, usually 2–4 weeks. Infrastructure audits or physical networking setups can often be scheduled within 72 hours depending on site location.",
  },
  {
    q: "Do you handle both hardware and software?",
    a: "Yes. I specialize in the intersection of both, deploying robust networks and building the custom software that runs on them. My insatiable need to understand and put to use new technologies has propelled my skills across both platforms.",
  },
  {
    q: "How do you handle maintenance?",
    a: "I offer 'Node-Care' retainers for 24/7 monitoring. For one-off projects, I provide 30 days of complimentary technical support. However, for long term commitments, my objective remains consistent to provide sustained maintenance for projects that might need immediate care.",
  },
  {
    q: "What tech stack do you prefer?",
    a: "My go to ecosystem for software projects consists of Next.js or TanStack Start, TypeScript and PostgreSQL. For infrastructure, I architect high-speed networks using Ruijie products while for surveillance I typically use industry wide accepted brands such as Hikvision, Dahua, and UNV. However, I remain flexible in adopting any enterprise-grade hardware as requested.",
  },
  {
    q: "How do you handle project?",
    a: "I focus on high efficiency architecture that keep overhead cost low. By utilizing optimized products suited for your specific need, I offer reliability without the 'big box' corporate price tag.",
  },
];

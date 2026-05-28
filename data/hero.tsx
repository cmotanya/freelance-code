import {
  AccessIcon,
  ComputerProgramming01Icon,
  HomeWifiIcon,
  LaborIcon,
  SafeDelivery01Icon,
  WechatIcon,
} from "hugeicons-react";

export const stats = [
  { value: "50+", label: "Projects Delivered", icon: SafeDelivery01Icon },
  { value: "5+", label: "Years Experience", icon: LaborIcon },
  { value: "100%", label: "Client Satisfaction", icon: WechatIcon },
];

export const featuredProjects = [
  {
    name: "My-Chama",
    type: "Internal System",
    tags: ["Tanstack Start", "PostgreSQL"],
    desc: "Digital ledger for Kenyan savings cooperatives.",
    link: "https://my-chama.netlify.app",
  },
  {
    name: "JobTrack",
    type: "Internal System",
    tags: ["TypeScript", "Dashboards"],
    desc: "Job application pipeline tracker.",
    link: "",
  },
];

export const stack = [
  {
    category: "Networking",
    tools: "Starlink, MikroTik, Ubiquiti, Fiber Splicing",
    icon: HomeWifiIcon,
  },
  {
    category: "Surveillance",
    tools: "Hikvision, Dahua, Biometrics, ZKTeco",
    icon: AccessIcon,
  },
  {
    category: "Web Stack",
    tools: "Next.js, Tailwind v4, Astro, PostgreSQL",
    icon: ComputerProgramming01Icon,
  },
];

export const process = [
  {
    step: "01",
    title: "Understand",
    desc: "I listen before I build. Goals, constraints, and context first.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes, architecture, or site plans — whatever the work needs.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Clean, documented, production-ready. No shortcuts.",
  },
  {
    step: "04",
    title: "Hand Over",
    desc: "Training, docs, and support. You walk away owning it fully.",
  },
];

export const testimonials = [
  {
    quote:
      "Cornelius didn't just build a site; he restructured our entire network. Everything is seamless now.",
    author: "Project Lead",
    company: "Eats-Demo",
  },
  {
    quote:
      "The M-PESA integration is flawless. His technical depth in both hardware and software is rare.",
    author: "System Manager",
    company: "JobTrack",
  },
];

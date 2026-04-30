import {
  CctvCameraIcon,
  CheckmarkBadge01Icon,
  DateTimeIcon,
  Layers01Icon,
  Router01Icon,
  StartUp01Icon,
  ZapIcon,
} from "hugeicons-react";

export type tabs = "all" | "website" | "installation";
export type project_status = "Completed" | "In Progress";

export const project_categories: { value: tabs; label: string }[] = [
  { value: "all", label: "All" },
  { value: "website", label: "Website" },
  { value: "installation", label: "Installation" },
];

export const gallery: { value: tabs; src: string }[] = [
  {
    value: "installation",
    src: "https://res.cloudinary.com/di7ib6wxw/image/upload/v1775759016/starlink_installation_waxh4j.jpg",
  },
  {
    value: "installation",
    src: "https://res.cloudinary.com/di7ib6wxw/image/upload/v1775759017/network_cabinet_t4pc4o.jpg",
  },
  {
    value: "installation",
    src: "https://res.cloudinary.com/di7ib6wxw/image/upload/v1775758934/amplifier_s1s2ht.jpg",
  },
  {
    value: "installation",
    src: "https://res.cloudinary.com/di7ib6wxw/image/upload/v1775759018/jbl_speakers_vsvzk8.jpg",
  },
];

export const domainHighlights = [
  {
    icon: StartUp01Icon,
    label: "Web",
    color: "var(--primary)",
    count: "20+ projects",
    desc: "Next.js, APIs, dashboards",
  },
  {
    icon: Router01Icon,
    label: "Network",
    color: "var(--warning)",
    count: "15+ installs",
    desc: "MikroTik, Ubiquiti, Fiber",
  },
  {
    icon: CctvCameraIcon,
    label: "Security",
    color: "var(--success)",
    count: "10+ systems",
    desc: "CCTV, ZKTeco, Biometrics",
  },
];

export const stats = [
  {
    value: "50+",
    label: "Deployed",
    icon: CheckmarkBadge01Icon,
    color: "var(--success)",
  },
  { value: "3", label: "Domains", icon: Layers01Icon, color: "var(--primary)" },
  { value: "5+", label: "Years", icon: DateTimeIcon, color: "var(--warning)" },
  { value: "100%", label: "Delivered", icon: ZapIcon, color: "var(--success)" },
];

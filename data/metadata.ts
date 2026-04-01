import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Cornelius Motanya | Full-Stack Developer & Network Engineer",
  description:
    "Portfolio of Cornelius Motanya, specializing in high-performance web applications and robust network infrastructure.",
  authors: [{ name: "Cornelius Motanya" }],
  generator: "Next.js",
  applicationName: "Cornelius Motanya Portfolio",
  keywords: [
    "Cornelius Motanya",
    "Full-Stack Developer",
    "Network Engineer",
    "Web Development",
    "Next.js",
    "React",
    "TailwindCSS",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Cornelius Motanya",
  publisher: "Cornelius Motanya",

  metadataBase: new URL("http://localhost:3000"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

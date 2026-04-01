import { sora } from "@/data/fonts";
import "./globals.css";
import { siteMetadata } from "@/data/metadata";
import { cn } from "@/lib/utils";
import Header from "./header";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme="light" className={cn("font-mono", jetbrainsMono.variable)}>
      <body className={cn("h-full", "relative", "antialiased", sora.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}

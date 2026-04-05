import { sora } from "@/data/fonts";
import "./globals.css";
import { siteMetadata } from "@/data/metadata";
import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={cn("h-full", "relative", "antialiased", sora.variable)}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

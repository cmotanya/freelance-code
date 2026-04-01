import {
  Bubblegum_Sans,
  Covered_By_Your_Grace,
  Luckiest_Guy,
  Sora,
} from "next/font/google";

export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const bubbleGum = Bubblegum_Sans({
  subsets: ["latin"],
  variable: "--font-bubblegum",
  display: "swap",
  weight: ["400"],
});

export const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  variable: "--font-covered-by-your-grace",
  display: "swap",
  weight: ["400"],
});

export const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
  display: "swap",
  weight: ["400"],
});

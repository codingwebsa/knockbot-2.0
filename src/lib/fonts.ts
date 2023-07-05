import localFont from "next/font/local";
import { Nunito, Titillium_Web } from "next/font/google";

export const cabinetFont = localFont({
  src: "../../public/fonts/cabinet.ttf",
  variable: "--font-cabinet",
});

export const nunitoFont = Nunito({
  display: "swap",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const titilliumFont = Titillium_Web({
  display: "swap",
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-titillium",
});

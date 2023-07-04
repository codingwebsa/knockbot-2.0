import { Metadata } from "next";

import "~/styles/globals.css";
import { siteConfig } from "~/config/site";
import { cabinetFont, nunitoFont } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import Navbar from "~/components/navbar/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-gray-100 text-zinc-900 antialiased font-cabinet pb-20",
          cabinetFont.variable,
          nunitoFont.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

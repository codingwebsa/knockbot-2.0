import { Metadata } from "next";
import Loglib from "@loglib/tracker/react";

import "~/styles/globals.css";
import { siteConfig } from "~/config/site";
import { cabinetFont, nunitoFont, titilliumFont } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer";
// import CustomCursor from "~/components/custom-cursor";

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
          "bg-gray-100 text-zinc-900 antialiased font-cabinet",
          cabinetFont.variable,
          nunitoFont.variable,
          titilliumFont.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Loglib
          config={{
            id: "knockbot",
          }}
        />
        {/* <CustomCursor /> */}
      </body>
    </html>
  );
}

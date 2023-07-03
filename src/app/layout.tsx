import "~/styles/globals.css";
import { siteConfig } from "~/config/site";
import { cabinetFont } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import Navbar from "~/components/navbar/navbar";

export const metadata = {
  title: siteConfig.name,
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
          cabinetFont.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

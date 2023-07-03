import "~/styles/globals.css";
import { siteConfig } from "~/config/site";
import { cabinetFont } from "~/lib/fonts";
import { cn } from "~/lib/utils";

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
          "bg-gray-100 text-zinc-900 antialiased",
          cabinetFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

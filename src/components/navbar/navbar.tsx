import { siteConfig } from "~/config/site";
import { LogoIcon } from "../icons";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";

export default function Navbar() {
  return (
    <header className="z-10 relative">
      {/* Gradient */}
      <div className="bg-conic-gradient absolute blur-md opacity-80 -translate-y-3.5 -z-10 h-full w-full" />
      <nav className="relative px-8 py-3.5 justify-between flex items-center border-b bg-white border-neutral-200">
        {/* LOGO */}
        <div className="flex gap-2 items-center">
          <p className="text-xl font-bold">{siteConfig.name}</p>
        </div>
        {/* LINKS */}
        <div>
          <div className="flex gap-7">
            {siteConfig.mainNav.links.map((navItem, i) => (
              <Link href={navItem.link} key={i}>
                <p className="text-base font-bold text-stone-600 hover:text-zinc-900 duration-300">
                  {navItem.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* ACTION BUTTONS */}
        <div>
          <div>
            <Button size={"lg"}>
              <p className="font-bold text-base">Signin</p>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

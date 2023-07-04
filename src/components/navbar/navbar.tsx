import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "~/config/site";
import { Button } from "../ui/button";
import Logo from "~/../public/images/logo.png";

export default function Navbar() {
  return (
    <header className="relative z-10">
      {/* Gradient */}
      {/* <div className="absolute w-full h-full -translate-y-4 bg-conic-gradient blur-md opacity-80 -z-10" /> */}
      <nav className="relative px-8 py-3.5 justify-between flex items-center bg-white">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          {/* <p className="text-xl font-bold">{siteConfig.name}</p> */}
          <Image src={Logo} width={35} height={35} alt="" />
        </Link>
        {/* LINKS */}
        <div>
          <div className="flex gap-7">
            {siteConfig.mainNav.map((navItem, i) => (
              <Link href={navItem.link} key={i}>
                <p className="text-base font-bold duration-300 text-stone-600 hover:text-zinc-900">
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
              <p className="text-base font-bold">Signin</p>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

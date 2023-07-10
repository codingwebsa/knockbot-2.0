import Logo from "./logo";
import Menu from "./menu";
import Right from "./right";

export default function Navbar() {
  return (
    <header className="relative z-10">
      {/* Gradient */}
      {/* <div className="absolute w-full h-full -translate-y-4 bg-conic-gradient blur-md opacity-80 -z-10" /> */}
      <nav className="relative flex items-center justify-between px-8 py-2.5 bg-white/40 backdrop-saturate-150">
        {/* LOGO */}
        <Logo />
        {/* LINKS */}
        <div>
          <Menu />
        </div>
        {/* ACTION BUTTONS */}
        <div>
          <Right />
        </div>
      </nav>
    </header>
  );
}

import Logo from "./logo";
import Menu from "./menu";
import Right from "./right";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white">
      {/* Gradient */}
      <div className="absolute w-full h-full -translate-y-3 bg-conic-gradient blur-md opacity-80 -z-10" />
      <div className="bg-white">
        <nav className="relative flex items-center justify-between container py-2.5">
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
      </div>
    </header>
  );
}

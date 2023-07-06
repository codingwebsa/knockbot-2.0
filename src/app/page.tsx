import { Balancer } from "react-wrap-balancer";
import { ChevronRightIcon } from "~/components/icons";
import LogoCloud from "~/components/logo-cloud";

export default function HomePage() {
  return (
    <div>
      <section className="mt-28">
        <h1 className="font-bold text-center capitalize font-titillium text-gradient">
          <span className="text-8xl">Exceptional</span> <br />
          <span className="text-7xl">Wordpress sites.</span>
        </h1>
        <p className="mt-4 text-xl text-center text-zinc-700">
          High-end Wordpress development for design-driven companies <br />{" "}
          where attention to detail and passionate dedication matter.
        </p>
        <button className="flex items-center p-2 px-4 mx-auto mt-8 text-xl font-semibold text-teal-700 duration-300 rounded-md hover:bg-teal-100/40">
          Start a project request <ChevronRightIcon size={25} />
        </button>
      </section>
      <section className="mt-16">
        <LogoCloud />
      </section>
    </div>
  );
}

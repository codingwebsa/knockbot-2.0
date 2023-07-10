import ClientReview from "~/components/client-review";
import { ChevronRightIcon } from "~/components/icons";
import LogoCloud from "~/components/logo-cloud";
import MyIntro from "~/components/my-intro";
import MyWorkflow from "~/components/my-workflow/my-workflow";
import Works from "~/components/works/works";

export default function HomePage() {
  return (
    <div>
      <section className="mt-28">
        <h1 className="font-serif font-bold text-center capitalize text-gradient">
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

      <section className="mt-32 mb-20">
        <MyIntro />
      </section>

      <section id="work" className="pt-20">
        <Works />
      </section>
      <section id="review" className="pt-40">
        <ClientReview />
      </section>

      <section id="workflow" className="pt-40">
        <MyWorkflow />
      </section>
    </div>
  );
}

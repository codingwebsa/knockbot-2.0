import { Metadata } from "next";
import Showcases from "./showcases";

export const metadata: Metadata = {
  title: "Project Showcase",
};

export default function ShowcasePage() {
  return (
    <section className="mt-20" id="showcase">
      <Showcases data={demo_data} />
    </section>
  );
}

const demo_data = [
  {
    text: "Knockbot",
    href: "/",
    date: "2023-07-02",
    image: "/images/showcase/1.webp",
  },
  {
    text: "Dribbble",
    href: "/",
    date: "2023-06-12",
    image: "/images/showcase/2.webp",
  },
  {
    text: "AI Medicine Web UI",
    href: "/",
    date: "2023-05-28",
    image: "/images/showcase/3.webp",
  },
];

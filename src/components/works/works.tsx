"use client";

import { useState } from "react";

import styles from "~/styles/works.module.css";
import Work from "./work";
import Modal from "./modal";

const projects = [
  {
    title: "C2 Montreal",
    src: "/images/showcase/1.webp",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "/images/showcase/2.webp",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "/images/showcase/3.webp",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "/images/showcase/4.webp",
    color: "#706D63",
  },
];

export default function Works() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="max-w-5xl mx-auto">
      <p className="my-20 text-6xl font-bold text-center font-cabinet">
        A small selection <br /> of my work.
      </p>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Work
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}

"use client";

import { useEffect, useRef } from "react";

import "~/styles/blob.css";

export default function Blob() {
  const blob = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("🚀 ~ file: blob.tsx:12 ~ useEffect ~ clientX:");
    window.onpointermove = (e) => {
      const { clientX, clientY } = e;

      blob.current?.animate(
        {
          top: `${clientY}px`,
          left: `${clientX}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);
  return (
    <>
      <div id="blob" ref={blob} className="bottom-0 left-0 -z-50"></div>
      <div id="blur" className="-z-40"></div>
    </>
  );
}

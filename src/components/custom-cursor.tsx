"use client";

import { useEffect, useRef } from "react";

import "~/styles/blob.css";

export default function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const blob = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onpointermove = (e) => {
      const { clientX, clientY } = e;

      blob.current?.animate(
        {
          top: `${clientY}px`,
          left: `${clientX}px`,
        },
        { duration: 3000, fill: "forwards" }
      );

      cursor.current!.style.left = `${clientX}px`;
      cursor.current!.style.top = `${clientY}px`;
    };
  }, []);
  return (
    <>
      <div
        className="fixed z-50 w-5 h-5 -translate-x-1/2 -translate-y-1/2 border rounded-full pointer-events-none bg-stone-500/60 border-stone-500"
        ref={cursor}
      />
      <div id="blob" ref={blob} className="bottom-0 left-0 -z-50"></div>
      <div id="blur" className="-z-40"></div>
    </>
  );
}

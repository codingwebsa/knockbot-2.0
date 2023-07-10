"use client";

import { useEffect, useRef } from "react";
import "~/styles/blob.css";

export default function Blob() {
  const blob = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onpointermove = (e) => {
      const { clientX, clientY } = e;

      blob.current?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
    console.log(blob);
  }, []);
  return (
    <>
      <div id="blob" ref={blob} className="blob -z-50"></div>
      <div className="blur -z-40"></div>
    </>
  );
}

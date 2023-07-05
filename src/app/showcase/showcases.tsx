"use client";

import Link from "next/link";
// @ts-ignore
import { useMouse } from "@uidotdev/usehooks";

interface Props {
  data: DataType[];
}

export interface DataType {
  text: string;
  href: string;
  date: string;
  image: string;
}
export default function Showcases({ data }: Props) {
  const [mouse] = useMouse();

  return (
    <div className="pl-14">
      {data.map((showcase, i) => {
        return (
          <div key={i} className="py-8 group">
            <Link href={showcase.href}>
              <div className="flex items-center gap-1 mb-1">
                <div className="h-0.5 w-[10vw] bg-stone-300 rounded-full" />
                <p className="font-mono text-sm text-stone-500">
                  {showcase.date}
                </p>
              </div>
              <p className="font-bold capitalize font-titillium text-8xl">
                {showcase.text}
              </p>
            </Link>
            {/* image */}
            <div
              style={{ left: mouse.x, top: mouse.y }}
              className="absolute z-20 -translate-y-full opacity-0 pointer-events-none group-hover:opacity-100"
            >
              {/* eslint-disable-next-line */}
              <img
                src={showcase.image}
                width={300}
                height={168}
                className="rounded-lg"
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

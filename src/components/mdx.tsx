"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function Paragraph(props: any) {
  return (
    <p className="w-full" {...props}>
      {props.children}
    </p>
  );
}

function RoundedImage(props: any) {
  return (
    <Image
      alt={props.alt}
      className="rounded-lg"
      width={720}
      height={720}
      {...props}
    />
  );
}

function Callout(props: any) {
  return (
    <div className="flex items-center p-1 px-4 py-3 mb-8 text-sm border rounded border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

// function ProsCard({ title, pros }: { title: any; pros: any }) {
//   return (
//     <div className="w-full p-6 my-4 border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
//       <span>{`You might use ${title} if...`}</span>
//       <div className="mt-4">
//         {pros.map((pro: any) => (
//           <div key={pro} className="flex items-baseline mb-2 font-medium">
//             <div className="w-4 h-4 mr-2">
//               <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24">
//                 <g
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
//                   <path d="M22 4L12 14.01l-3-3" />
//                 </g>
//               </svg>
//             </div>
//             <span>{pro}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function ConsCard({ title, cons }: { title: any; cons: any }) {
//   return (
//     <div className="w-full p-6 my-6 border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
//       <span>{`You might not use ${title} if...`}</span>
//       <div className="mt-4">
//         {cons.map((con: any) => (
//           <div key={con} className="flex items-baseline mb-2 font-medium">
//             <div className="w-4 h-4 mr-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="w-4 h-4 text-red-500"
//               >
//                 <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
//               </svg>
//             </div>
//             <span>{con}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

const components = {
  Image: RoundedImage,
  a: CustomLink,
  p: Paragraph,
  Callout,
  // ProsCard,
  // ConsCard,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral">
      <Component components={{ ...components }} />
    </article>
  );
}

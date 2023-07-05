import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Logo from "~/../public/images/logo.png";
import BlogSection from "~/components/blog/blog-section";
import { UpRightIcon } from "~/components/icons";
import { siteConfig } from "~/config/site";
import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="pl-20 font-nunito">
      {/* intro */}
      <div className="mt-32">
        <h1 className="text-5xl font-bold leading-tight max-w-7xl text-slate-700">
          <span className="inline-block text-black">Welcome to my blog</span>
          <Image
            src={Logo}
            alt=""
            className="inline-block ml-2"
            width={30}
            height={30}
          />
          . I&apos;m{" "}
          <span className="underline decoration-slate-950 decoration-wavy decoration-2">
            Abid
          </span>
          , and this is where I share my passion about programming and design. I
          believe in a practical approach, so here I document my latest
          explorations.
        </h1>
      </div>
      {/* buttons */}
      <div className="mt-6">
        <div className="flex items-center gap-6">
          <Link
            href={siteConfig.socialLinks.github}
            target="_blank"
            className="flex items-center px-6 py-3 font-medium text-blue-700 bg-blue-100 rounded gap-1.5 hover:bg-blue-200 duration-300"
          >
            Github
            <UpRightIcon />
          </Link>
          <Link
            href={siteConfig.socialLinks.twitter}
            target="_blank"
            className="flex items-center px-6 py-3 font-medium text-blue-700 bg-blue-100 rounded gap-1.5 hover:bg-blue-200 duration-300"
          >
            Twitter
            <UpRightIcon />
          </Link>
        </div>
      </div>
      {/* blog */}
      <BlogSection data={allBlogs} title="My blog" className="mt-20" />
    </div>
  );
}

// export type DemoDataType = typeof demoData;

// export const demoData = [
//   {
//     title: "ThoughtSpot",
//     imageUrl:
//       "https://cdn.dribbble.com/userupload/8272339/file/original-8e910710025e2dd19e86e69df38da461.png?compress=1&resize=1024x768",
//     time: "1 day ago",
//     category: "Notion",
//     slug: "",
//   },
//   {
//     title: "Open Purpose",
//     imageUrl:
//       "https://cdn.dribbble.com/userupload/8145043/file/original-e86623816d399f8ee4d094e9431949a6.png?compress=1&resize=1024x768",
//     time: "1 week ago",
//     category: "Customer",
//     slug: "",
//   },
//   {
//     title: "Regene icon set",
//     imageUrl:
//       "https://cdn.dribbble.com/userupload/8279935/file/original-fb89dc6bb8dfd61bb62063ae20c65359.png?compress=1&resize=1024x768",
//     time: "2 months ago",
//     category: "Icon",
//     slug: "",
//   },
//   {
//     title: "Finance Mobile App",
//     imageUrl:
//       "https://cdn.dribbble.com/userupload/8273637/file/original-71b723e8cfe829521a29764fef0c0e40.jpg?compress=1&resize=1024x768",
//     time: "3 months ago",
//     category: "Finance",
//     slug: "",
//   },
//   {
//     title: "Budget - Finance App",
//     imageUrl:
//       "https://cdn.dribbble.com/userupload/5768051/file/original-b37470a5d0491648e7c2dcc182b4699a.png?compress=1&resize=1024x768",
//     time: "3 months ago",
//     category: "Finance",
//     slug: "",
//   },
//   {
//     title: "Interior of Cathedra",
//     imageUrl:
//       "https://cdn.dribbble.com/userupload/8270813/file/original-c50c5c8bcb75bd0fb40ce07faee6d75a.png?compress=1&resize=1024x768",
//     time: "1 year ago",
//     category: "Interior",
//     slug: "",
//   },
// ];

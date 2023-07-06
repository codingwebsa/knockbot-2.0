import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";

export default function LogoCloud() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-8 mx-auto">
        {logos.map((url) => (
          <div key={url}>
            <Image
              src={url}
              alt=""
              height={40}
              width={120}
              className="object-contain h-auto grayscale"
            />
          </div>
        ))}
      </div>
      <div className="mx-auto mt-8">
        <Link
          href="/"
          className="flex gap-2 p-1 px-3 text-sm border rounded-full border-slate-200"
        >
          Over 2500+ companies use our tools to better their business.{" "}
          <span className="flex items-center font-semibold text-teal-700">
            {" "}
            Read our customer stories <ChevronRightIcon size={18} />
          </span>
        </Link>
      </div>
    </div>
  );
}

const logos = [
  "/images/logo-cloud/contentful.png",
  "/images/logo-cloud/deepmind.png",
  "/images/logo-cloud/disney.png",
  "/images/logo-cloud/openai.png",
  "/images/logo-cloud/sanity.png",
  "/images/logo-cloud/workos.png",
];

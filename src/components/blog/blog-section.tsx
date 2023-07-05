import Image from "next/image";
import Link from "next/link";

import { Blog } from "contentlayer/generated";
import { cn } from "~/lib/utils";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  data: Blog[];
  title?: string;
}

export default function BlogSection({
  data,
  title,
  className,
  ...props
}: Props) {
  return (
    <div className={cn("", className)} {...props}>
      {title && (
        <div className="flex items-center gap-2 mb-7">
          <h2 className="relative text-3xl font-semibold">{title}</h2>
          {/* line */}
          <div className="h-0.5 flex-1 rounded-full bg-neutral-200" />
        </div>
      )}
      <div className="grid grid-cols-3 gap-3 pr-4 gap-y-6">
        {data.map((blog, i) => (
          <Link href={`${blog.slug}`} key={i}>
            <div className="relative object-cover w-full h-auto aspect-[3/2]">
              <Image
                src={blog.image}
                className="object-cover rounded-2xl"
                fill
                sizes="30vw"
                alt=""
              />
            </div>
            <div className="flex items-center mt-2 text-base">
              <p className="font-semibold bg-neutral-200 px-1.5 py-0.5 rounded">
                {blog.category}
              </p>
              <div className="w-2 h-2 mx-2 rounded-full bg-stone-600" />
              <p className="text-slate-700">{formatDate(blog.date)}</p>
            </div>
            <h3 className="mt-3 text-xl font-semibold">{blog.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  return `(${formattedDate})`;
}

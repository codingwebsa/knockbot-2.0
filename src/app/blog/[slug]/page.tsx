import { Metadata } from "next";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";

import "~/styles/blog.css";
import { allBlogs } from "contentlayer/generated";
import { Mdx } from "~/components/mdx";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => {
    return post.slugAsParams === params.slug;
  });

  if (!post) {
    return;
  }

  const { title, description, date: publishedTime, slug, image, tags } = post;

  return {
    title,
    description,
    keywords: tags,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${slug}`,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function BlogContentPage({ params }: Props) {
  const post = allBlogs.find((post) => {
    return post.slugAsParams === params.slug;
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="mt-20">
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(post.structuredData)}
        </script>
        <div className="px-8 mx-auto w-fit">
          <h1 className="text-2xl font-bold tracking-tighter">
            <Balancer>{post.title}</Balancer>
          </h1>
          <div className="flex items-center justify-between mt-2 mb-8 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.date)}
            </p>
          </div>
          <Mdx code={post.body.code} />
        </div>
      </section>
    </>
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

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// src/config/site.ts
var siteConfig = {
  name: "Knockbot",
  shortName: "Kn",
  description: "Knockabid, Independent Front End Developer.",
  siteUrl: "https://knockbot.vercel.app/",
  mainNav: [
    {
      title: "Showcase",
      link: "/"
    },
    {
      title: "Blog",
      link: "/blog"
    },
    {
      title: "Tools",
      link: "/"
    }
  ],
  socialLinks: {
    github: "https://github.com/codingwebsa",
    twitter: "https://twitter.com/knockabid"
  }
};

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: `${siteConfig.siteUrl}${doc.image}`,
      url: `${siteConfig.siteUrl}/blog/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: "Abid"
      }
    })
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    image: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentTypes: [Blog],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-2GO7LUG6.mjs.map

"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { siteConfig } from "~/config/site";

export default function Menu() {
  return (
    <div className="flex gap-3 md:gap-7">
      {siteConfig.mainNav.map((navItem, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i, type: "tween" }}
        >
          <Link href={navItem.link}>
            <p className="text-base font-bold duration-300 text-stone-600 hover:text-zinc-900">
              {navItem.title}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

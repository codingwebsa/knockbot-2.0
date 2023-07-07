"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import logo from "~/../public/images/logo.png";

export default function Logo() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      <Link href="/" className="flex items-center gap-2">
        {/* <p className="text-xl font-bold">{siteConfig.name}</p> */}
        <Image src={logo} width={35} height={35} alt="" />
      </Link>
    </motion.div>
  );
}

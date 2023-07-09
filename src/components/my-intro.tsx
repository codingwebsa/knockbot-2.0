"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MyIntro() {
  return (
    <div className="flex items-center justify-between max-w-6xl gap-16 mx-auto">
      <div>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold"
        >
          They call me the
          <br />
          Wordpress expert.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-slate-700"
        >
          Knockbot turns your designs into pixel-perfect <br /> and
          easy-to-manage wordpress experiences.
        </motion.p>
      </div>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 w-full h-full scale-x-125 -top-10 -z-20 intro-img-blur-bg blur-3xl opacity-30"
        />
        <Image
          className="relative h-auto rounded-2xl"
          src="/images/me.jpg"
          alt=""
          width={480}
          priority
          height={530}
        />
      </div>
    </div>
  );
}

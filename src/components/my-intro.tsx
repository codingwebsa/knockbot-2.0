"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import MyImage from "~/../public/images/me.jpg";

export default function MyIntro() {
  return (
    <div className="flex flex-col-reverse items-center justify-center max-w-6xl gap-16 mx-auto md:justify-between md:flex-row">
      <div>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold md:text-3xl lg:text-6xl"
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
          className="mt-4 text-lg text-slate-700"
        >
          We turns your designs into pixel-perfect <br /> and easy-to-manage
          wordpress experiences.
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
          src={MyImage}
          alt=""
          placeholder="blur"
          width={480}
          height={530}
          priority
        />
      </div>
    </div>
  );
}

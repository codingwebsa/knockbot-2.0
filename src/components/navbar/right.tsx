"use client";

import React from "react";
import { motion } from "framer-motion";

import { Button } from "../ui/button";

export default function Right() {
  return (
    <motion.div
      initial={{ scale: 0.8, y: -50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring" }}
    >
      <Button size={"lg"}>
        <a href="mailto:knockabid17@gmail.com" className="text-base font-bold">
          Contact me
        </a>
      </Button>
    </motion.div>
  );
}

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
        <p className="text-base font-bold">Signin</p>
      </Button>
    </motion.div>
  );
}

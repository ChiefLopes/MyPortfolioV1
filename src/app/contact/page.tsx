"use client"

import { motion as m } from "framer-motion"

const Contacts = () => {
  return (
    <m.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    ></m.div>
  );
}

export default Contacts
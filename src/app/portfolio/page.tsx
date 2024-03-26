"use client";

import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { myWorks } from "@/utils/constants";

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <m.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky flex h-screen gap-4 items-center">
          {myWorks.map((works) => (
              <div className="" key={works.id}>
                  <p>{works.header}</p>
                  <Image src={works.img} alt="my works" fill/>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default PortfolioPage;

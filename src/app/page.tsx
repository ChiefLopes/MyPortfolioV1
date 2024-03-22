"use client";

import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36 ">
        {/* IMAGE SECTION */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2 ">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        {/* TEXT SECTION */}
        <div className="h-1/2 flex flex-col gap-4 lg:gap-8 lg:pt-10 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="font-bold text-xl md:text-6xl">
            Building Interactive User Interfaces, <br /> Redefining User
            Experience...
          </h1>

          {/* DECS. */}
          <p className="md:text-xl">
            🚀 Frontend Web Developer | Passionate about crafting clean codes
            and building Interactive UIs. 💻 Exploring the endless possibilities
            in the world of tech, leveraging the awesome power of the javascript
            language.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 w-full">
            <Link href="/portfolio">
              <button className="p-3 bg-black rounded-lg ring-1 ring-black text-white">
                View My Works
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-3 rounded-lg ring-1 ring-black text-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  );
}

"use client";

import { links, SOCIALS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion as m } from "framer-motion";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36">
      {/* LOGO  */}
      <div className="md:hidden xl:w-1/3 lg:flex ">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"
        >
          <span className="text-white mr-1">Lopes</span>
          <span className="w-12 h-8 rounded bg-white text-black flex justify-center items-center">
            .dev
          </span>
        </Link>
      </div>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-6 w-1/3 text-black font-bold text-[18px]">
        {links.map((link) => (
          <NavLink key={link.url} link={link} />
        ))}
      </div>

      {/* SOCIAL ICONS */}
      <div className="hidden md:flex gap-6 w-1/3 justify-center ">
        {SOCIALS.map((social) => (
          <Link href={social.url} key={social.url}>
            <Image src={social.icon} alt={social.url} width={24} height={24} />
          </Link>
        ))}
      </div>

      {/* RESPONSIVE MENU */}
      <div className="flex items-end md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <m.div
            variants={topVariants}
            animate={toggleMenu ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></m.div>
          <m.div
            variants={centerVariants}
            animate={toggleMenu ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></m.div>
          <m.div
            variants={bottomVariants}
            animate={toggleMenu ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></m.div>
        </button>

        {/* MENU LIST */}
        {toggleMenu && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

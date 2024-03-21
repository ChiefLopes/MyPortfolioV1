"use client";

import { links } from "@/utils/constants";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      {/* LOGO  */}
      <div>
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

      {/* RESPONSIVE MENU */}
      <div>
        <button className="w-10 h-6 flex flex-col justify-between z-50 relative" onClick={() => setToggleMenu(!toggleMenu)}>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>

        {/* MENU LIST */}
        { toggleMenu &&
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;

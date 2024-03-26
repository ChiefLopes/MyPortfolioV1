"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LINKS from "@/utils/LinkTypes";



const NavLink = ({ link }: {link: LINKS}) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link
      className={`rouned p-1 ${
        pathName === link.url &&
        " ring-2 border-2 border-b rounded text-white border-red-500"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;

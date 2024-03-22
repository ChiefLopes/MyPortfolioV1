"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItem {
  url: string;
  title: string;
}

const NavLink = ({ link }: { link: LinkItem }) => {
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

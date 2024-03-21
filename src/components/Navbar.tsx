import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      {/* LOGO  */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold"
        >
          <span className="text-white">Lopes</span>
          <span className="w-12 h-8 rounded bg-white text-black">.dev</span>
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div>2</div>
    </div>
  );
};

export default Navbar;

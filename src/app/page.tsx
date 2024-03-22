import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36">
      {/* IMAGE SECTION */}
      <div className="h-1/2 relative ">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>

      {/* TEXT SECTION */}
      <div className="h-1/2 flex flex-col gap-4">
        {/* TITLE */}
        <h1 className="font-bold text-xl md:text-3xl">
          Building Interactive User Interfaces, <br /> Redefining User
          Experience...
        </h1>

        {/* DECS. */}
        <p className="">
          🚀 Frontend Web Developer | Passionate about crafting clean codes and
          building Interactive UIs. 💻 Exploring the endless possibilities in
          the world of tech, leveraging the awesome power of the javascript
          language.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button className="p-3 rounded-lg ring-1 ring-black text-white">
            View My Works
          </button>
          <button className="p-3 rounded-lg ring-1 ring-black text-white">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

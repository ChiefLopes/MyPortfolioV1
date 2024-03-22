import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      {/* IMAGE SECTION */}
      <div className="h-1/2 relative ">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>

      {/* TEXT SECTION */}
      <div className="h-1/2">
        {/* TITLE */}
        <h1>
          Building Interactive User Interfaces, <br /> Redefining User
          Experience...
        </h1>

        {/* DECS. */}
        <p>
          🚀 Frontend Web Developer | Passionate about crafting clean codes{" "}
          <br /> and building Interactive UIs. 💻 <br /> Exploring the endless
          possibilities in the world of tech, <br /> leveraging the awesome
          power of the javascript language.
        </p>
        <div>
          <button>View My Works</button>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
}

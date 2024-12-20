import gsap from "gsap";
import React, { useRef } from "react";

import { TextPlugin } from "gsap/TextPlugin";
import Link from "next/link";
gsap.registerPlugin(TextPlugin);

const Header = () => {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const archiveRef = useRef(null);
  const titleRef = useRef(null);

  const handleHover = (ref: React.MutableRefObject<null>, text: string) => {
    gsap.to(ref.current, {
      duration: 0.5,
      text: {
        value: text,
        delimiter: "",
        // newClass: "text-neutral-500",
      },
    });
  };

  const handleMouseLeave = (
    ref: React.MutableRefObject<null>,
    originalText: string
  ) => {
    gsap.to(ref.current, {
      duration: 0.5,
      text: {
        value: originalText,
        delimiter: "",
      },
    });
  };

  return (
    <div className="px-5 h-[10dvh] uppercase text-[11px] flex fixed z-[50] top-0 left-0 w-full items-center justify-between tracking-wider">
      <Link
        href={"/"}
        ref={titleRef}
        onMouseEnter={() => handleHover(titleRef, "R Q")}
        // onMouseEnter={()=> hola()}
        onMouseLeave={() => handleMouseLeave(titleRef, "Roke")}
        className="hover:text-neutral-500 w-[50px]"
      >
        ROKE
      </Link>

      <nav className="flex items-center gap-4">
        <Link
          ref={aboutRef}
          onMouseEnter={() => handleHover(aboutRef, "(B T)")}
          onMouseLeave={() => handleMouseLeave(aboutRef, "About")}
          style={{ whiteSpace: "pre", width: "60px", textAlign: "center" }}
          className="hover:text-neutral-500"
          href={"/about"}
        >
          About
        </Link>

        <Link
          href={"/work"}
          ref={workRef}
          onMouseEnter={() => handleHover(workRef, "(W RK)")}
          onMouseLeave={() => handleMouseLeave(workRef, "Work")}
          style={{ whiteSpace: "pre", width: "60px", textAlign: "center" }}
          className="hover:text-neutral-500"
        >
          Work
        </Link>
        <Link
          href={"#"}
          ref={archiveRef}
          onMouseEnter={() => handleHover(archiveRef, "(RCH V)")}
          onMouseLeave={() => handleMouseLeave(archiveRef, "Archive")}
          style={{ whiteSpace: "pre", width: "60px", textAlign: "center" }}
          className="hover:text-neutral-500"
        >
          Archive
        </Link>
      </nav>
    </div>
  );
};

export default Header;

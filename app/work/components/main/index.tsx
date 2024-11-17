"use client";
import Header from "@/app/components/header";
import React, { useEffect } from "react";
import Lenis from "lenis";
import Footer from "@/app/components/footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Third from "@/app/components/third";
import Intro from "../intro";
import Projects from "../projects";
// import MotionPathPlugin from "gsap/MotionPathPlugin";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(MotionPathPlugin);
  // const refContainer = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // useLayoutEffect(() => {
  //   gsap.to("#movingLine", {
  //     scrollTrigger: {
  //       trigger: refContainer.current,
  //       start: "top top", // Ajuste para que se vea al ingresar
  //       end: "bottom center",
  //       scrub: 1,
  //       // markers: true,
  //     },
  //     motionPath: {
  //       path: "#myPath",
  //       align: "#myPath",
  //       alignOrigin: [0.5, 0.5],
  //       autoRotate: true,
  //     },
  //   });
  // }, []);

  return (
    <div>
      <Header />
      {/* <div
        ref={refContainer}
        className="w-full relative flex items-center pt-5 justify-center svg"
      >
        <svg
          width="400"
          height="1900"
          viewBox="0 0 290 1900"
          fill="none"
          strokeWidth={5}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="myPath"
            d="M38.0001 0.5C38.0001 0.5 229.478 72.7075 264 180C314.968 338.407 -45.5323 361.439 6.50005 519.5C46.9558 642.394 309.425 567.49 287.5 695C268.789 803.818 67.0098 721.464 38.0001 828C8.67833 935.682 182.114 958.676 190 1070C197.905 1181.6 60.8859 1220.28 73.0001 1331.5C85.9042 1449.97 248.912 1451.29 264 1569.5C282.088 1711.21 73.0001 1881.5 73.0001 1881.5"
            stroke="#191919"
          />

          <line
            id="movingLine"
            x1="0"
            y1="0"
            x2="20"
            y2="0"
            stroke="blue"
            strokeWidth="4"
          />
        </svg>
      </div> */}
      <div className="px-5">
        <Intro />
        <Projects />
        <Third />
      </div>

      <footer className="w-full px-5 pb-3 ">
        <Footer />
      </footer>
    </div>
  );
};

export default Main;

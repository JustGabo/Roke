"use client";
import React, { useEffect } from "react";
import VideoBackground from "../background";
import Lenis from "lenis";
import Header from "../header";
import Hero from "../hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Second from "../second";
import Footer from "../footer";
import Third from "../third";
// import Cursor from "../cursor";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger);
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

  return (
    <main className="">
      <VideoBackground />
      <Header />
      <div className=" px-5">
        <Hero />
        <Second/>
        <Third/>
      </div>
      <footer className="w-full px-5 pb-3 ">
        <Footer/>
      </footer>
      {/* <Cursor/> */}
    </main>
  );
};

export default Main;

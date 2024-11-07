"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const scrollTextRef = useRef(null);
  const mainContainer = useRef(null);
  const scrollTextContainer = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambia el texto utilizando GSAP
      gsap.to(scrollTextRef.current, {
        duration: 1,
        text: {
          value: "S    CR    L",
          delimiter: "",
        },
      });

      // Después de 3 segundos, vuelve a "Scroll"
      setTimeout(() => {
        gsap.to(scrollTextRef.current, {
          duration: 1,
          text: {
            value: "Scroll",
            delimiter: "",
          },
        });
      }, 2000); // Tiempo hasta que vuelva a "Scroll"
    }, 4000); // Cambia de texto cada 6 segundos

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(scrollTextContainer.current, {
      opacity: 0,
    });

    // Limpieza
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={mainContainer}
      className="flex items-center justify-center w-full relative h-[100dvh]"
    >
      <div className="flex flex-col font-semibold gap-2 text-xs uppercase w-[23%]">
        <div className="flex items-center justify-between">
          <p>D&nbsp;&nbsp;S&nbsp;&nbsp;GN</p>
          <p style={{ whiteSpace: "pre" }} className="text-neutral-500">
            {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"Art Director"}
            &nbsp;&nbsp;&nbsp;&nbsp;{")"}
          </p>
          <p>DR&nbsp;&nbsp;CT&nbsp;&nbsp;&nbsp;R</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex justify-between w-[50%]">
            <div className="flex items-center ">
              <p>
                L&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-neutral-500">
                  {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"CANADA"}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {")"}
                </span>
              </p>
            </div>

            <p className="">C</p>
          </div>

          <p className="">T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N</p>
        </div>

        <div className="flex items-center justify-between">
          <p>P&nbsp;&nbsp;&nbsp;&nbsp;R</p>
          <p className="text-neutral-500 font-semibold scale-[1.1]">
            {"("}&nbsp;&nbsp;&nbsp;&nbsp;
            {"2024"}&nbsp;&nbsp;&nbsp;&nbsp;
            {")"}
          </p>
          <p>TF&nbsp;&nbsp;&nbsp;&nbsp;L</p>
        </div>
      </div>

      <div
        ref={scrollTextContainer}
        className="absolute bottom-[5dvh] w-full text-xs font-medium uppercase flex items-center justify-center"
      >
        <p className="">{"("}&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p
          style={{ opacity: 1 }}
          ref={scrollTextRef}
          className="w-[60px]  text-center text-neutral-500"
        >
          Scroll
        </p>
        <p className="">&nbsp;&nbsp;&nbsp;&nbsp;{")"}</p>
      </div>
    </div>
  );
};

export default Hero;

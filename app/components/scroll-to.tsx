import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollTo = () => {
  const scrollTextRef = useRef(null);
  const scrollTextContainer = useRef(null);

  useLayoutEffect(() => {
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
        trigger: scrollTextContainer.current,
        start: "top 80%",
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
  );
};

export default ScrollTo;

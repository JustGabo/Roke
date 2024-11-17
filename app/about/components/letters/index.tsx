"use client";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Letters = () => {
  const mainContainer = useRef(null);
  const text = "design & art director";
  const secondText = "based in canada";
  const splitRef = useRef<(HTMLSpanElement | null)[]>([]);
  const secondSplitRef = useRef<(HTMLSpanElement | null)[]>([]);
  const words = text.split(" ");
  const secondWords = secondText.split(" ");
  const firstTextContainerRef = useRef(null);
  const secondTextContainerRef = useRef(null);

  const linesContainer = useRef(null);
  const firstLine = useRef(null);
  const secondLine = useRef(null);
  const thirdLine = useRef(null);
  const fourthLine = useRef(null);
  const fifthLine = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: linesContainer.current,
        start: "top 95%",
      },
    });

    tl.to(firstLine.current, {
      y: 0,
      opacity: 1,
      duration: 0.2,
    })
      .to(secondLine.current, {
        y: 0,
        opacity: 1,
        duration: 0.2,
      })
      .to(thirdLine.current, {
        y: 0,
        opacity: 1,
        duration: 0.2,
      })
      .to(fourthLine.current, {
        y: 0,
        opacity: 1,
        duration: 0.2,
      })
      .to(fifthLine.current, {
        y: 0,
        opacity: 1,
        duration: 0.2,
      });

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: mainContainer.current,
    //     start: "top 80%",
    //     end: "bottom 80%",
    //     scrub: true,
    //   },
    // });

    // gsap.to(tnTextContainer.current, {
    //   scrollTrigger: {
    //     trigger: tnTextContainer.current,
    //     start: "top bottom",
    //     end: "top 85%",
    //     scrub: true,
    //   },
    //   y: 0,
    //   opacity: 1,
    // });

    gsap.to(splitRef.current, {
      scrollTrigger: {
        trigger: firstTextContainerRef.current,
        scrub: true,
        start: `top 70%`,
        end: `+=${window.innerHeight / 2} top`,
        // markers: true,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.2,
    });

    gsap.to(secondSplitRef.current, {
      scrollTrigger: {
        trigger: secondTextContainerRef.current,
        scrub: true,
        start: `top 70%`,
        end: `+=${window.innerHeight / 2} top`,
        // markers: true,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.2,
    });

    // gsap.to(secondSplitRef.current, {
    //   scrollTrigger: {
    //     trigger: secondTextContainerRef.current,
    //     scrub: true,
    //     start: `top 80%`,
    //     end: `+=${window.innerHeight / 2} 70%`,
    //     // markers: true,
    //   },
    //   opacity: 1,
    //   ease: "none",
    //   stagger: 0.2,
    // });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainContainer} className="flex flex-col gap-10">
      <div ref={firstTextContainerRef} className="w-[70dvw]">
        {words.map((word, i) => {
          return (
            <span key={i} className="relative">
              <span
                className="text-[16dvw] opacity-0 leading-[.7em] uppercase"
                ref={(el) => {
                  splitRef.current[i] = el;
                }}
              >
                {word + " "}
              </span>
            </span>
          );
        })}
      </div>
      <div
        ref={linesContainer}
        className="w-[25%] m-auto text-neutral-400 text-sm tracking-wider mt-5 uppercase flex flex-col items-center"
      >
        <p className="transform translate-y-5 opacity-0" ref={firstLine}>
          Driven by a spirit of
        </p>
        <p className="transform translate-y-5 opacity-0" ref={secondLine}>
          curiosity, her interests
        </p>
        <p className="transform translate-y-5 opacity-0" ref={thirdLine}>
          encompass language arts,
        </p>
        <p className="transform translate-y-5 opacity-0" ref={fourthLine}>
          literature, visual design,
        </p>
        <p className="transform translate-y-5 opacity-0" ref={fifthLine}>
          film and music.
        </p>
      </div>

      <div ref={secondTextContainerRef} className="flex flex-col items-end">
        {secondWords.map((word, i) => {
          return (
            <span key={i} className="relative">
              <span
                className="text-[16dvw] opacity-0 leading-[.8em] uppercase"
                ref={(el) => {
                  secondSplitRef.current[i] = el;
                }}
              >
                {word + " "}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Letters;

import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Second = () => {
  const text = "All extremes of feeling are allied";
  const text2 = "With Madness";
  const mainContainer = useRef(null);
  const splitRef = useRef<(HTMLSpanElement | null)[]>([]);
  const secondSplitRef = useRef<(HTMLSpanElement | null)[]>([]);
  const words = text.split(" ");
  const secondWords = text2.split(" ");
  const firstTextContainerRef = useRef(null);
  const secondTextContainerRef = useRef(null);
  const tnTextContainer = useRef(null);
  //   const text2SplitWords = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: mainContainer.current,
    //     start: "top 80%",
    //     end: "bottom 80%",
    //     scrub: true,
    //   },
    // });

    gsap.to(tnTextContainer.current, {
      scrollTrigger: {
        trigger: tnTextContainer.current,
        start: "top bottom",
        end: "top 85%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
    });

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
        start: `top 80%`,
        end: `+=${window.innerHeight / 2} 70%`,
        // markers: true,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainContainer} className=" flex flex-col ">
      <div ref={firstTextContainerRef}>
        {words.map((word, i) => {
          return (
            <span key={i} className="relative">
              <span
                className="text-[16dvw] opacity-0 leading-[.8em] uppercase"
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

      <div ref={secondTextContainerRef} className="flex flex-col items-end">
        <div className="flex flex-col">
          {secondWords.map((word, i) => {
            return (
              <span
                ref={secondTextContainerRef}
                key={i}
                className="relative text-end"
              >
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
        <div
          ref={tnTextContainer}
          className="flex items-center opacity-0 transform translate-y-[15px]  justify-between w-[30%] uppercase text-xs mt-10"
        >
          <div className="flex gap-5">
            <p className="">T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N</p>

            <p className="text-neutral-500">
              {"("}
              &nbsp;&nbsp;&nbsp;&nbsp;{"Virginia"}&nbsp;&nbsp;&nbsp;&nbsp;
              {"woolf"},&nbsp;&nbsp;&nbsp;&nbsp;{"orlando"}
              &nbsp;&nbsp;&nbsp;&nbsp;
              {")"}
            </p>
          </div>
          <p className="scale-[1.1]">
            19&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;8
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;

// const Word = ({ children }: { children: string }) => {
//   const characters = children.split("");
//   return (
//     <p>
//       {characters.map((char, i) => {
//         return <span key={i}>{char}</span>
//         // return <Character  key={i}>{char}</Character>;
//       })}
//     </p>
//   );
// };

// const Character = ({ children }: { children: string }) => {
//   return <span>{children}</span>;
// };

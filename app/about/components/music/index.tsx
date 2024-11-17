import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Music = () => {
  const text = "like a daydream";
  const secondText = "or a fever";
  const words = text.split(" ");
  const secondWords = secondText.split(" ");
  const splitRef = useRef<(HTMLSpanElement | null)[]>([]);
  const secondSplitRef = useRef<(HTMLSpanElement | null)[]>([]);
  const firstTextContainerRef = useRef(null);
  const secondTextContainerRef = useRef(null);
  const soundsContainer = useRef(null);
  const listenContainer = useRef(null);
  const goodbyeContainer = useRef(null);

  const mainContainer = useRef(null);

  useLayoutEffect(() => {
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

    gsap.to(soundsContainer.current, {
      scrollTrigger: {
        trigger: soundsContainer.current,
        start: "top 90%",
        end: "top 80%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
    });

    gsap.to(listenContainer.current, {
      scrollTrigger: {
        trigger: listenContainer.current,
        start: "top 90%",
        end: "top 80%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
    });

    gsap.to(goodbyeContainer.current, {
      scrollTrigger: {
        trigger: goodbyeContainer.current,
        start: "top 90%",
        end: "top 80%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
    });

    gsap.to(splitRef.current, {
      scrollTrigger: {
        trigger: firstTextContainerRef.current,
        scrub: true,
        start: `top 80%`,
        end: `+=${window.innerHeight / 2} center`,
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
        end: `+=${window.innerHeight / 2} center`,
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
    <div
      ref={mainContainer}
      className="flex uppercase flex-col overflow-hidden gap-5 mt-44"
    >
      <div
        ref={soundsContainer}
        className="flex w-full transform translate-y-5 opacity-0  justify-center text-xs"
      >
        <div className="flex items-center gap-10">
          <p>MC&nbsp;&nbsp;&nbsp;&nbsp;C</p>
          <p className="text-neutral-400">
            {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"sounds"}&nbsp;&nbsp;&nbsp;&nbsp;{")"}
          </p>
          <p>lyrics</p>
        </div>
      </div>
      <div ref={firstTextContainerRef} className="w-[70dvw]">
        {words.map((word, i) => {
          return (
            <span key={i} className="relative">
              <span
                className="text-[15dvw] opacity-0 mr-28 leading-[.9em] uppercase"
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
        ref={listenContainer}
        className="flex w-full transform translate-y-5 opacity-0 justify-center mt-16 mb-6 text-sm"
      >
        <div className="flex items-center gap-10">
          <p className="text-neutral-400 tracking-wider">
            {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"listen"}&nbsp;&nbsp;&nbsp;&nbsp;{")"}
          </p>
        </div>
      </div>

      <div ref={secondTextContainerRef} className="w-[70%] text-end ml-auto">
        {secondWords.map((word, i) => {
          return (
            <span key={i} className="relative">
              <span
                className="text-[17dvw] opacity-0  leading-[.9em] uppercase"
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
        ref={goodbyeContainer}
        className="flex w-full transform translate-y-5 opacity-0 justify-end text-sm"
      >
        <div className="flex items-center gap-10">
          <p>F#&nbsp;&nbsp;&nbsp;&nbsp;A#</p>
          <p className="text-neutral-400">
            {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"GY!"}&nbsp;&nbsp;&nbsp;&nbsp;{"BE"}
            &nbsp;&nbsp;&nbsp;&nbsp;{")"}
          </p>
          <p className="text-sm">
            19&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;&nbsp;7
          </p>
        </div>
      </div>
    </div>
  );
};

export default Music;

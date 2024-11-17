"use client";
import React, { useRef } from "react";
import ScrollTo from "../scroll-to";

// gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const mainContainer = useRef(null);

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

      <ScrollTo />
    </div>
  );
};

export default Hero;

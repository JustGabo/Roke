import ScrollTo from "@/app/components/scroll-to";
import Image from "next/image";
import React from "react";

const ImageAbout = () => {
  return (
    <div className="flex items-center justify-center w-full relative h-[100dvh]">
      <div className="flex flex-col gap-3 items-center w-[20dvw]  h-[50%]">
        <div className="flex items-center w-full justify-between uppercase text-xs">
          <p>D&nbsp;&nbsp;&nbsp;S&nbsp;&nbsp;&nbsp;GN</p>
          <p className="text-neutral-500">
            {"("}&nbsp;&nbsp;&nbsp;
            {"Art Director"}&nbsp;&nbsp;&nbsp;
            {")"}
          </p>
          <p>DR&nbsp;&nbsp;&nbsp;CT&nbsp;&nbsp;&nbsp;R</p>
        </div>

        <div className="w-full h-full relative">
          <Image
            src={"/files/girl.jfif"}
            alt="image"
            fill
            className="object-cover"
            style={{ filter: "grayscale(1)" }}
          />
        </div>
      </div>
      <ScrollTo/>
      {/* <div className="absolute bottom-[5dvh] w-full text-xs font-medium uppercase  flex items-center justify-center">
        <p className="">{"("}&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p
          style={{ opacity: 1 }}
          className="w-[60px]  text-center text-neutral-500"
        >
          Scroll
        </p>
        <p className="">&nbsp;&nbsp;&nbsp;&nbsp;{")"}</p>
      </div> */}
    </div>
  );
};

export default ImageAbout;

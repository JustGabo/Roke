import Image from "next/image";
import React from "react";

const Third = () => {
  return (
    <div className="h-[100dvh] uppercase w-full flex items-center justify-between">
      <div className="flex  flex-col gap-3 w-[15%]">
        <h3 className="text-sm">project</h3>

        <ul className="flex flex-col text-xs font-medium tracking-wider text-neutral-500">
          <li>Just</li>
          <li>Believe</li>
          <li>In yourself</li>
        </ul>
      </div>

      <div className="w-[70%]  h-full flex items-center gap-10 justify-center">
        <p className="text-neutral-500">{"("}</p>
        <div className="relative w-[20%] h-[40%]">
          <Image
            src={"/files/image.jpg"}
            fill
            alt="image"
            className="object-cover"
            style={{ filter: "grayscale(1)" }}
          />
        </div>
        <p className="text-neutral-500">{")"}</p>
      </div>

      <div className="w-[15%]">
        <p className="text-end w-full text-sm">One of you</p>
      </div>
    </div>
  );
};

export default Third;

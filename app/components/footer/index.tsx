import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center uppercase text-xs justify-between">
      <div className="flex flex-col gap-2 items-start w-[200px]">
        <p>
          {"("}&nbsp;&nbsp;&nbsp;&nbsp;socials&nbsp;&nbsp;&nbsp;&nbsp;{")"}
        </p>
        <p className="text-neutral-500">
          Ig&nbsp;&nbsp;&nbsp;&nbsp;li&nbsp;&nbsp;&nbsp;&nbsp;tw&nbsp;&nbsp;&nbsp;&nbsp;sa
        </p>
      </div>

      <div className="flex flex-col gap-2 items-center w-full">
        <p>
          {"("}
          &nbsp;&nbsp;&nbsp;&nbsp;react&nbsp;&nbsp;&nbsp;&nbsp;out&nbsp;&nbsp;&nbsp;&nbsp;
          {")"}
        </p>
        <p className="text-neutral-500">ovallegabriel@gmail.com</p>
      </div>

      <div className="flex flex-col gap-2 items-end w-[200px]">
        <p>
          {"("}&nbsp;&nbsp;&nbsp;&nbsp;development&nbsp;&nbsp;&nbsp;&nbsp;{")"}
        </p>
        <p className="text-neutral-500">
          yannis&nbsp;&nbsp;&nbsp;&nbsp;yannakopulos
        </p>
      </div>
    </footer>
  );
};

export default Footer;

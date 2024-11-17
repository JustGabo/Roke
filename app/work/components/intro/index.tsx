import React from "react";

const Intro = () => {
  return (
    <div className="h-[50dvh] flex uppercase justify-center items-end w-full">
      <div className="w-full flex flex-col items-center justify-center gap-1 text-xs  h-[50%] ">
        <div className="flex items-center gap-3">
          <p className="select">W&nbsp;&nbsp;rk</p>
          <p className="text-neutral-500 select">
            {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"A"}&nbsp;&nbsp;&nbsp;&nbsp;
            {"selection"}&nbsp;&nbsp;&nbsp;&nbsp;{")"}
          </p>
          <p className="text-sm select">2024</p>
        </div>

        <div className="flex items-center  gap-3">
          <p className="text-neutral-500 select">
            {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"11"}&nbsp;&nbsp;&nbsp;&nbsp;{")"}
            &nbsp;&nbsp;
            <span className="text-white select">{"prj"}</span>
          </p>
          <p className="select">CTS & XLP</p>
          <p className="select">R</p>
          <p className="select">TNS</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

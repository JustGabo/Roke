import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Info = () => {
  const accomplishments = [
    {
      accomplishment: "AWWWARDS SOTD",
      amount: 10,
    },
    {
      accomplishment: "AWWWARDS HM",
      amount: 11,
    },
    {
      accomplishment: "AWWWARDS SOTM",
      amount: 5,
    },
    {
      accomplishment: "AWWWARDS Honors Typography",
      amount: 1,
    },
    {
      accomplishment: "AWWWARDS SOTM Nominee",
      amount: 2,
    },
    {
      accomplishment: "ccss",
      amount: 3,
    },
    {
      accomplishment: "fwa",
      amount: 1,
    },
    {
      accomplishment: "WEBBY winner",
      amount: 1,
    },
    {
      accomplishment: "Idéa",
      amount: 5,
    },
    {
      accomplishment: "MINDSPARKLE MAG",
      amount: 1,
    },
    {
      accomplishment: "Site of the year nominee",
      amount: 1,
    },
    {
      accomplishment: "Independent of the year nominee",
      amount: 1,
    },
    {
      accomplishment: "Agency of the year (locomotive)",
      amount: 3,
    },
    {
      accomplishment: "Maxibestof",
      amount: 2,
    },
    {
      accomplishment: "Siteinspire",
      amount: 3,
    },
  ];

  const infoLine = useRef(null);
  const getInTouchLine = useRef(null);
  const servicesLine = useRef(null);
  const clientsLine = useRef(null);
  const awardsLine = useRef(null);

  useLayoutEffect(() => {
    gsap.to(infoLine.current, {
      scrollTrigger: {
        trigger: infoLine.current,
        start: "top 95%",
      },
      width: "100%",
    });

    gsap.to(getInTouchLine.current, {
      scrollTrigger: {
        trigger: getInTouchLine.current,
        start: "top 95%",
      },
      width: "100%",
    });

    gsap.to(servicesLine.current, {
      scrollTrigger: {
        trigger: servicesLine.current,
        start: "top 95%",
      },
      width: "100%",
    });

    gsap.to(clientsLine.current, {
      scrollTrigger: {
        trigger: clientsLine.current,
        start: "top 95%",
      },
      width: "100%",
    });

    gsap.to(awardsLine.current, {
      scrollTrigger: {
        trigger: awardsLine.current,
        start: "top 95%",
      },
      width: "100%",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const infoContainer = useRef(null);
  const getInTouchContainer = useRef(null);
  const servicesContainer = useRef(null);
  const clientsContainer = useRef(null);
  const awardsContainer = useRef(null);

  return (
    <div className="flex  flex-col uppercase pt-32 text-[13px] w-[85dvw]">
      <div ref={infoContainer} className="flex gap-3 flex-col w-[40dvw]">
        <div className="flex items-center gap-10">
          <p>I</p>

          <div className="flex items-center gap-5">
            <p className="text-neutral-400">
              {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"Information"}
              &nbsp;&nbsp;&nbsp;&nbsp;{")"}
            </p>
            <p>about</p>
          </div>
        </div>

        <div className="p-7 relative flex flex-col gap-5 tracking-wider font-medium text-balance">
          <div
            ref={infoLine}
            className="w-[40%] left-0 h-[1px] bg-neutral-500 absolute top-0"
          />
          <div className="w-[1px] left-0 h-[40%] bg-neutral-500 absolute top-0" />
          <p className="select">
            Isabel is an independent Design and Art Director based in Canada.
            She has previously worked at Locomotive as an Art Director and at
            Monks as a Design Director.
          </p>
          <p className="select">
            Driven by a spirit of curiosity, Her interests encompass language,
            the arts, literature, visual design, digital media, and music.With a
            particular passion for editorial design and typography experiments,
            Isabel creates powerful visuals and rich aesthetics, pushing beyond
            mainstream design norms to explore typographic layouts and
            compositions.
          </p>
          <p className="select">
            Her portfolio includes digital experiences, art direction, creative
            strategy, branding, and visual identities. Globally recognized and
            awarded, Isabel works at the intersection of design, art, and
            photography. She has collaborated with a range of international
            clients, including Balmain Beauty, Amazon, Estée Lauder, Apple,
            ECCO, and Munchkin.
          </p>
        </div>
      </div>

      <div
        ref={getInTouchContainer}
        className="flex gap-3 ml-auto flex-col h-[35dvh] w-[40dvw]"
      >
        <div className="flex items-center gap-7">
          <p className="select">G</p>

          <div className="flex items-center select gap-5">
            <p className="text-neutral-400 select">
              {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"get"}
              &nbsp;&nbsp;&nbsp;&nbsp;{"in"}
              &nbsp;&nbsp;&nbsp;&nbsp;{"touch"}
              &nbsp;&nbsp;&nbsp;&nbsp;{")"}
            </p>
            <p className="select">reach out</p>
          </div>
        </div>

        <div className="p-7 relative flex flex-col h-full tracking-wider font-medium text-balance">
          <div
            ref={getInTouchLine}
            className="w-[40%] left-0 h-[1px] bg-neutral-500 absolute top-0"
          />
          <div className="w-[1px] left-0 h-[60%] bg-neutral-500 absolute top-0" />
          <p className="select">
            Get in touch&nbsp;&nbsp;
            <Link className="text-neutral-400 hover:text-white" href={"#"}>
              isabel.moranta@gmail.com
            </Link>
          </p>
          <p className="select">
            Instagram&nbsp;&nbsp;
            <Link className="text-neutral-400 hover:text-white" href={"#"}>
              @isabelmoranta
            </Link>
          </p>
          <p className="select">
            LinkedIn&nbsp;&nbsp;
            <Link className="text-neutral-400 hover:text-white" href={"#"}>
              Isabel Moranta
            </Link>
          </p>
        </div>
      </div>

      <div
        ref={servicesContainer}
        className="flex gap-3  flex-col h-[35dvh] w-[40dvw]"
      >
        <div className="flex items-center gap-7">
          <p className="select">S</p>

          <div className="flex items-center select gap-5">
            <p className="text-neutral-400 select">
              {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"services"}
              &nbsp;&nbsp;&nbsp;&nbsp;{")"}
            </p>
            <p className="select">Skills</p>
          </div>
        </div>

        <div className="p-7 relative flex flex-col h-full tracking-wider font-medium text-balance">
          <div
            ref={servicesLine}
            className="w-[40%] left-0 h-[1px] bg-neutral-500 absolute top-0"
          />
          <div className="w-[1px] left-0 h-[60%] bg-neutral-500 absolute top-0" />

          <div className="flex gap-5">
            <div className="flex flex-col">
              <p className="select">Web design</p>
              <p className="select text-neutral-400">Social Media</p>
            </div>

            <div className="flex flex-col">
              <p className="select text-neutral-400">Art direction</p>
              <p className="select">Creative</p>
              <p className="select">Direction</p>
            </div>

            <div className="flex flex-col">
              <p className="select">Visual identity</p>
              <p className="select text-neutral-400">E-Commerce</p>
            </div>

            <div className="flex flex-col">
              <p className="select text-neutral-400">Branding</p>
              <p className="select">packaging</p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={clientsContainer}
        className="flex gap-3 ml-auto flex-col h-[35dvh] w-[40dvw]"
      >
        <div className="flex items-center gap-7">
          <p className="select">C</p>

          <div className="flex items-center select gap-5">
            <p className="text-neutral-400 select">
              {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"clients"}
              &nbsp;&nbsp;&nbsp;&nbsp;{")"}
            </p>
            <p className="select">collaborations</p>
          </div>
        </div>

        <div className="p-7 relative flex h-full flex-col tracking-wider font-medium text-balance">
          <div
            ref={clientsLine}
            className="w-[40%] left-0 h-[1px] bg-neutral-500 absolute top-0"
          />
          <div className="w-[1px] left-0 h-[60%] bg-neutral-500 absolute top-0" />

          <div className="flex gap-5">
            <div className="flex flex-col">
              <p className="select">Toyota</p>
              <p className="select text-neutral-400">balmain</p>
              <p className="select">instrument</p>
            </div>

            <div className="flex flex-col">
              <p className="select text-neutral-400">apple music</p>
              <p className="select">Nike</p>
              <p className="select text-neutral-400">impossible</p>
              <p className="select text-neutral-400">foods</p>
            </div>

            <div className="flex flex-col">
              <p className="select">ecco</p>
              <p className="select text-neutral-400">Estée lauder</p>
            </div>

            <div className="flex flex-col">
              <p className="select text-neutral-400">amazon</p>
              <p className="select">munchkin</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={awardsContainer} className="flex gap-3  flex-col w-[40dvw]">
        <div className="flex items-center gap-7">
          <p className="select">A</p>

          <div className="flex items-center select gap-5">
            <p className="text-neutral-400 select">
              {"("}&nbsp;&nbsp;&nbsp;&nbsp;{"awards"}
              &nbsp;&nbsp;&nbsp;&nbsp;{")"}
            </p>
            <p className="select">accomplishments</p>
          </div>
        </div>

        <div className="p-7 relative flex flex-col tracking-wider font-medium text-balance">
          <div
            ref={awardsLine}
            className="w-[40%] left-0 h-[1px] bg-neutral-500 absolute top-0"
          />
          <div className="w-[1px] left-0 h-[40%] bg-neutral-500 absolute top-0" />

          <div className="flex flex-col">
            {accomplishments.map((data, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center h-min justify-between w-[90%]"
                >
                  <p className="select leading-3">{data.accomplishment}</p>
                  <div className="w-[50px]">
                    <p>
                      X&nbsp;&nbsp;
                      <span className="text-lg leading-3">{data.amount}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

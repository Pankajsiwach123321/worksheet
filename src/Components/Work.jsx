"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Work = () => {
  const myMonth = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const monthData = {
    JANUARY: [
      {
        number: 1,
        img: "/image/dong-kong.png",
        what: "DOMPKONG",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/DompKong.git",
        velink: "https://domp-kong.vercel.app/",
      },
      {
        number: 2,
        img: "/image/wuaocoin.png",
        what: "Wuao Coin",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/wuacion.git",
        velink: "https://wuacion.vercel.app/",
      },
      {
        number: 3,
        img: "/image/urbannft.png",
        what: "Urban Nft",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: " https://github.com/Pankajsiwach123321/urban-desktop.git",
        velink: "https://urban-desktop.vercel.app/",
      },
      {
        number: 4,
        img: "/image/furniture.png",
        what: "Furniture",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/FURNITURE.git",
        velink: "https://furniture-sigma-five.vercel.app/",
      },
      {
        number: 5,
        img: "/image/lemonwares.png",
        what: "Lamon Wares",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/lemon-wares.git",
        velink: "https://lemon-wares-rose.vercel.app/",
      },
      {
        number: 6,
        img: "/image/countdown.png",
        what: "TODO + ADVANCECOUNTER",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/todo_counter.git",
        velink: "https://todo-counter.vercel.app/",
      },
    ],
    FEBRUARY: [
      {
        number: 1,
        img: "/image/exclusive.png",
        what: "EXCLUSIVE-GAMES",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/casino.git",
        velink: "https://casino-lime-alpha.vercel.app/",
      },
      {
        number: 2,
        img: "/image/dinolfg.png",
        what: "Dino-LFG",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/Dinolfg.git",
        velink: "https://dinolfg-seven.vercel.app/",
      },
      {
        number: 3,
        img: "/image/nax-ai.png",
        what: "NEX-AI",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: " https://github.com/Pankajsiwach123321/nexai.git",
        velink: "https://nexai-topaz.vercel.app/",
      },
      {
        number: 4,
        img: "/image/calculater.png",
        what: "CALCULATER",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/calculator.git",
        velink: "https://calculator-zeta-puce.vercel.app/",
      },
      {
        number: 5,
        img: "/image/nax-ai.png",
        what: "NEX-AI_BOOTSTRAP",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/nexAibootstrap.git",
        velink: "https://nex-aibootstrap.vercel.app/",
      },
    ],
    MARCH: [
      {
        number: 1,
        img: "/image/htmlvalidation.png",
        what: "Form validation in html",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink:
          " https://github.com/Pankajsiwach123321/FromValidation-HTML-js.git",
        velink: "https://from-validation-html-js.vercel.app/",
      },
      {
        number: 2,
        img: "/image/reactvalidation.png",
        what: "Form validation in React",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink:
          "https://github.com/Pankajsiwach123321/fromvalidation-react.git",
        velink: "https://fromvalidation-react.vercel.app/",
      },
      {
        number: 3,
        img: "/image/swiperreact.png",
        what: "Swiper In React",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: " https://github.com/Pankajsiwach123321/swiperreact.git",
        velink: "https://swiperreact-kappa.vercel.app/",
      },
      {
        number: 4,
        img: "/image/swiperhtml.png",
        what: "Swiper in HTML",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/swiperhtml.git",
        velink: "https://swiperhtml-theta.vercel.app/",
      },
      {
        number: 5,
        img: "/image/practicenextjs.png",
        what: "Practice next.js",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: " https://github.com/Pankajsiwach123321/Practrice-next.git",
        velink: "https://practrice-next.vercel.app/",
      },
      {
        number: 6,
        img: "/image/cloopp.png",
        what: "Cloopp page",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: " https://github.com/Pankajsiwach123321/cloopp.git",
        velink: "https://cloopp-tau.vercel.app/",
      },
      {
        number: 7,
        img: "/image/labs248.png",
        what: "Labs248 Page",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: " https://github.com/Pankajsiwach123321/Labs248.git",
        velink: "https://labs248.vercel.app/",
      },
      {
        number: 8,
        img: "/image/vitehtml.png",
        what: "HTML Page In Vite",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/record-vite.git",
        velink: "https://record-vite.vercel.app/",
      },
    ],
    APRIL: [
      {
        number: 1,
        what: "e-commerce",
        img: "/image/ecommerce.png",
        github: "GIT HUB LINK :-",
        vercel: "LIVE LINK :-",
        gitlink: "https://github.com/Pankajsiwach123321/e-commerce.git",
        velink: "https://e-commerce-phi-swart.vercel.app/",
      },
    ],
    MAY: [
      {
        number: 1,
        what: "COMING SOON",
        img: "/image/comming-soon.png",
      },
    ],
    JUNE: [
      {
        number: 1,
        what: "COMING SOON",
        img: "/image/comming-soon.png",
      },
    ],
    JULY: [
      {
        number: 1,
        what: "COMING SOON",
        img: "/image/comming-soon.png",
      },
    ],
    AUGUST: [
      {
        number: 1,
        what: "COMING SOON",
        img: "/image/comming-soon.png",
      },
    ],
    SEPTEMBER: [
      {
        number: 1,
        what: "COMING SOON",
        img: "/image/comming-soon.png",
      },
    ],
    OCTOBER: [
      {
        number: 1,
        what: "COMING SOON",
        img: "/image/comming-soon.png",
      },
    ],
    NOVEMBER: [
      {
        number: 1,
        what: "COMING SOON",
        img: "/image/comming-soon.png",
      },
    ],
    DECEMBER: [
      {
        number: 1,
        what: "COMING SOON",
        img: "/image/comming-soon.png",
      },
    ],
  };
  const [Month, setMonth] = useState(null);

  function changeMonth(e) {
    setMonth(e);
    localStorage.setItem("selectedMonth", e);
  }
  useEffect(() => {
    const storedMonth = localStorage.getItem("selectedMonth");
    if (storedMonth !== Month) {
      setMonth(storedMonth);
    } else {
      setMonth(myMonth[new Date().getMonth()]);
    }
  }, []);
  return (
    <section className=" bg-black h-custum">
      <div className="pl-[212px] pr-3">
        <div className="   fixed left-0 top-[84px]  bottom-0 overflow-y-scroll z-[1]  border-2 rounded-2xl inline-block border-[#4affd2] group  min-w-[200px]">
          {myMonth.map((arr, i) => (
            <p
              key={i}
              onClick={() => {
                changeMonth(`${arr}`);
              }}
              className={`${
                Month == `${arr}` &&
                " opacity-80 !text-[#9046ff] !border-[#9046ff]"
              }   cursor-pointer py-2 mx-2 my-8 border rounded-[16px]  border-white text-center  text-white duration-300 hover:text-[#9046ff] hover:border-[#9046ff]`}
            >
              {arr}
            </p>
          ))}
        </div>
        <div className=" border p-5 overflow-auto h-custum  border-[#4affd2]  rounded-2xl">
          {monthData[Month] &&
            monthData[Month].map((arr, i, lo) => (
              <div
                key={i}
                className=" flex  py-5 items-center flex-nowrap flex-row -mx-3"
              >
                <div className=" w-1/3 px-3">
                  <h2 className=" text-[#9046ff] text-2xl">
                    {arr.number}
                    {"."} {arr.what}
                  </h2>
                </div>
                <div className=" w-2/3 px-3">
                  <div className=" flex items-center h-full w-full gap-3">
                    <Image
                      src={arr.img}
                      height={100}
                      width={100}
                      className=" object-cover rounded-2xl w-[150px]  h-[130px]"
                    />
                    <div>
                      <div className=" flex gap-3 items-center">
                        <p className="text-[#9046ff] text-nowrap">
                          {arr.github}
                        </p>
                        <a
                          target="_blank"
                          className=" hover:text-white duration-300 text-decoration-none text-[#45fffc9e] "
                          href={arr.gitlink}
                        >
                          {arr.gitlink}
                        </a>
                      </div>
                      <div className=" flex gap-3 items-center">
                        <p className="text-[#9046ff] text-nowrap">
                          {arr.vercel}
                        </p>
                        <a
                          target="_blank"
                          className=" hover:text-white duration-300 text-decoration-none text-[#45fffc9e] "
                          href={arr.velink}
                        >
                          {arr.velink}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

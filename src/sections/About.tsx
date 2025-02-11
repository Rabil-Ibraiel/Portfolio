"use client";

import Card from "@/components/Card";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ChromIcon from "@/assets/icons/chrome.svg";
import ReactIcon from "@/assets/icons/react.svg";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";
import map from "@/assets/images/map.webp";
import memojiSmile from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { useRef } from "react";

export const AboutSection = () => {
  const constraindRef = useRef(null);
  const toolbox = [
    {
      title: "JavaScript",
      iconType: JavaScriptIcon,
    },
    {
      title: "Html",
      iconType: HtmlIcon,
    },
    {
      title: "Css",
      iconType: CssIcon,
    },
    {
      title: "React",
      iconType: ReactIcon,
    },
    {
      title: "Chrom",
      iconType: ChromIcon,
    },
  ];

  const hobbies = [
    {
      title: "Gaming",
      emoji: "🎮",
      top: "1%",
      left: "5%",
    },
    {
      title: "Reading",
      emoji: "📖",
      top: "50%",
      left: "5%",
    },
    {
      title: "Designing",
      emoji: "🎨",
      top: "25%",
      left: "35%",
    },
    {
      title: "Programming",
      emoji: "👨‍💻",
      top: "70%",
      left: "45%",
    },
  ];

  return (
    <div className="py-16 lg:py-24 " id="about">
      <div className="container center-container">
        <p className="sub-title">about me</p>
        <h2 className="title">A Glimpse Into My World</h2>
        <p className="desc">
          Learn more about who am i, what i do, and what inspires me.
        </p>

        <div className="mt-16 lg:mt-24 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] col-span-1 md:col-span-2 lg:col-span-1">
              <CardHeader
                title={"My Reads"}
                desc={"Explore my Books shaping my prespectives."}
              />
              <div className="w-40 mx-auto mt-6">
                <Image src={bookImage} alt="Book" />
              </div>
            </Card>

            <Card className="h-[320px] col-span-1 md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"My Toolbox"}
                desc={
                  "Explore the technologies I use to craft exceptional digital experiences."
                }
              />
              <ToolBoxItems
                items={toolbox}
                className="mt-8"
                wrapperClassName={
                  "animate-move-left [animation-duration:10s] pr-8"
                }
              />
              <ToolBoxItems
                items={toolbox}
                className="mt-6"
                wrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:10s] pr-8"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] flex flex-col col-span-1 md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"Beyond the Code"}
                desc={"Explore my interests and hobbies."}
              />
              <div className="flex flex-1 relative mt-8" ref={constraindRef}>
                {hobbies.map((item) => (
                  <motion.div
                    key={item.title}
                    className="bg-gradient-to-r cursor-grab from-emerald-300 to-sky-400 rounded-full py-2 px-6 flex items-center gap-2 flex-row-reverse absolute"
                    style={{
                      top: item.top,
                      left: item.left,
                    }}
                    drag
                    dragConstraints={constraindRef}
                  >
                    <span>{item.emoji}</span>
                    <span className="font-semibold text-gray-950">
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] flex relative col-span-1 md:col-span-2 lg:col-span-1 ">
              <div className="rounded-full absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400  rounded-full -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400  rounded-full -z-20 animate-ping-big [animation-duration:1s]"></div>
                </div>
                <Image
                  src={memojiSmile}
                  alt="Memoji smile"
                  className=" size-20"
                />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 ">
                  <div className="bg-black px-2 py-0.5 rounded relative">
                    <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold text-lg tracking-wide uppercase ">
                      Erbil
                    </span>
                  </div>
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-l-[10px] border-l-transparent
  border-t-[15px] border-t-black
  border-r-[10px] border-r-transparent"
                  />
                </div>
              </div>
              <Image
                src={grainImage}
                alt="grain"
                className="opacity-15 absolute inset-0 h-full w-full -z-10"
              />
              <Image
                src={map}
                alt="Map"
                className="w-full h-full object-cover -z-20"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import garinImage from "@/assets/images/grain.jpg";
import StarHeroOrbet from "@/components/StarHeroOrbet";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60  relative overflow-x-clip z-0">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className=" absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${garinImage.src})`,
          }}
        ></div>
        <div className="circle-rings size-[620px]"></div>
        <div className="circle-rings size-[820px]"></div>
        <div className="circle-rings size-[1020px]"></div>
        <div className="circle-rings size-[1220px]"></div>
        <StarHeroOrbet size={800} rotate={-72}>
          <StarIcon className="size-12 rotate-45 text-emerald-300" />
        </StarHeroOrbet>

        <StarHeroOrbet size={550} rotate={20}>
          <StarIcon className="size-8 rotate-45 text-emerald-300" />
        </StarHeroOrbet>

        <StarHeroOrbet size={590} rotate={98}>
          <StarIcon className="size-8 rotate-45 text-emerald-300" />
        </StarHeroOrbet>

        <StarHeroOrbet size={430} rotate={-14}>
          <SparkleIcon className="size-8 rotate-45 text-emerald-300/20" />
        </StarHeroOrbet>
        <StarHeroOrbet size={440} rotate={79}>
          <SparkleIcon className="size-5 rotate-45 text-emerald-300/20" />
        </StarHeroOrbet>

        <StarHeroOrbet size={530} rotate={178}>
          <SparkleIcon className="size-10 rotate-45 text-emerald-300/20" />
        </StarHeroOrbet>

        <StarHeroOrbet size={710} rotate={144}>
          <SparkleIcon className="size-14 rotate-45 text-emerald-300/20" />
        </StarHeroOrbet>

        <StarHeroOrbet size={720} rotate={85}>
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </StarHeroOrbet>

        <StarHeroOrbet size={520} rotate={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </StarHeroOrbet>

        <StarHeroOrbet size={650} rotate={-5}>
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </StarHeroOrbet>
      </div>

      <div className="container text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
          <Image
            className="size-[100px]"
            src={memojiImage}
            alt="Person peeking from behind the laptop"
          />
          <div className="bg-gray-950 border border-gray-800  rounded-lg flex items-center gap-4 px-4 py-1.5">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm">Available for new projects</div>
          </div>
        </div>
        <h1 className="title mt-8">Building Excptional User Experiences</h1>
        <p className="desc">
          I create seamless, high-performance user experiences with intuitive
          design and effortless usability.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="flex flex-row-reverse justify-center items-center bg-gray-950 px-4 py-1.5 rounded-lg gap-2 border border-white/15 w-48 h-12 text-sm">
            <ArrowDown className="size-4" />
            <span className="font-semibold">Explore My Work</span>
          </button>

          <button className="flex justify-center items-center bg-white px-4 py-1.5 rounded-lg gap-2 border border-gray-950 w-48 text-gray-900 h-12 text-sm ">
            <span>👋</span>
            <span className=" font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import grainImage from "@/assets/images/grain.jpg";

const Card = ({
  children,
  className,
  ...other
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      {...other}
      className={twMerge(
        "bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:outline-2 after:outline-white/20 after:rounded-3xl z-0 after:z-10 after:pointer-events-none overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;

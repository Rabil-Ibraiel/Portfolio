import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const StarHeroOrbet = ({
  size,
  rotate,
  children,
  spinDuration,
  shouldSpin = false,
  orbitDuration,
  shouldOrbit = false,
}: PropsWithChildren<{
  size: number;
  rotate: number;
  spinDuration?: string;
  shouldSpin?: boolean;

  orbitDuration?: string;
  shouldOrbit?: boolean;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex justify-start items-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            rotate: `${rotate}deg`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className="inline-flex"
              style={{
                rotate: `-${rotate}deg`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarHeroOrbet;

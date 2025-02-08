import { PropsWithChildren } from "react";

const StarHeroOrbet = ({
  size,
  rotate,
  children,
}: PropsWithChildren<{ size: number; rotate: number }>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex justify-start items-start"
        style={{
          height: `${size}px`,
          width: `${size}px`,
          rotate: `${rotate}deg`,
        }}
      >
        <div
          className="inline-flex "
          style={{
            rotate: `-${rotate}deg`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default StarHeroOrbet;

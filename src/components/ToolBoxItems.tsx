import { Fragment, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";

const ToolBoxItems = ({
  items,
  className,
  wrapperClassName,
}: {
  items: { title: string; iconType: React.ElementType }[];
  className?: string;
  wrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-8",
          wrapperClassName
        )}
      >

          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {items.map(
                (item: { title: string; iconType: React.ElementType }) => (
                  <div
                    key={item.title}
                    className="inline-flex items-center gap-4 border-2 border-white/10 rounded py-2 px-3"
                  >
                    <TechIcon component={item.iconType} />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                )
              )}
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default ToolBoxItems;

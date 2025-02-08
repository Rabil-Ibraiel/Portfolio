import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performance",
  "Scalability",
  "Optimization",
  "Efficiency",
  "Security",
  "Accessibility",
  "Usability",
  "Reliability",
  "Maintainability",
  "Compatibility",
  "Responsiveness",
  "Interaction",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-hidden ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-[3deg] -mx-1">
        <div className=" flex gap-4 h-12  overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          {words.map((word) => (
            <div
              key={word}
              className="flex items-center gap-4 text-gray-900 uppercase font-extrabold text-sm md:text-base lg:text-lg"
            >
              <span>{word}</span>
              <StarIcon className="rotate-[18deg] size-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

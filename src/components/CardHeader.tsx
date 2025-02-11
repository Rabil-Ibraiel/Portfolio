import Star from "@/assets/icons/star.svg";

const CardHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col text-left px-5 pt-4 md:px-8 md:pt-6 ">
      <div className="flex items-center gap-4">
        <Star className="size-9  text-emerald-300" />
        <h3 className="font-serif text-3xl tracking-wide">{title}</h3>
      </div>
      <p className="text-base lg:text-lg text-white/60 mt-2 md:mt-3">{desc}</p>
    </div>
  );
};

export default CardHeader;

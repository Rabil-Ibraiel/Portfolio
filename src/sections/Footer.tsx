import Link from "next/link";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
const links = [
  {
    title: "Github",
    link: "https://github.com/Rabil-Ibraiel",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/rabil-ibraiel/",
  },
  {
    title: "Behance",
    link: "https://www.behance.net/rabilabrail",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-emerald-300/30 h-[400px] w-[1600px] [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] "></div>
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-white/15 py-6 text-sm gap-8">
          <div className="text-white/60">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 ">
            {links.map((link) => (
              <Link
                target="_blank"
                href={link.link}
                className="flex items-center gap-1"
              >
                <span>{link.title}</span>
                <ArrowUpRight className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

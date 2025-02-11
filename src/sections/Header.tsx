import Link from "next/link";

export const Header = () => {
  
  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur text-sm md:text-base">
        <Link className="nav-item " href={"#home"}>
          Home
        </Link>
        <Link className="nav-item" href={"#projects"}>
          Projects
        </Link>
        <Link className="nav-item" href={"#about"}>
          About
        </Link>
        <Link className="nav-item" href={"#contact"}>
          Contact
        </Link>
      </nav>
    </div>
  );
};

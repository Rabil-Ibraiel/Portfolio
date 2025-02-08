import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Link from "next/link";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="center-container">
          <p className="uppercase inline-flex font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center text-sm md:text-lg lg:text-xl">
            Real-world Results
          </p>
          <h2 className="title">Featured Projects</h2>
          <p className="desc">
            A showcase of my best work—built with clean code, modern tech, and a
            focus on performance and user experience. 🚀
          </p>
        </div>

        <div className="flex flex-col mt-12 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:outline-2 after:outline-white/20 after:rounded-3xl z-0 after:z-10 after:pointer-events-none overflow-hidden px-8 pt-8 md:px-10 md:pt-10 lg:pr-0 flex flex-col lg:flex-row lg:gap-12"
            >
              <div className="lg:w-1/2">
                <div
                  className="absolute inset-0 opacity-5 -z-10"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>
                {project.company && (
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex uppercase font-bold tracking-widest gap-2 mb-4 md:mb-5">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                )}
                <h3 className="font-bold font-serif text-2xl md:text-3xl tracking-wide">
                  {project.title}
                </h3>
                <hr className="border-white/5 border-2 my-4 md:my-5" />
                <ul className="flex flex-col gap-4">
                  {project.results.map((item) => (
                    <li className="flex items-center gap-1 text-white/50 text-sm md:text-base">
                      <CheckIcon className="size-5 md:size-6" />
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold flex justify-center items-center gap-2 my-8">
                      <span>View Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </Link>
                </div>
              </div>
              <Image
                className="-mb-4 md:-mb-0 lg:w-1/2 lg:-mb-1 lg:-mr-4"
                src={project.image}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

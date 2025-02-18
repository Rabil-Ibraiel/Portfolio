import linkList from "@/assets/images/linkList.png";
import ycDirectory from "@/assets/images/yc-directory.png";
import iipc from "@/assets/images/IIPC.png";
import Link from "next/link";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "YC Directory",
    results: [
      {
        title: "Optimized user experience",
      },
      { title: "Enhanced performance" },
      { title: "Mobile-first design" },
    ],
    link: "https://yc-directory-delta-nine.vercel.app/",
    image: ycDirectory,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Linklist",
    results: [
      { title: "Customizable pages" },
      { title: "Responsive design" },
      { title: "Optimized performance" },
    ],
    link: "https://linklist-rabil.vercel.app/",
    image: linkList,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Instant Invoice PDF Creator",
    results: [
      { title: "Automatic PDF generation" },
      { title: "Simple user interface" },
      { title: "A variety of pre-designed templates" },
    ],
    link: "https://iipc-saa-s-nextjs-1t9l.vercel.app/",
    image: iipc,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <div className="center-container">
          <p className="sub-title">Real-world Results</p>
          <h2 className="title">Featured Projects</h2>
          <p className="desc">
            A showcase of my best work—built with clean code, modern tech, and a
            focus on performance and user experience. 🚀
          </p>
        </div>

        <div className="flex flex-col mt-12 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="sticky px-8 pt-8 md:px-10 md:pt-10 lg:pr-0 flex flex-col lg:flex-row lg:gap-12"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:w-1/2">
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
                    <li
                      key={item.title}
                      className="flex items-center gap-1 text-white/50 text-sm md:text-base"
                    >
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
                className="-mb-4 md:-mb-0 lg:w-1/2 lg:-mb-12 lg:-mr-4 object-contain"
                src={project.image}
                alt={project.title}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

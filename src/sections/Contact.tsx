import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div className="py-16 lg:py-24 m-4 relative z-10" id="contact">
      <div className="container center-container bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl p-6 lg:px-8 lg:py-6 relative z-0">
        <div className=" mx-auto flex flex-col md:flex-row items-center h-fit lg:gap-12">
          <div className="md:text-left md:max-w-md lg:max-w-fit">
            <h3 className="font-serif text-3xl lg:text-4xl tracking-wide text-gray-900 ">
              Let&#39;s create something amazing together
            </h3>
            <p className="desc mt-2 text-sm md:text-base lg:text-lg text-gray-900/80">
              Ready to bring your next project to life? Let&#39;s connect and
              discuss how i can help you achive your goals.
            </p>
          </div>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/rabil-ibraiel/"}
            className="inline-flex mx-auto flex-row-reverse justify-center items-center bg-gray-900 px-4 py-1.5 rounded-lg gap-2 border border-white/15 w-48 h-12 text-sm mt-6 md:mt-0"
          >
            <ArrowUpRight className="size-4" />
            <span className="font-semibold">Contact me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

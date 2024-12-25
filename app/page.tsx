import { Header } from "@/app/_components/header";
import Section from "./_components/section";
import Projects from "./_components/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <span className="line-after-components"></span>
      <div className="mt-[50px]">
        <Section />
      </div>
      <div className="flex justify-between items-center mt-[50px] text-[20px] md:text-[35px] font-bold text-localPrimary-500">
        <div>Projects</div>
        <div className="text-[16px] text-localPrimary-100 transition-all duration-200  hover:underline hover:text-localPrimary-500 hover:cursor-pointer">
          See all projects
        </div>
      </div>
      <span className="line-after-components"></span>
      <div>
        <Projects />
      </div>
    </div>
  );
}

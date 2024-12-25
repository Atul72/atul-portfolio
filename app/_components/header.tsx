import { SunDim } from "lucide-react";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex flex-col mt-5 md:mt-10 gap-5 ">
      <div className="flex justify-between">
        <Logo />
        <SunDim className="" />
      </div>
      <div className="flex justify-between">
        <Navigation />
        <div className="flex gap-2">
          <div className="text-[15px] md:text-[18px] hover:underline hover:cursor-pointer md:mr-6">
            Resume
          </div>
          <FaLinkedin size={23} />
          <AiFillGithub size={23} />
        </div>
      </div>
    </div>
  );
};

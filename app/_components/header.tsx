import { SunDim } from "lucide-react";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <SunDim />
    </div>
  );
};

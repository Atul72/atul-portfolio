import { Header } from "@/app/_components/header";
import Section from "./_components/section";

export default function Home() {
  return (
    <div>
      <Header />
      <span className="line-after-components"></span>
      <div className="mt-[100px]">
        <Section />
      </div>
    </div>
  );
}

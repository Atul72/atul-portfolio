import Section from "./_components/section";
import Projects from "./_components/projects";
import Posts from "./_components/posts";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div>
      <div className="mt-[150px]">
        <Section />
      </div>
      <div className="flex justify-between items-center mt-[150px] text-[20px] md:text-[35px] font-bold text-localPrimary-500">
        <div>Projects</div>
        <div className="text-[16px] text-localPrimary-100 transition-all duration-200  hover:underline hover:text-localPrimary-500 hover:cursor-pointer">
          See all projects
        </div>
      </div>
      <span className="line-after-components"></span>
      <div>
        <Projects />
      </div>
      <div className="flex justify-between items-center mt-[150px] text-[20px] md:text-[35px] font-bold text-localPrimary-500">
        <div>Latest Posts</div>
        <div className="text-[16px] text-localPrimary-100 transition-all duration-200  hover:underline hover:text-localPrimary-500 hover:cursor-pointer">
          Read all posts
        </div>
      </div>
      <span className="line-after-components"></span>
      <div>
        <Posts />
      </div>
      <span className="line-after-components mt-[150px]"></span>
      <div>
        <Footer />
      </div>
    </div>
  );
}

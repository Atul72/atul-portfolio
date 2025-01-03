import Link from "next/link";

export const Navigation = () => {
  return (
    <ul className="flex gap-4 text-[15px] md:text-[18px] text-localText-400  ">
      <li className="hover:underline hover:text-localText-600 transition-all duration-200">
        <Link href="/projects">Projects</Link>
      </li>
      <li className="hover:underline hover:text-localText-600 transition-all duration-200">
        <Link href="/blog">Blog</Link>
      </li>
    </ul>
  );
};

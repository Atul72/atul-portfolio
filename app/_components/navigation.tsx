import Link from "next/link";

export const Navigation = () => {
  return (
    <div>
      <ul className="flex gap-6 text-2xl text-localText-400 font-semibold ">
        <li className="hover:underline hover:text-localText-600 ">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:underline hover:text-localText-600">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

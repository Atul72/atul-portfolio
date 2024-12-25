import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-[150px]">
      <div className="flex flex-col md:flex-row justify-between items-center text-localPrimary-300 text-[15px] md:text-[16px] mb-10 ">
        <div>© 2024 by Atul Rai. All rights reserved.</div>
        <div className="flex gap-5 ">
          <Link
            href="/"
            className="hover:underline hover:text-localPrimary-500 transition-all duration-200"
          >
            LinkedIn
          </Link>
          <Link
            href="/"
            className="hover:underline hover:text-localPrimary-500 transition-all duration-200  "
          >
            GitHub
          </Link>
          <Link
            href="/"
            className="hover:underline hover:text-localPrimary-500 transition-all duration-200  "
          >
            Twitter
          </Link>
        </div>
      </div>
    </div>
  );
}

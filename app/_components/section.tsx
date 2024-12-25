import Link from "next/link";

export default function Section() {
  return (
    <div className="flex flex-col">
      <div className="flex ">
        <h1 className="text-[35px] md:text-[50px] font-bold text-localPrimary-500">
          Hi.
        </h1>
      </div>
      <div className="flex">
        <p className="text-[15px] md:text-[23px] text-localPrimary-300">
          I&apos;m Atul, a passionate software developer & open source
          enthusiast. Know more about me on my{" "}
          <Link
            href="/about"
            className="hover:underline text-localPrimary-800 "
          >
            about page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <span className="text-3xl md:text-5xl font-semibold text-localText-600">
        Atul Rai
      </span>
    </Link>
  );
};

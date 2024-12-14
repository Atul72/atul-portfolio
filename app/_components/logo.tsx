import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex flex-col items-center gap-4 z-10">
      <span className="text-xl font-semibold text-localText-600">Atul Rai</span>
    </Link>
  );
};

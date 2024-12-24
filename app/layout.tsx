import "@/app/_styles/globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poopins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / bestofatul",
    default: "Atul Rai / Portfolio",
  },
  description:
    "I am atul rai. Work as full stack developer. Currently pursuing B.Tech in electrical engineering from BIET Jhansi.",
};
//max-w-[1000px] w-[80%] my-0 mx-auto
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poopins.className} max-w-[1000px] w-[80%] my-0 mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}

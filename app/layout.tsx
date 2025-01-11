import "@/app/_styles/globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { Header } from "./_components/header";
import Footer from "./_components/footer";
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
        className={`${poopins.className} max-w-[1000px] w-[95%] md:w-[80%] my-0 mx-auto bg-localText-100`}
      >
        <Header />
        <span className="line-after-components"></span>
        {children}
        <span className="line-after-components mt-[150px]"></span>
        <Footer />
      </body>
    </html>
  );
}

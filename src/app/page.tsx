import Image from "next/image";
import Intro from "./home-page-sections/intro";
import SectionDivider from "@/components/section-divider";
import About from "./home-page-sections/about";
import Portfolio from "./portfolio/page";
import Skills from "./home-page-sections/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills/>
    </main>
  );
}

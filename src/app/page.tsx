import Image from "next/image";
import Intro from "./home-page-sections/intro";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro/>
      
    </main>
  );
}

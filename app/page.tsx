import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Tech from "@/app/components/Tech";
import Works from "@/app/components/Works";
import Contact from "@/app/components/Contact";
import Stars from "@/app/components/canvas/Stars";

export default function Home() {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <Stars />
      </div>
    </>
  );
}

import Hero from "@/components/Hero";
import MushroomShowcase from "@/components/MushroomShowcase";
import About from "@/components/About";
import Process from "@/components/Process";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <MushroomShowcase />
      <About />
      <Process />
      <CallToAction />
    </main>
  );
}

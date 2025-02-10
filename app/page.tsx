import About from "@/components/home/about/about";
import Hero from "@/components/home/hero/hero";
import Service from "@/components/home/service/service";
import Statistic from "@/components/home/statistic/statistic";




export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Statistic/>
      <Service/>
    </div>
  );
}


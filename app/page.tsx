import About from "@/components/home/about/about";
import Action from "@/components/home/action/action";
import Hero from "@/components/home/hero/hero";
import Service from "@/components/home/service/service";
import Solution from "@/components/home/solution/solution";
import Statistic from "@/components/home/statistic/statistic";




export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Statistic/>
      <Service/>
      <Action/>
      <Solution/>
    </div>
  );
}


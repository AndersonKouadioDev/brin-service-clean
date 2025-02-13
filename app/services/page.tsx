import Cleaning from "@/components/services/cleaning/cleaning";
import Hero from "@/components/services/hero/hero";
import Step from "@/components/services/step/step";
import Ultime from "@/components/services/ultime/ultime";


export default function Services(){
    return(
        <div>
            <Hero/>
            <Ultime/>
            <Step/>
            <Cleaning/>
        </div>
    );
}
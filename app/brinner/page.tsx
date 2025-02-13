import Hero from "@/components/brinner/hero/hero";
import Paginations from "@/components/brinner/pagination/pagination";
import ServiceSelection from "@/components/brinner/serviceselection/serviceselection";



export default function Brinner(){
    return(
        <div>
            <Hero/>
            <ServiceSelection/>
            <Paginations/>
        </div>
    );
}
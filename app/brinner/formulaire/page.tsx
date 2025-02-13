import Hero from "@/components/brinner/hero/hero";
import Formulaires from "@/components/formulaire/formulaire/formulaire";
import Paginations from "@/components/formulaire/pagination/pagination";


export default function Formulaire(){
    return(
        <div>
            <Hero/>
            <Formulaires/>
            <Paginations/>
        </div>
    );
}
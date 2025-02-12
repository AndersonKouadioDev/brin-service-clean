import { Partner } from "@/components/home/partner/partners";
import Client from "@/components/propos/client/client";
import Hero from "@/components/propos/hero/hero";
import History from "@/components/propos/history/history";
import Solution from "@/components/propos/solution/solution";
import Value from "@/components/propos/value/value";


export default function Propos(){
    return(
        <div>
            <Hero/>
            <History/>
            <Solution/>
            <Value/>
            <Partner/>
            <Client/>
        </div>
    );
}
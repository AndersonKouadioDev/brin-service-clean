import { CheckCircle, Leaf, ShieldCheck } from "lucide-react";


export default function Value(){
    return(
        <div className="bg-white p-10 mb-6">
            <div className="flex flex-col gap-6 py-20 items-center">
                <div className="text-primary text-3xl font-black pb-6">NOS VALEURS</div>

            <div className="flex flex-wrap justify-around w-full items-stretch gap-8">
            {/* QUALITÉ */}
            <div className="flex flex-col items-center text-center gap-4">
                <CheckCircle className="text-white w-24 h-24 bg-secondary rounded-full p-4" />
                <div className="h-auto w-44">
                <h3 className="text-xl font-bold">QUALITÉ</h3>
                <p>Nous visons la perfection dans tous les aspects, ne laissant aucun recoin intact.</p>
                </div>
            </div>

            {/* DURABILITÉ */}
            <div className="flex flex-col items-center text-center gap-4 relative top-0 md:top-24">
                <Leaf className="text-white w-24 h-24 bg-primary rounded-full p-4" />
                <div className="h-auto w-44">
                <h3 className="text-xl font-bold">DURABILITÉ</h3>
                <p>Nous nous engageons à adopter des pratiques respectueuses de l'environnement afin de protéger à la fois votre environnement et la planète.</p>
                </div>
            </div>

            {/* FIABILITÉ */}
            <div className="flex flex-col items-center text-center gap-4">
                <ShieldCheck className="text-white w-24 h-24 bg-secondary rounded-full p-4" />
                <div className="h-auto w-44">
                <h3 className="text-xl font-bold">FIABILITÉ</h3>
                <p>Vous pouvez compter sur nous pour être ponctuels, fiables et respectueux de votre espace.</p>
                </div>
            </div>
            </div>

            </div>
        </div>
    );
}
"use client";

import Image from "next/image";
import { Button, Input, DateInput, Checkbox } from "@nextui-org/react";
import { Calendar, MapPin, Briefcase, User} from "lucide-react";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full h-[calc(100vh-10px)]">
      {/* Image de fond */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/images/backgrounds/background_1.png"
        alt="hero section"
        width={1920}
        height={1080}
        priority
      />
      <div className="absolute w-full h-full bg-black/25 px-4"></div>

      {/* Contenu principal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-xl sm:text-2xl lg:text-2xl font-semibold gap-20 lg:gap-32 mb-4">
        <div className="relative flex items-start text-start justify-between p-10 mt-8 gap-20 max-w-5xl w-full ">
          {/* Partie gauche : Texte et formulaire */}
          <div className="w-full md:w-1/2 ">
            <h2 className="text-sm text-white">Un nettoyage de qualité au juste prix.</h2>
            <p className="text-white font-bold mt-3 text-4xl">
            Services de nettoyage spécialisés, efficaces et minutieux
            </p>
            <h2 className="text-sm text-white">Nous effectuons des tâches de nettoyage en utilisant le moins de temps et d’énergie possible.</h2>

            <Button color="secondary" radius="full" className="mt-6 w-1/2 text-white p-6">
              Valider ma reservation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
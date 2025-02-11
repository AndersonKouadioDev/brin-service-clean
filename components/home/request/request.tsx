"use client";

import Image from "next/image";
import { Button, Input, DateInput, Checkbox, Tabs, Tab } from "@nextui-org/react";
import { Calendar, MapPin, Briefcase, User, Home} from "lucide-react";

export default function Request(){
    return(
    <div className="relative flex flex-col items-center justify-between w-full min-h-screen overflow-hidden">
      {/* Image de fond */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/images/backgrounds/propos_3.png"
        alt="hero section"
        width={1920}
        height={1080}
        priority
      />
      <div className="absolute w-full h-full bg-black/50 px-4"></div>

      {/* Contenu principal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-xl sm:text-2xl lg:text-2xl font-semibold gap-20 lg:gap-32 mb-4">
        <div>OBTENEZ UN DEVIS GRATUITEMENT</div>
        <div className="relative flex items-start text-start justify-between p-10 mt-8 gap-20 max-w-5xl w-full ">
          {/* Partie gauche : Texte et formulaire */}
          <div className="w-full md:w-1/2 bg-white p-2 rounded-xl">
            <div className="mt-6 grid grid-cols-1 gap-4 ">
            <Tabs aria-label="Tabs variants" variant="solid" className="w-full text-primary">
                <Tab key="residentiel" title={<div className="flex items-center gap-2 text-primary"><Home className="w-5 h-5" /> Résidentiel</div>} className="text-primary" />
                <Tab key="commercial" title={<div className="flex items-center gap-2 text-primary"><Briefcase className="w-5 h-5" /> Commercial</div>} className="text-primary" />
            </Tabs>
              <Input color="default" type="text" label="Votre nom et prénoms" className="w-full" />
              <Input color="default" type="text" label="Votre adresse email" className="w-full" />
              <Input color="default" type="text" label="Numéro de téléphone" className="w-full"  />
           </div>

            <Button color="primary" radius="lg" className="mt-6 w-full text-white p-6">
              Suivant
            </Button>
          </div>

          {/* Partie droite : Image */}
          <div className="w-1/2 relative bottom-0 hidden md:flex items-center overflow-hidden justify-center">
            <Image
              src="/assets/images/illustrations/page-accueil/hero.png"
              alt="Voiture Kairos"
              width={600}
              height={600}
              className="object-contain overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
    );
}
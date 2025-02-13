import Image from "next/image";

export default function Step(){
    type Info = {
        title: string;
        description: string;
        profil: string;
      };

      const info: Info[] = [
        {
          title: 'Donnez-nous les détails',
          description:
            "Donnez-nous simplement le timing que vous souhaitez et nous établirons notre planning en fonction de vos besoins.",
          profil: '/assets/images/illustrations/services/icon.png',

        },
        {
            title: 'Choisissez le plan qui vous convient',
            description:
              "Nous venons chez vous pour inspecter la zone afin de la préparer à la désinfection, et pour prendre en compte les préoccupations.",
            profil: '/assets/images/illustrations/services/icon.png',

          },
          {
            title: 'Planification en ligne en quelques clics',
            description:
              "Nous effectuons la désinfection pendant quelques heures en fonction de la taille de la maison et de la quantité.",
            profil: '/assets/images/illustrations/services/icon.png',

          },
          {
            title: 'Nettoyer avec soin et partir rapidement',
            description:
              "Une fois la désinfection effectuée avec succès, nous partirons et vous n'aurez plus de soucis !",
            profil: '/assets/images/illustrations/services/icon.png',

          },
        
      ]

    return(
        <div className="relative flex items-center justify-between w-full min-h-screen">
              <Image
                className="absolute inset-0 w-full h-full object-cover shrink-0"
                src="/assets/images/backgrounds/background_4.png"
                alt="herosection"
                objectPosition="top"
                fill
              />
              <div className="absolute w-full h-full bg-blue-400/60 px-4"></div>
        
              <div className="absolute px-4 pt-4 inset-0 flex flex-col bottom-2 items-start justify-center text-left text-white text-xl sm:text-2xl lg:text-2xl font-semibold gap-20 lg:gap-32">
        
                
        
                {/* Texte principal */}
                <div className=" mx-auto relative p-8 flex flex-col gap-6">
                  
                  <div className="flex flex-col gap-4">
                    <div className="text-base font-thin text-center">VOYEZ COMMENT CA FONCTIONNE !</div>
                    <div className="text-2xl font-black text-center">ETAPES FACILES POUR UN ENVIRONNEMENT PROPRE ET SAIN</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
                        {info.map((item) => (
                            <div className="flex flex-col items-center justify-between p-6 bg-white text-black shadow-md rounded-lg border border-gray-200 w-64 h-auto">
                            
                            {/* Image centrée */}
                            <div className=" w-16 h-16">
                                <Image
                                src={item.profil}
                                alt="profil"
                                width={50}
                                height={50}
                                className="rounded-full border-4 border-white shadow-lg mx-auto"
                                />
                            </div>

                            {/* Contenu aligné */}
                            <div className="flex flex-col flex-grow items-center justify-center text-center gap-2 mt-6">
                                <div className="text-lg font-semibold">{item.title}</div>
                                <div className="text-sm font-extralight">{item.description}</div>
                            </div>
                            </div>
                        ))}
                        </div>
                </div>        
              </div>
        
              
            </div>
    );
}
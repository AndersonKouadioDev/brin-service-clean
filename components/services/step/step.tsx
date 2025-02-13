import Image from "next/image";

export default function Step() {
  type Info = {
    title: string;
    description: string;
    profil: string;
  };

  const info: Info[] = [
    {
      title: "Donnez-nous les détails",
      description:
        "Donnez-nous simplement le timing que vous souhaitez et nous établirons notre planning en fonction de vos besoins.",
      profil: "/assets/images/illustrations/services/icon.png",
    },
    {
      title: "Choisissez le plan qui vous convient",
      description:
        "Nous venons chez vous pour inspecter la zone afin de la préparer à la désinfection, et pour prendre en compte les préoccupations.",
      profil: "/assets/images/illustrations/services/icon.png",
    },
    {
      title: "Planification en ligne en quelques clics",
      description:
        "Nous effectuons la désinfection pendant quelques heures en fonction de la taille de la maison et de la quantité.",
      profil: "/assets/images/illustrations/services/icon.png",
    },
    {
      title: "Nettoyer avec soin et partir rapidement",
      description:
        "Une fois la désinfection effectuée avec succès, nous partirons et vous n'aurez plus de soucis !",
      profil: "/assets/images/illustrations/services/icon.png",
    },
  ];

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen">
      {/* Image de fond */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/images/backgrounds/background_4.png"
        alt="herosection"
        objectPosition="top"
        fill
      />
      <div className="absolute w-full h-full bg-blue-400/60"></div>

      {/* Contenu */}
      <div className="relative px-4 sm:px-8 py-12 text-center text-white">
        {/* Titre principal */}
        <div className="mb-10">
          <p className="text-sm sm:text-base font-thin">VOYEZ COMMENT ÇA FONCTIONNE !</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black">
            ÉTAPES FACILES POUR UN ENVIRONNEMENT PROPRE ET SAIN
          </h2>
        </div>

        {/* Étapes en responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {info.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between p-6 bg-white text-black shadow-md rounded-lg border border-gray-200 max-w-xs sm:max-w-sm mx-auto"
            >
              {/* Image */}
              <div className="w-16 h-16">
                <Image
                  src={item.profil}
                  alt="profil"
                  width={50}
                  height={50}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>

              {/* Contenu */}
              <div className="flex flex-col flex-grow items-center justify-center text-center gap-2 mt-4">
                <h3 className="text-sm sm:text-lg font-semibold">{item.title}</h3>
                <p className="text-xs sm:text-sm font-extralight">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

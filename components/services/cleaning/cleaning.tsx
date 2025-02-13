import Image from "next/image";

export default function Cleaning(){
    type Clean = {
        title: string;
        description: string;
        profil: string;
        picture: string;
      };

      const clean: Clean[] = [
        {
          title: 'Service de nettoyage occasionnel et ponctuel',
          description:
            "Nous avons un service de nettoyage personnalisé conçu pour vous aider à nettoyer quand vous en avez besoin, que nous nettoyions une fois ou régulièrement, votre maison sera toujours étincelante de propreté lorsque nous la quitterons.",
          profil: '/assets/images/illustrations/services/icon1.png',
          picture: '/assets/images/illustrations/services/card1.png'

        },
        {
            title: 'Service de nettoyage récurrent et continu',
            description:
              "Avec le service récurrent, vous n'aurez jamais à vous soucier de l'inattendu et votre maison sera propre et prête, le service récurrent mettra votre maison en ordre pour que vous profitiez de votre temps....",
            profil: '/assets/images/illustrations/services/icon2.png',
            picture: '/assets/images/illustrations/services/card2.png'

          },
          {
            title: "Service de nettoyage de déménagement et d'aménagement",
            description:
              "Nous proposons des services de nettoyage flexibles lors de votre emménagement et de votre déménagement pour faciliter la transition vers votre nouvel espace, que vous ayez besoin de nettoyer toute la maison ou seulement certains éléments.",
            profil: '/assets/images/illustrations/services/icon3.png',
            picture: '/assets/images/illustrations/services/card3.png'

          },
          {
            title: "Service de nettoyage d'appartement professionnel",
            description:
              "Nous avons un service de nettoyage personnalisé conçu pour vous aider à nettoyer quand vous en avez besoin, que nous nettoyions une fois ou régulièrement, votre maison sera toujours étincelante de propreté lorsque nous la quitterons.",
            profil: '/assets/images/illustrations/services/icon4.png',
            picture: '/assets/images/illustrations/services/card4.png'

          },
          {
            title: 'Services de nettoyage de vitres résidentielles',
            description:
              "Avec le service récurrent, vous n'aurez jamais à vous soucier de l'inattendu et votre maison sera propre et prête, le service récurrent mettra votre maison en ordre pour que vous profitiez de votre temps....",
            profil: '/assets/images/illustrations/services/icon5.png',
            picture: '/assets/images/illustrations/services/card5.png'

          },
          {
            title: 'Services professionnels de nettoyage de tapis',
            description:
              "Nous proposons des services de nettoyage flexibles lors de votre emménagement et de votre déménagement pour faciliter la transition vers votre nouvel espace, que vous ayez besoin de nettoyer toute la maison ou seulement certains éléments.",
            profil: '/assets/images/illustrations/services/icon6.png',
            picture: '/assets/images/illustrations/services/card6.png'

          },
        
      ]
    return(
        <div className="bg-white flex flex-col justify-center items-center p-10">
          <div className="flex flex-col gap-4 items-center text-center">
              <div className="text-primary text-lg font-bold">DES PLANS DE NETTOYAGE ADAPTES A VOS BESOINS</div>
              <div className="text-primary-600 text-2xl  font-black">DES SERVICES DE DESINFECTION SPECIALISES ADAPTES A VOS LOCAUX</div>
          </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                        {clean.map((item) => (
                            <div key={item.title} className="flex flex-col gap-4 items-center justify-between bg-white text-black shadow-md rounded-3xl border border-gray-200 w-64 h-auto">
                            
                            {/* Contenu aligné */}
                            <div className="flex flex-col flex-grow items-center justify-center text-center gap-2 pt-6 px-3">
                                <div className="text-lg font-semibold">{item.title}</div>
                                <div className="text-sm font-extralight">{item.description}</div>
                            </div>

                            {/* Image centrée */}
                            <div className="w-16 h-16">
                                <Image
                                src={item.profil}
                                alt="profil"
                                objectFit="cover"
                                width={40}
                                height={40}
                                className=" mx-auto"
                                />
                            </div>

                            {/* Image du bas */}
                            <div className="overflow-hidden w-full h-16 rounded-b-3xl object-bottom">
                                <Image
                                src={item.picture}
                                objectFit="cover"
                                objectPosition="bottom"
                                alt="picture"
                                width={400}
                                height={50}
                                className=" mx-auto"
                                />
                            </div>
                            </div>
                        ))}
                        </div>
        </div>
    );
}
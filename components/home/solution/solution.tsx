import Image from 'next/image';

export default function Solution() {
  type Solutions = {
    title: string;
    description: string;
    image: string;
  };

  const solutions: Solutions[] = [
    {
      title: 'Expertise Professionnelle',
      description:
        'Notre équipe est formée en permanence aux dernières techniques de nettoyage et de désinfection.',
      image: '/assets/images/illustrations/page-accueil/item-1.png',
    },
    {
      title: 'Matériel Écologique ',
      description:
        "Nous utilisons des produits respectueux de l'environnement et du développement durable.",
      image: '/assets/images/illustrations/page-accueil/item-2.png',
    },
    {
      title: 'Certification Qualité',
      description:
        'Nos processus sont conformes aux normes d’hygiène et de sécurité les plus strictes.',
      image: '/assets/images/illustrations/page-accueil/item-3.png',
    },
  ];

  return (
    <div className="bg-white p-10 mx-8">
      <div className="flex flex-col gap-6 py-20 items-center">
        <div className="text-primary text-lg font-bold">NOS SERVICES</div>
        <div className="text-primary-600 text-2xl font-black">CE QUE NOUS OFFRONS</div>
        <div className="flex flex-row justify-between items-stretch gap-4 w-full">
          {/* Colonne de gauche avec les textes */}
          <div className="flex flex-col gap-4 w-1/2 justify-between">
            {solutions.map((item) => (
              <div key={item.title} className="flex flex-row gap-4 items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={80}
                  width={80}
                  className="bg-gray-200 rounded-full p-2"
                />
                <div className="flex flex-col gap-2">
                  <div className="text-primary font-semibold text-xl">{item.title}</div>
                  <div>{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Image à droite avec la même hauteur */}
          <div className="w-1/2">
            <div className="relative left-16 w-full h-full max-h-[400px] aspect-[3/4]">
              <Image
                src="/assets/images/illustrations/page-accueil/propos_1.png"
                alt="hero section"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Client(){
        type News = {
            title: string;
            description: string;
            profil: string;
          };
    
          const news: News[] = [
            {
              title: 'Courtney Henry',
              description:
                "Notre équipe de nettoyage est arrivée rapidement et a commencé à nettoyer immédiatement. Ils étaient très sympathiques et ont pris grand soin de faire du bon travail. Je...",
              profil: '/assets/images/illustrations/propos/client1.png',

            },
            {
                title: 'Darrell Steward',
                description:
                  "Wow, je suis tellement impressionnée par l'équipe #8 Araceli et Cristina ! C'est la première fois que je fais nettoyer ma maison par un professionnel et je...",
                profil: '/assets/images/illustrations/propos/client2.png',
  
              },
              {
                title: 'Jerome Bell',
                description:
                  "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
                profil: '/assets/images/illustrations/propos/client3.png',
  
              },
            
          ]
    
        return (
            <div className="bg-white p-10">
                <div className="flex flex-col gap-6 py-20 items-center">
                    <div className="text-gray-700 text-2xl font-black">DERNIÈRES NOUVELLES</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
                      {news.map((item) => (
                        <div className="flex flex-col gap-4 items-center justify-between p-6 bg-white hover:bg-secondary hover:text-white shadow-md rounded-lg border border-gray-200 relative">
                        {/* <div className="flex flex-col gap-4 items-center justify-between p-6 bg-white hover:bg-secondary hover:text-white shadow-md rounded-lg border border-gray-200 relative w-64"> */}
                        {/* Image de profil centrée */}
                        <Image
                          src={item.profil}
                          alt="profil"
                          width={60}
                          height={60}
                          className="rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg"
                        />
                  
                        {/* Contenu de la carte */}
                        <div className="mt-8 text-xl font-bold">{item.title}</div>
                        <div className="text-sm text-center">{item.description}</div>
                  
                        {/* Étoiles en bas */}
                        <div className="mt-4 text-yellow-400 text-lg font-bold">
                          ★★★★☆
                        </div>
                      </div>
                      ))}
                    </div>
                </div>
            </div>
        )
}
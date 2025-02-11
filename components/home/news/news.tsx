

export default function News(){

    type News = {
        title: string;
        substitle: string;
        description: string;
        profil: string;
        image: string;
        num: string;
        month: string;
      };

      const news: News[] = [
        {
          title: 'kristian',
          substitle: 'Conseils de nettoyage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis auctor rhoncus. Nullam varius, turpis a ultricies.',
          profil: '/assets/images/illustrations/page-accueil/item-1.png',
          image: '/assets/images/illustrations/page-accueil/item-1.png',
          num: '12',
          month: 'Juin',
        },
        {
            title: 'kristian',
            substitle: 'Conseils de nettoyage',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis auctor rhoncus. Nullam varius, turpis a ultricies.',
            profil: '/assets/images/illustrations/page-accueil/item-1.png',
            image: '/assets/images/illustrations/page-accueil/item-1.png',
            num: '12',
            month: 'Juin',
          },
          {
            title: 'kristian',
            substitle: 'Conseils de nettoyage',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis auctor rhoncus. Nullam varius, turpis a ultricies.',
            profil: '/assets/images/illustrations/page-accueil/item-1.png',
            image: '/assets/images/illustrations/page-accueil/item-1.png',
            num: '12',
            month: 'Juin',
          },
          {
            title: 'kristian',
            substitle: 'Conseils de nettoyage',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae felis auctor rhoncus. Nullam varius, turpis a ultricies.',
            profil: '/assets/images/illustrations/page-accueil/item-1.png',
            image: '/assets/images/illustrations/page-accueil/item-1.png',
            num: '12',
            month: 'Juin',
          },
      ]

    return (
        <div className="bg-white p-10">
            <div className="flex flex-col gap-6 py-20 items-center">
                <div className="text-primary text-lg font-bold">DERNIÈRES NOUVELLES</div>
                <div className="text-primary-600 text-2xl font-black">LISEZ NOTRE DERNIER BLOG</div>
                <div className="flex flex-row gap-4 py-6 items-center">
                    {news.map((item)=>
                    <div key={item.title} className="flex flex-col gap-4">
                        <div>
                            {/* <Image
                                                        className="w-full h-full object-cover"
                                                        src="/assets/images/illustrations/page-accueil/propos_1.png"
                                                        alt="hero section"
                                                        width={400}
                                                        height={300}
                                                        priority
                                                      /> */}
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}
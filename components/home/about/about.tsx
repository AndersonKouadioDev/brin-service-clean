import Image from 'next/image';

export default function About(){
    return(
        <div className="bg-white p-10">
            <div className="flex flex-row gap-8 py-20 items-center">
                <div className="flex flex-col gap-4 w-1/2">        
                <div className="text-primary text-lg font-semibold">A PROPOS</div>
                <div className="text-3xl font-black">
                    <span className="text-secondary">FACILE À NETTOYER</span> <br /> MAISON ET BUREAU
                </div>
                <p className="text-black leading-relaxed">
                    <span className="font-semibold text-primary">BRIN SERVICE CLEAN</span> est votre partenaire de confiance en nettoyage professionnel. Spécialistes du nettoyage sur mesure, nous intervenons pour les entreprises, les particuliers et les collectivités avec un engagement qualité et un professionnalisme sans compromis.
                </p>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="w-1/2">
                    <Image
                            className="w-full h-full object-cover"
                            src="/assets/images/illustrations/page-accueil/propos_1.png"
                            alt="hero section"
                            width={400}
                            height={300}
                            priority
                          />
                    </div>
                    <div className="w-1/2 flex flex-col gap-4">
                        <div className="h-1/4">
                        <Image
                            className="w-full h-full object-cover"
                            src="/assets/images/illustrations/page-accueil/propos_2.png"
                            alt="hero section"
                            width={200}
                            height={150}
                            priority
                          />
                        </div>
                        <div className="h-3/4">
                        <Image
                            className="w-full h-full object-cover"
                            src="/assets/images/backgrounds/propos_3.png"
                            alt="hero section"
                            width={300}
                            height={200}
                            priority
                          />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
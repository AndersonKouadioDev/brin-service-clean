import Image from "next/image";

export default function Solution() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen">
      {/* Background Image */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/images/backgrounds/background_2.png"
        alt="background"
        objectFit="cover"
        objectPosition="top"
        fill
        priority
      />



      {/* Contenu principal */}
      <div className="relative w-full max-w-6xl px-6 py-16 text-white">
        {/* Titre principal */}
        <div className="text-center mt-10 md:mt-6 mb-12">
          <h1 className="text-3xl font-black">POURQUOI NOUS CHOISIR</h1>
        </div>

        {/* Section contenant l'image et le texte */}
        <div className="flex flex-col md:flex-row items-center pt-6 gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/images/illustrations/propos/nous-choisir.png"
              alt="histoire"
              className="w-full h-auto object-cover rounded-lg"
              width={500}
              height={800}
              priority
            />
          </div>

          {/* Texte */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 p-6  text-white">
            <h2 className="text-xl font-bold text-white">
              Notre priorité absolue est la satisfaction du client.
            </h2>
            <ul className="list-disc space-y-6 list-inside text-base font-extralight leading-relaxed">
              <li>
                Nos employés sont formés, assurés et leurs antécédents ont été vérifiés pour votre tranquillité d'esprit. Nous sommes une entreprise détenue et exploitée localement.
              </li>
              <li>
                Nous proposons des plans de nettoyage personnalisés pour répondre à vos besoins spécifiques, garantissant votre entière satisfaction.
              </li>
              <li>
                Nous livrons systématiquement un travail de haute qualité dans les délais, garantissant ainsi que vos projets sont terminés sans aucun délai.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

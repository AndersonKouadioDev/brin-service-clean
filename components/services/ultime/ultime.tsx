import Image from 'next/image';


export default function Ultime(){
    return(
    <div className="bg-white p-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-20">
        

        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/illustrations/services/ultime.png"
            alt="services"
            className="w-full h-auto object-cover"
            width={500}
            height={800}
            priority
          />
        </div>


        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="text-primary text-2xl font-black">LE NIVEAU ULTIME <br /> DE PUISSANCE DE NETTOYAGE !</div>
          <div className="text-lg leading-relaxed">
          Nous travaillons en étroite collaboration avec nos clients pour trouver les solutions les plus rentables tout en offrant un niveau de service qui produira un environnement propre et sain ainsi qu'un environnement qui protège l'investissement en capital que vous avez réalisé dans l'installation.
          </div>
        </div>

      </div>
    </div>
    );
}
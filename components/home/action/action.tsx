import { Chip } from "@nextui-org/react";
import Image from "next/image";

export default function Action(){

    const items = [
        {
            name: "Immeuble"
        },
        {
            name: "Fauteuils"
        },
        {
            name: "Espaces verts"
        },
        {
            name: "Appartements"
        },
        {
            name: "Matelas"
        },
        {
            name: "Carreaux"
        },
        {
            name: "Désinsectisation"
        },
        {
            name: "Tapis"
        },
        {
            name: "Divers"
        },
    ]

    return(
                    <div className="bg-white">
                    <div className="text-primary text-lg font-medium text-center py-6">
                        NOS DOMAINES D'ACTION
                    </div>
                    <div className="relative w-full h-[500px]"> {/* Hauteur augmentée */}
                        <Image
                        src="/assets/images/illustrations/page-accueil/martin.png"
                        alt="title"
                        fill
                        objectFit="cover"
                        objectPosition="top"
                        />
                        <div className="absolute w-full h-full bg-blue-400/30 px-4"></div>
                        {/* Ajout du blur */}
                        <div className="bg-black/30 backdrop-blur-md py-8 w-full absolute bottom-0 mx-auto">
                        <div className="flex flex-row justify-center gap-4 items-center text-center mx-auto">
                            {items.map((item) => (
                            <Chip key={item.name}>{item.name}</Chip>
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
  
    );
}
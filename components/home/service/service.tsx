import { Button } from "@nextui-org/react";
import { ArrowUpRight, Building } from "lucide-react";


export default function Service(){
    return(
        <div className="bg-white p-10">
            <div className="flex flex-col gap-6 py-20 items-center">
                <div className="text-primary text-lg font-medium">NOS SERVICES</div>
                <div className="text-primary-600 text-2xl font-bold">CE QUE NOUS OFFRONS</div>
                <div className="flex flex-row gap-4 py-6 items-center">
                    <div className="relative flex flex-col gap-4 bg-gray-200 rounded-xl px-6 py-8">
                    <div className="rounded-full border border-gray-300 items-center self-center p-2 bg-white absolute -top-8">
                        <Building className="w-8 h-8 items-center text-primary-400" />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-2">
                        <div className="text-black font-semibold">Nettoyage bureaux et locaux professionnels</div>
                        <div>
                        Bien que nous puissions personnaliser votre plan de nettoyage en fonction de vos besoins, la plupart des clients planifient des services de nettoyage réguliers
                        </div>
                    </div>
                    <Button className="flex self-start flex-row gap-2 text-white bg-primary">
                        Réserver
                        <ArrowUpRight className="w-4 h-4 " />
                    </Button>
                    </div>
                    <div className="relative flex flex-col gap-4 bg-gray-300">
                    <Building className="w-8 h-8 text-primary-400" />
                    <div className="flex flex-col gap-2">
                        <div>Nettoyage bureaux et locaux professionnels</div>
                        <div>
                        Bien que nous puissions personnaliser votre plan de nettoyage en fonction de vos besoins, la plupart des clients planifient des services de nettoyage réguliers
                        </div>
                    </div>
                    <Button className="flex flex-row gap-2 text-white bg-primary">
                        Réserver
                        <ArrowUpRight className="w-4 h-4 " />
                    </Button>
                    </div>
                    <div className="relative flex flex-col gap-4 bg-gray-300">
                    <Building className="w-8 h-8 text-primary-400" />
                    <div className="flex flex-col gap-2">
                        <div>Nettoyage bureaux et locaux professionnels</div>
                        <div>
                        Bien que nous puissions personnaliser votre plan de nettoyage en fonction de vos besoins, la plupart des clients planifient des services de nettoyage réguliers
                        </div>
                    </div>
                    <Button className="flex flex-row gap-2 text-white bg-primary">
                        Réserver
                        <ArrowUpRight className="w-4 h-4 " />
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
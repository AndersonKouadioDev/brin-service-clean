import Image from "next/image";

export default function Walk() {
    return(
        <div className="bg-[#EFF8FF] p-10">
            <div className="flex flex-col gap-6 py-20 items-center">
            <div className="text-primary text-lg font-medium">PROCESSUS DE RESERVATION</div>
            <div className="text-primary-600 text-2xl font-bold pb-10">COMMENT CA MARCHE ?</div>
            <div className="flex flex-row justify-around items-stretch gap-4 w-full">
            <div className="flex flex-col gap-4 items-center">
                    <div className="bg-primary text-xl text-white w-16 h-16 flex items-center justify-center rounded-xl transform rotate-45">
                        1
                    </div>
                    <div className="text-lg font-semibold">Demander un devis</div>
            </div>
            <div className="flex flex-col gap-4 items-center">
                    <div className="bg-primary text-xl text-white w-16 h-16 flex items-center justify-center rounded-xl transform rotate-45">
                        2
                    </div>
                    <div className="text-lg font-semibold">Revoir le plan de nettoyage</div>
            </div>
            <div className="flex flex-col gap-4 items-center">
                    <div className="bg-primary text-xl text-white w-16 h-16 flex items-center justify-center rounded-xl transform rotate-45">
                        3
                    </div>
                    <div className="text-lg font-semibold">Confirmer la réservation</div>
            </div>
            </div>
            </div>
        </div>
    );
}
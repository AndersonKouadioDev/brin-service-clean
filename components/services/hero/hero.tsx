
import Image from "next/image";
import BreadcrumbNav from "./breadcrumbs";




export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full h-[calc(100vh-200px)]">
      <Image
        className="absolute inset-0 w-full h-full object-cover shrink-0"
        src="/assets/images/backgrounds/background_3.png"
        alt="herosection"
        objectPosition="top"
        fill
      />
      <div className="absolute w-full h-full bg-blue-400/60 px-4"></div>

      <div className="absolute px-4 pt-4 inset-0 flex flex-col bottom-2 items-start justify-center text-left text-white text-xl sm:text-2xl lg:text-2xl font-semibold gap-20 lg:gap-32">

        {/* Breadcrumbs */}
        <div className="relative ">
        <BreadcrumbNav/>
        </div>

        {/* Texte principal */}
        <div className=" mx-auto relative p-8 flex flex-col gap-6">
          <div className="text-5xl font-black">Services</div>
        </div>        
      </div>

      
    </div>
  );
}
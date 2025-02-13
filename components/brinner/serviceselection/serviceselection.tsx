import React from 'react';
import { Building2, Trees, Home, Building, WavesLadder } from 'lucide-react';
import { Button } from '@nextui-org/react';

export default function ServiceSelection () {
  const services = [
    { id: 'business', icon: <Building2 size={40} />, title: 'Nettoyage bureaux et\nlocaux professionnels' },
    { id: 'public', icon: <Building size={40} />, title: 'Nettoyage des lieux\npublics' },
    { id: 'residential', icon: <Home size={40} />, title: 'Nettoyage résidentiel' }
  ];

  const prestations = [
    { id: 'green', icon: <Trees size={24} />, title: 'Espaces verts\net piscine' },
    { id: 'deep', icon: <WavesLadder size={24} />, title: 'Ménage\napprofondi' },
    { id: 'versaille', icon: <WavesLadder size={24} />, title: 'Versaille' },
    { id: 'laundry', icon: <WavesLadder size={24} />, title: 'Lessive' },
    { id: 'rat', icon: <WavesLadder size={24} />, title: 'Dératisation\ndes locaux' }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto border-2 border-gray-200 rounded-lg relative -top-12 bg-white">
      <h2 className="text-2xl font-bold text-primary mb-8">Sélectionnez un service</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {services.map((service) => (
          <div key={service.id} className="p-6 rounded-lg border-2 border-gray-200 hover:border-secondary hover:border-white hover:bg-secondary hover:text-white transition-all cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 border-2 p-2 rounded-full">{service.icon}</div>
              <p className="whitespace-pre-line">{service.title}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-medium text-primary mb-8">Sélectionnez les prestations</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {prestations.map((prestation) => (
          <div key={prestation.id} className="p-4 rounded-lg border-2 border-gray-200 hover:border-cyan-200 transition-all">
            <div className="flex flex-row items-center text-center">
              <div className="mb-2 text-secondary">{prestation.icon}</div>
              <p className="text-sm whitespace-pre-line">{prestation.title}</p>
            </div>
          </div>
        ))}
      </div>

      <Button className=" bg-primary mx-auto items-center self-center text-white py-6 px-20 rounded-lg hover:bg-pink-600 transition-colors">
        Suivant
      </Button>
    </div>
  );
};



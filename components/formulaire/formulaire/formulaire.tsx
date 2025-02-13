"use client";

import React from 'react';
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { Textarea } from '@nextui-org/react';
import { Select, SelectItem } from '@nextui-org/react';
import { Checkbox } from '@nextui-org/react';

export default function Formulaires() {
  return (
    <form className="max-w-2xl mx-auto p-6 space-y-8 border-2 border-gray-200 rounded-lg bg-white relative -top-12">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-primary">Vos contacts</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <Input label="Nom" id="firstName" />
          <Input label="Prénom" id="lastName" />
        </div>

        <Input label="Nom d'entreprise (si il s'agit d'une entreprise)" id="companyName" />
        <Input label="Email" id="email" type="email" />
        <Input label="Numéro de téléphone" id="phone" type="tel" />
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-primary">Adresse</h2>
        <Input label="Rue" id="street" />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Ville" id="city" />
          <Input label="Pays" id="country" />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-primary">Détails du service</h2>
        <Textarea label="Veuillez fournir autant d'information que possible (optionnel)" id="details" className="h-32" />
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-primary">Choisissez votre disponibilité</h2>
        
        <Select label="Sélectionnez la période de passage" id="period">
          <SelectItem value="">Sélectionnez une période</SelectItem>
          <SelectItem value="morning">Matin</SelectItem>
          <SelectItem value="afternoon">Après-midi</SelectItem>
          <SelectItem value="evening">Soir</SelectItem>
        </Select>

        <div className="space-y-2">
        <p className="text-sm font-medium">Précisez le moment de la journée</p>
        {["N'importe quel moment", "La matinée", "L'après-midi", "La soirée"].map((label, index) => (
            <div key={index} className="flex items-center space-x-2">
            <Checkbox id={`time-${index}`} />
            <label htmlFor={`time-${index}`} className="text-sm">{label}</label>
            </div>
        ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-primary">Importez les images (optionnel)</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Button variant="solid" type="button">Choisissez des fichiers</Button>
        </div>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-pink-700 text-white">Réserver</Button>
    </form>
  );
}

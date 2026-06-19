
"use client";

import { useState } from "react";
import Link from "next/link";
import { medicines } from "@/data/medicines";


export default async function MedicineDetail({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const medicine = medicines.find(
    (m) => m.name.toLowerCase() === name.toLowerCase()
  );

  if (!medicine) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Medicine Not Found
        </h1>
      </main>
    );
  }

  return (
  <main className="min-h-screen bg-gray-100 py-12">
    <div className="max-w-4xl mx-auto">

      <a
        href="/medicines"
        className="inline-block mb-6 text-blue-600 font-semibold"
      >
        ← Back to Medicines
      </a>

      <div className="bg-white rounded-3xl shadow-xl p-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="text-5xl">💊</div>

          <div>
            <h1 className="text-5xl font-bold text-blue-600">
              {medicine.name}
            </h1>

            <span className="inline-block mt-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
              {medicine.category}
            </span>
          </div>
        </div>

        <div className="space-y-8">

          <div>
            <h2 className="text-2xl font-bold text-black mb-2">
              Uses
            </h2>

            <p className="text-gray-700">
              {medicine.uses}
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl">
            <h2 className="text-xl font-bold text-red-700">
              Side Effects
            </h2>

            <p className="text-gray-700 mt-2">
              {medicine.sideEffects}
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-xl">
            <h2 className="text-xl font-bold text-yellow-700">
              Precautions
            </h2>

            <p className="text-gray-700 mt-2">
              {medicine.precautions}
            </p>
          </div>

        </div>

      </div>

    </div>
  </main>
);

       
     
}
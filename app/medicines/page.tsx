import { medicines } from "@/data/medicines";

export default function MedicinesPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-gray-900">
          Medicines Explorer
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Learn about common medicines and their safe usage.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {medicines.map((medicine) => (
            <div
              key={medicine.id}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl">💊</div>

              <h2 className="text-2xl font-bold mt-4 text-gray-900">
                {medicine.name}
              </h2>

              <p className="mt-3">
                <strong>Uses:</strong> {medicine.uses}
              </p>

              <p className="mt-2">
                <strong>Side Effects:</strong> {medicine.sideEffects}
              </p>

              <p className="mt-2">
                <strong>Precautions:</strong> {medicine.precautions}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
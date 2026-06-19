"use client";

import { useState } from "react";
import { medicines } from "@/data/medicines";

export default function MedicinesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

 const filteredMedicines = medicines.filter((medicine) => {
  const matchesSearch = medicine.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" ||
    medicine.category === category;

  return matchesSearch && matchesCategory;
});

  return (
    <main className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-gray-900">
          Medicines Explorer
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Learn about common medicines and their safe usage.
        </p>

        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search medicine..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl p-4 rounded-xl border border-gray-300 shadow-sm"
          />
        </div>
<div className="flex flex-wrap gap-3 justify-center mt-6">

  {["All", "Pain Relief", "Allergy", "Supplements", "Antibiotics"].map((cat) => (
    <button
      key={cat}
      onClick={() => setCategory(cat)}
      className={`px-4 py-2 rounded-full transition ${
        category === cat
          ? "bg-blue-600 text-white"
          : "bg-white border border-gray-300 text-gray-700"
      }`}
    >
      {cat}
    </button>
  ))}

</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {filteredMedicines.map((medicine) => (
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
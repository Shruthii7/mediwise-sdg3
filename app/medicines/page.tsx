"use client";

import { useState } from "react";
import Link from "next/link";
import { medicines } from "@/data/medicines";


export default function MedicinesPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

const filteredMedicines = medicines.filter((medicine) => {
  const matchesSearch =
    medicine.name.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || medicine.category === category;

  return matchesSearch && matchesCategory;
});  
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
<a
  href="/"
  className="inline-block mb-6 text-blue-600 font-semibold"
>
  ← Back to Home
</a>
        <h1 className="text-5xl font-bold text-center mb-4 text-black">
          Medicines Database
        </h1>

        <p className="text-center text-2xl text-gray-600 mb-12">
          Explore commonly used medicines.
        </p>

        <div className="flex justify-center mt-8 mb-10">
  <input
    type="text"
    placeholder="🔍 Search medicines..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
      w-full
      max-w-xl
      px-5
      py-4
      rounded-xl
      border-2
      border-blue-200
      bg-white
      text-gray-800
      text-lg
      shadow-md
      focus:outline-none
      focus:border-blue-500
      focus:ring-2
      focus:ring-blue-300
    "
  />

  <div className="flex flex-wrap justify-center gap-3 mb-10">

  <button
    onClick={() => setCategory("All")}
    className={`px-4 py-2 rounded-lg ${
      category === "All"
        ? "bg-blue-600 text-white"
        : "bg-white border"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setCategory("Pain Relief")}
    className={`px-4 py-2 rounded-lg ${
      category === "Pain Relief"
        ? "bg-blue-600 text-white"
        : "bg-white border"
    }`}
  >
    Pain Relief
  </button>

  <button
    onClick={() => setCategory("Allergy")}
    className={`px-4 py-2 rounded-lg ${
      category === "Allergy"
        ? "bg-blue-600 text-white"
        : "bg-white border"
    }`}
  >
    Allergy
  </button>

  <button
    onClick={() => setCategory("Antibiotics")}
    className={`px-4 py-2 rounded-lg ${
      category === "Antibiotics"
        ? "bg-blue-600 text-white"
        : "bg-white border"
    }`}
  >
    Antibiotics
  </button>

  <button
    onClick={() => setCategory("Supplements")}
    className={`px-4 py-2 rounded-lg ${
      category === "Supplements"
        ? "bg-blue-600 text-white"
        : "bg-white border"
    }`}
  >
    Supplements
  </button>

</div>
</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredMedicines.map((medicine) => (
            <div
              key={medicine.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-blue-600">
                {medicine.name}
              </h2>

              <p className="mt-3 text-gray-600">
                {medicine.uses}
              </p>

              <a
                href={`/medicines/${medicine.name.toLowerCase()}`}
                className="inline-block mt-4 text-blue-600 font-semibold"
              >
                View Details →
              </a>
              {filteredMedicines.length === 0 && (
  <p className="text-center text-red-500 mt-8">
    No medicine found.
  </p>
)}
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
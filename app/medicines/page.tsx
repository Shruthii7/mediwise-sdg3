"use client";

import { useState } from "react";
import Link from "next/link";
import { medicines } from "@/data/medicines";


export default function MedicinesPage() {
    const [search, setSearch] = useState("");

const filteredMedicines = medicines.filter((medicine) =>
  medicine.name.toLowerCase().includes(search.toLowerCase())
);
    
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

        <input
  type="text"
  placeholder="Search medicine..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mt-6 w-full max-w-md px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

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
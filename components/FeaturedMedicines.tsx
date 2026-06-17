const medicines = [
  {
    name: "Paracetamol",
    use: "Pain & Fever Relief",
  },
  {
    name: "Ibuprofen",
    use: "Inflammation Relief",
  },
  {
    name: "Cetirizine",
    use: "Allergy Relief",
  },
  {
    name: "Vitamin D",
    use: "Bone Health",
  },
];

export default function FeaturedMedicines() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Featured Medicines
        </h2>

        <p className="text-center font-bold text-gray-600 mt-4">
          Explore commonly used medicines and their purposes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {medicines.map((medicine) => (
            <div
              key={medicine.name}
              className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-2xl font-bold mt-4 text-gray-900">
                💊
              </div>

              <h3 className="text-2xl font-bold mt-4 text-gray-900">
                {medicine.name}
              </h3>

              <p className="text-2xl font-bold mt-4 text-gray-900">
                {medicine.use}
              </p>

              <button className="mt-4 text-blue-600 font-semibold">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
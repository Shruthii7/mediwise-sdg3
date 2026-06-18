const interactions = [
  {
    medicines: "Paracetamol + Alcohol",
    risk: "May increase liver damage risk.",
  },
  {
    medicines: "Ibuprofen + Aspirin",
    risk: "May increase stomach irritation.",
  },
  {
    medicines: "Cetirizine + Alcohol",
    risk: "May cause excessive drowsiness.",
  },
];

export default function DrugInteractions() {
  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Drug Interaction Awareness
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Learn about common medicine combinations that may need caution.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {interactions.map((item) => (
            <div
              key={item.medicines}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl mb-4">
                ⚠️
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {item.medicines}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.risk}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
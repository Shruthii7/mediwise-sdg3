const goals = [
  "Medicine Awareness",
  "Health Education",
  "Safe Medication Practices",
  "Disease Prevention",
];

export default function SDGSection() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="text-6xl">
          🎯
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Supporting SDG 3
        </h2>

        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          MediWise promotes Good Health and Well-being by helping people
          understand medicines, health practices, and safe medication use.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {goals.map((goal) => (
            <div
              key={goal}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-3xl mb-3">
                ✅
              </div>

              <h3 className="font-semibold text-gray-900">
                {goal}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
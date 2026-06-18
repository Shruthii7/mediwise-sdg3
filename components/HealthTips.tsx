const tips = [
  {
    icon: "💧",
    title: "Stay Hydrated",
    description: "Drink enough water throughout the day.",
  },
  {
    icon: "😴",
    title: "Get Quality Sleep",
    description: "Aim for 7-8 hours of sleep every night.",
  },
  {
    icon: "🚶",
    title: "Exercise Daily",
    description: "At least 30 minutes of activity helps maintain health.",
  },
  {
    icon: "💊",
    title: "Use Medicines Safely",
    description: "Always follow dosage instructions carefully.",
  },
];

export default function HealthTips() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Daily Health Tips
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Small habits can make a big difference to your health.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl">
                {tip.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {tip.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {tip.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
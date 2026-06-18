export default function QuizSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          Medicine Awareness Quiz
        </h2>

        <p className="text-gray-600 mt-4">
          Test your knowledge about medicines and health.
        </p>

        <div className="bg-gray-100 rounded-2xl p-8 mt-12 shadow-lg">

          <h3 className="text-2xl font-semibold text-gray-900">
            Can antibiotics treat viral infections?
          </h3>

          <div className="mt-8 space-y-4">

            <button className="w-full bg-white p-4 rounded-xl text-gray-600 mt-4 shadow hover:bg-blue-50">
              Yes
            </button>

            <button className="w-full bg-white p-4 rounded-xl text-gray-600 mt-4 shadow hover:bg-blue-50">
              No
            </button>

          </div>

          <p className="mt-6 text-sm text-gray-500">
            (Interactive scoring coming soon)
          </p>

        </div>

      </div>
    </section>
  );
}
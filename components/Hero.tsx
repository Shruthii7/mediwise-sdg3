export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Understand Your Medicines Better
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Learn medicine uses, side effects,
            precautions and health awareness in one place.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Explore Medicines
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
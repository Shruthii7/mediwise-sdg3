export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}

          <div>

            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
              Understand Your Medicines Better
            </h1>

            <p className="mt-6 text-lg text-gray-400">
              Learn medicine uses, side effects,
              precautions and health awareness in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                Explore Medicines
              </button>

              <button className="border border-gray-500 text-white px-6 py-3 rounded-lg">
                Learn More
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center">

            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">

              <h3 className="text-xl font-bold text-blue-600">
                💊 Medicine of the Day
              </h3>

              <div className="mt-6">

                <h2 className="text-3xl font-bold">
                  Paracetamol
                </h2>

                <p className="mt-3 text-gray-600">
                  Commonly used to reduce fever and relieve mild to moderate pain.
                </p>

                <div className="mt-6 space-y-3">

                  <div className="bg-blue-50 p-3 rounded-lg">
                    ✓ Pain Relief
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    ✓ Fever Reduction
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    ✓ Over-the-Counter Medicine
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
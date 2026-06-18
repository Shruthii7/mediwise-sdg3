export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              MediWise
            </h2>

            <p className="text-gray-400 mt-3">
              Medicine awareness platform supporting
              SDG 3: Good Health and Well-being.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Medicines</li>
              <li>Quiz</li>
              <li>About</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Disclaimer
            </h3>

            <p className="text-gray-400">
              Information provided is for educational
              purposes only and not medical advice.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          © 2026 MediWise • Built for SDG 3 Hackathon
        </div>

      </div>
    </footer>
  );
}
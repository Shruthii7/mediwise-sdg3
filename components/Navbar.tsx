import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <div className="text-2xl font-bold text-blue-600">
            MediWise
          </div>

          <div className="hidden md:flex gap-8 font-medium text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/medicines">Medicines</Link>
            <a href="#">Interactions</a>
            <a href="#">Health Tips</a>
            <a href="#">Quiz</a>
            <a href="#">About</a>
          </div>

          <button className="md:hidden text-2xl">
            ☰
          </button>

        </div>
      </div>
    </nav>
  );
}
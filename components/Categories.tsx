const categories = [
  { icon: "🩹", name: "Pain Relief" },
  { icon: "🤧", name: "Allergy Care" },
  { icon: "❤️", name: "Heart Health" },
  { icon: "💊", name: "Vitamins" },
  { icon: "🧠", name: "Mental Wellness" },
  { icon: "👶", name: "Child Care" },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Browse by Category
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Find medicines and health information by category.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center cursor-pointer"
            >
              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="mt-4 font-semibold text-gray-900">
                {category.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedMedicines from "@/components/FeaturedMedicines";
import Categories from "@/components/Categories";
import DrugInteractions from "@/components/DrugInteractions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedMedicines />
      <Categories />
      <DrugInteractions />
    </>
  );
}
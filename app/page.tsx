import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedMedicines from "@/components/FeaturedMedicines";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedMedicines />
    </>
  );
}
"use client"
import HeroCarousel from "@/components/carousel/carousel";
import DressStyleSection from "@/components/dress-style-section/dress-style-section";
import ProductSection from "@/components/product-section/product-section";

export default function Home() {
  const sampleProducts = [
    {
      id: 1,
      image: "/images/image 7.png",
      title: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
    },
    {
      id: 2,
      image: "/images/image 9 (1).png",
      title: "Skinny Fit Jeans",
      price: 260,
      rating: 3.5,
      discountedPrice: 240,
      discountPercentage: 20,
    },
    {
      id: 3,
      image: "/images/image 8 (2).png",
      title: "Checkered Shirt",
      price: 180,
      rating: 4.5,
    },
    {
      id: 4,
      image: "/images/image 10 (1).png",
      title: "Sleeve Striped T-shirt",
      price: 160,
      rating: 4.5,
      discountedPrice: 130,
      discountPercentage: 30,
    },
  ];

  return (
    <>
      <HeroCarousel />
      <div className="min-h-screen bg-white">
        <ProductSection
          title="NEW ARRIVALS"
          products={sampleProducts} onViewAll={function (): void {
            throw new Error("Function not implemented.");
          }} />

        {/* Example of reusing with different data */}
        <ProductSection
          title="BEST SELLERS"
          products={sampleProducts.slice(0, 3)} onViewAll={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <DressStyleSection />
    </>
  );
}

import FloatingCard from "@/components/floating-card";
import ProductCard from "@/components/product-card";
import { properties } from "@/lib/placeholder-data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div id="hero_background" />
        <FloatingCard />
        <div className="text-center py-10">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h2 className="capitalize text-4xl font-semibold">
              Browse the range
            </h2>
            <p className="font-light px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit amet sit
              dolor.
            </p>
          </div>
        </div>
        <div id="card_layout_3">
          <div>
            <Image
              src="/img1.webp"
              alt="image"
              width={350}
              height={350}
              priority
            />
            <p className="pt-6 text-center font-semibold text-2xl">Dining</p>
          </div>
          <div>
            <Image
              src="/img2.webp"
              alt="image"
              width={350}
              height={350}
              priority
            />
            <p className="pt-6 text-center font-semibold text-2xl">Living</p>
          </div>
          <div>
            <Image
              src="/img3.webp"
              alt="A Bedroom Image"
              width={350}
              height={350}
              priority
            />
            <p className="pt-6 text-center font-semibold text-2xl">Bedroom</p>
          </div>
        </div>
        <div className="text-center py-10">
          <div className="py-10">
            <h2 className="capitalize text-4xl font-semibold">Our products</h2>
          </div>
        </div>
        <div id="card_layout_4" className="md:px-4 lg:px-8">
          {properties.map((property) => (
            <ProductCard key={property.id} property={{ ...property }} />
          ))}
        </div>
        <div className="border flex items-center justify-center py-10">
          <button className="bg-white capitalize cursor-pointer text-primary px-6 py-3 font-semibold border-primary border">
            Show more
          </button>
        </div>
      </div>
    </>
  );
}

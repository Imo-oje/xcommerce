"use client";
import { calculateDiscount, formatPrice } from "@/lib/utils";
import { Property } from "@/types";
import { ArrowLeftRight, Heart, Share2 } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ property }: { property: Property }) {
  return (
    <div className="relative bg-muted group overflow-hidden">
      {(property.discount > 0 || property.new) && (
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm z-20">
          {property.discount > 0 ? `-${property.discount}%` : "New"}
        </div>
      )}

      <Image
        alt={`${property.name} image`}
        src={property.img}
        width={350}
        height={200}
        className="w-full object-cover"
      />

      <div className="p-4 relative z-10">
        <h3 className="font-semibold text-xl capitalize">{property.name}</h3>
        <small className="font-light text-sm">{property.category}</small>
        <div className="font-semibold flex gap-2 text-lg">
          <strong>{`$${
            property.discount > 0
              ? formatPrice(
                  calculateDiscount(property.price, property.discount)
                )
              : formatPrice(property.price)
          }`}</strong>
          {property.discount > 0 && (
            <span className="line-through font-light">{`$${formatPrice(
              property.price
            )}`}</span>
          )}
        </div>
      </div>

      <div className="absolute text-white inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-6 items-center justify-center">
        <button
          className="bg-white cursor-pointer text-primary w-4/5 px-6 py-3 font-semibold shadow"
          onClick={() => {
            console.log("hello");
          }}
        >
          Add to cart
        </button>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5 cursor-pointer">
            <Share2 className="size-5" />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-0.5 cursor-pointer">
            <ArrowLeftRight className="size-5" />
            <span>Compare</span>
          </div>
          <div className="flex items-center gap-0.5 cursor-pointer">
            <Heart className="size-5" />
            <span>Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}

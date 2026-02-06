"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/lib/products";

export default function ProductGrid({
  categories,
  products,
}: {
  categories: string[];
  products: Product[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className="rounded-full"
        >
          All
        </Button>

        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden p-0">
            <Link href={`/products/${product.id}`}>
              <div className="flex aspect-square items-center justify-center bg-white p-6" />
            </Link>

            <CardContent className="p-4">
              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="line-clamp-2 text-gray-500 text-sm">
                  {product.description}
                </p>
              </Link>
            </CardContent>

            <CardFooter className="flex items-center justify-between p-4 pt-0">
              <div className="font-semibold">${product.price.toFixed(2)}</div>
              <Button size="sm">
                <ShoppingCart className="mr-2 size-4" /> Add
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

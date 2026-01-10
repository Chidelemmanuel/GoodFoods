"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

const items = [
  {
    name: "Fresh Salad Bowl",
    price: "IDR 45.000",
    image: "/images/Group 299.png",
  },
  {
    name: "Chicken Noodles",
    price: "IDR 75.000",
    image: "/images/Group 299 (1).png",
  },
  {
    name: "Smoothie Fruits",
    price: "IDR 45.000",
    image: "/images/Group 299 (2).png",
  },
  {
    name: "Hot Chicken Wings",
    price: "IDR 45.000",
    image: "/images/Group 299 (3).png",
  },
];

export function MostOrderedFood() {
  return (
    <Card className="col-span-1 p-0 rounded-none shadow-none border-none relative h-full bg-transparent">
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-base font-semibold text-slate-800">
          Most Ordered Food
        </CardTitle>
        <CardDescription className="text-[11px] font-medium text-slate-400">
          Adipiscing elit, sed do eiusmod tempor
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-8 space-y-0 p-0">
        {items.map((item, index) => (
          <div
            key={item.name}
            className={cn(
              "flex items-center justify-between py-4",
              index !== items.length - 1 && "border-b border-[#F4F7FE]"
            )}
          >
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <div className="relative items-center">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                </div>
              </div>

              <span className="font-bold text-sm text-slate-800 pb-5">
                {item.name}
              </span>
            </div>

            <span className="text-[#A6ABC8] text-[11px] font-bold pb-5">
              {item.price}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default MostOrderedFood;

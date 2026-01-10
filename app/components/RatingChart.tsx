"use client";

import React from "react";
import { PolarGrid, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "Hygiene", percentage: 85, fill: "var(--color-hygiene)" },
  { category: "FoodTaste", percentage: 85, fill: "var(--color-foodTaste)" },
  { category: "Packaging", percentage: 92, fill: "var(--color-packaging)" },
];

const chartConfig = {
  percentage: {
    label: "Score",
  },
  hygiene: {
    label: "Hygiene",
    color: "#6463D6",
  },
  foodTaste: {
    label: "Food Taste",
    color: "#F99C30",
  },
  packaging: {
    label: "Packaging",
    color: "#2FBFDE",
  },
} satisfies ChartConfig;

const RatingChart = () => {
  return (
    <Card className="flex flex-col border-none shadow-none h-full p-0 bg-white">
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-base font-semibold text-slate-800">
          Your Rating
        </CardTitle>
        <CardDescription className="text-[11px] text-slate-400 font-medium">
          Lorem ipsum dolor sit amet, consectetur
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center p-0 mt-8 h-full">
        <div className="relative w-full h-full min-h-[220px] max-w-[320px] mx-auto flex items-center justify-center">
          <div className="absolute top-[8%] left-[8%] z-30">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full border-2 border-[#6463D6] border-b-transparent rotate-[45deg]"></div>
              <div className="h-28 w-28 rounded-full bg-[#6463D6]/90 text-white flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(100,99,214,0.2)] backdrop-blur-[2px]">
                <span className="text-base font-bold">85%</span>
                <span className="text-[9px] font-semibold">Hygiene</span>
              </div>
            </div>
          </div>

          <div className="absolute top-[12%] right-[2%] z-20">
            <div className="relative">
              <div className="absolute -inset-2.5 rounded-full border-2 border-[#F99C30] border-l-transparent rotate-[30deg]"></div>
              <div className="h-48 w-48 rounded-full bg-[#F99C30]/90 text-white flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(249,156,48,0.2)] backdrop-blur-[2px]">
                <span className="text-2xl font-bold">85%</span>
                <span className="text-[11px] font-semibold">Food Taste</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[8%] left-[4%] z-10">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full border-2 border-[#2FBFDE] border-t-transparent rotate-[15deg]"></div>
              <div className="h-32 w-32 rounded-full bg-[#2FBFDE]/90 text-white flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(47,191,222,0.2)] backdrop-blur-[2px]">
                <span className="text-lg font-bold">92%</span>
                <span className="text-[11px] font-semibold">Packaging</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RatingChart;

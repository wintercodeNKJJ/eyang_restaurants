import { Category } from "@/types/dataTypes";
import { NextRequest, NextResponse } from "next/server";

const category: Category[] = [
  {
    id: 1,
    name: "Starters",
    description: "Appetizing starters",
    imageUrl: "/img/starters.jpg",
  },
  {
    id: 2,
    name: "Main Course",
    description: "Hearty main dishes",
    imageUrl: "/img/main.jpg",
  },
  {
    id: 3,
    name: "Desserts",
    description: "Sweet delights",
    imageUrl: "/img/desserts.jpg",
  },
  {
    id: 4,
    name: "Drinks",
    description: "Beverages and refreshments",
    imageUrl: "/img/drinks.jpg",
  },
  {
    id: 5,
    name: "Salads",
    description: "Fresh salad options",
    imageUrl: "/img/salads.jpg",
  },
];
export async function GET(request: NextRequest) {
  console.log(request);
  return NextResponse.json(category);
}

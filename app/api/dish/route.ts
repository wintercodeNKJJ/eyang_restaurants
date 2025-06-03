import { Dish } from "@/types/dataTypes";
import { NextRequest, NextResponse } from "next/server";

const dish: Dish[] = [
  {
    id: 1,
    name: "Grilled Chicken",
    slug: "Grilled_Chicken",
    description: "Juicy grilled chicken with herbs",
    price: 12.99,
    imageUrl: "/img/chicken.jpg",
    categoryId: 2,
    isAvailable: true,
    tags: ["protein", "grilled"],
    preparationTime: 20,
  },
  {
    id: 2,
    name: "Caesar Salad",
    slug: "Caesar_Salad",
    description: "Crispy lettuce with Caesar dressing",
    price: 7.5,
    imageUrl: "/img/salad.jpg",
    categoryId: 5,
    isAvailable: true,
    tags: ["vegetarian"],
    preparationTime: 10,
  },
  {
    id: 3,
    name: "Chocolate Cake",
    slug: "Chocolate_Cake",
    description: "Rich chocolate cake slice",
    price: 5.0,
    imageUrl: "/img/cake.jpg",
    categoryId: 3,
    isAvailable: true,
    tags: ["sweet"],
    preparationTime: 5,
  },
  {
    id: 4,
    name: "Lemonade",
    slug: "Lemonade",
    description: "Refreshing lemon drink",
    price: 3.0,
    imageUrl: "/img/lemonade.jpg",
    categoryId: 4,
    isAvailable: true,
    tags: ["drink"],
    preparationTime: 2,
  },
  {
    id: 5,
    name: "Garlic Bread",
    slug: "Garlic_Bread",
    description: "Toasted bread with garlic and butter",
    price: 4.5,
    imageUrl: "/img/garlicbread.jpg",
    categoryId: 1,
    isAvailable: true,
    tags: ["starter"],
    preparationTime: 8,
  },
];
export async function GET(request: NextRequest) {
  console.log(request);
  return NextResponse.json(dish);
}

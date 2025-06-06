import { Dish } from "@/types/dataTypes";
import { NextRequest, NextResponse } from "next/server";
import dishesData from "@/data/dishes.json";

const dish: Dish[] = dishesData.dishes;
export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const dishwithId = dish.find((x) => x.id === parseInt(id));
    if (dishwithId) {
      return NextResponse.json(dishwithId);
    }
    return NextResponse.json(
      { error: `No dish found with id: ${id}` },
      { status: 404 }
    );
  }
  if (slug) {
    const dishwithSlug = dish.find((x) => x.slug === slug);
    if (dishwithSlug) {
      return NextResponse.json(dishwithSlug);
    }
    return NextResponse.json(
      { error: `No dish found with slug: ${slug}` },
      { status: 404 }
    );
  }
  return NextResponse.json(dish);
}

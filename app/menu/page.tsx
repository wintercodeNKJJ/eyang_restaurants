"use client";
import Footer from "@/components/base/Footer";
import NavBar from "@/components/base/NavBar";
import Dish from "@/components/Dish";
import { DishesQuery } from "@/queries/dishesQuery";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const dishes = new DishesQuery();
  const dishesData = useQuery({
    queryKey: ["getdishesData"],
    queryFn: dishes.getDishes,
  });
  return (
    <main className=" space-y-6 p-4">
      <div className="flex flex-col gap-4">
        {dishesData.isSuccess ? (
          dishesData.data.map((data, index) => <Dish {...data} key={index} />)
        ) : (
          <p>Could not find your meals</p>
        )}
      </div>

      <div className="w-[800px]">
        <NavBar />
        <Footer />
      </div>
    </main>
  );
}

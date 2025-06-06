"use client";
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

  function groupedDishes() {
    // First, group the dishes by restaurantId
    if (dishesData.isSuccess) {
      return dishesData.data.reduce<
        Record<number, (typeof dishesData.data)[0][]>
      >((acc, dish) => {
        const { restaurantId } = dish;
        if (!acc[restaurantId]) {
          acc[restaurantId] = [];
        }
        acc[restaurantId].push(dish);
        return acc;
      }, {});
    } else {
      return [];
    }
  }

  return (
    <main className="flex flex-col w-full h-screen gap-20 relative overflow-y-scroll">
      <ul className="flex gap-4 items-center justify-center p-8 z-10 h-[50px] w-full sticky top-0 bg-black">
        <li>
          <h6>
            <a href="#id">Starters</a>
          </h6>
        </li>
        <li>
          <h6>
            <a href="#id">Breakfast</a>
          </h6>
        </li>
        <li>
          <h6>
            <a href="#id">Lunch</a>
          </h6>
        </li>
        <li>
          <h6>
            <a href="#id">Drinks</a>
          </h6>
        </li>
      </ul>

      <div className="w-full p-6">
        <div className="flex flex-col gap-4">
          {dishesData.isSuccess ? (
            Object.entries(groupedDishes()).map(([restaurantId, dishes]) => (
              <div key={restaurantId}>
                <h2>Restaurant ID: {restaurantId}</h2>
                {dishes.map((dish, index) => (
                  <Dish {...dish} key={index} />
                ))}
              </div>
            ))
          ) : (
            <p>Could not find your meals</p>
          )}
        </div>
      </div>
    </main>
  );
}

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
    <main className="flex flex-col w-full h-screen relative overflow-y-scroll">
      <ul className="flex overflow-x-auto gap-4 items-center justify-center p-4 z-10 min-h-[70px] w-full sticky top-0 bg-black">
        {dishesData.isSuccess
          ? Object.entries(groupedDishes()).map(([restaurantId, dishes]) => (
              <li key={restaurantId}>
                <h6>
                  <a href={`#${restaurantId}`} className="text-nowrap">
                    Restaurant {restaurantId}
                  </a>
                </h6>
              </li>
            ))
          : ""}
      </ul>

      <div className="w-full p-6">
        <div className="flex flex-col gap-4">
          {dishesData.isSuccess ? (
            Object.entries(groupedDishes()).map(([restaurantId, dishes]) => (
              <div key={restaurantId}>
                <h2 id={`${restaurantId}`}>Restaurant ID: {restaurantId}</h2>
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

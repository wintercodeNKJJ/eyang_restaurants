"use client";
import Dish from "@/components/Dish";
import DishDetails from "@/components/DishDetails";
import { DishesQuery } from "@/queries/dishesQuery";
import { Dish as DishT } from "@/types/dataTypes";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface dishDetailsContentProps {
  slug: string;
}

const Content = ({ slug }: dishDetailsContentProps) => {
  const dishes = new DishesQuery();
  const dishData = useQuery({
    queryKey: ["getdishData"],
    queryFn: () => dishes.getDish({ slug }),
  });
  const dishesData = useQuery({
    queryKey: ["getdishesData"],
    queryFn: () => dishes.getDishes(),
  });

  const filterFromSameRestaurant = (): DishT[] => {
    if (dishesData.isSuccess && dishData.isSuccess) {
      return dishesData.data.filter(
        (dish) => dish.restaurantId === dishData.data.restaurantId
      );
    } else {
      return [];
    }
  };
  return (
    <div className="h-screen overflow-y-scroll">
      {dishData.isSuccess ? (
        <div className="relative">
          <div className="sticky top-0 bg-black/30 backdrop-blur-lg z-[5]">
            <DishDetails {...dishData.data} />
          </div>
          <div className="flex flex-col gap-4">
            {dishData.isSuccess &&
              dishesData.isSuccess &&
              filterFromSameRestaurant().map((dish) => {
                return <Dish {...dish} />;
              })}
          </div>
        </div>
      ) : (
        <p>Could not find dish data</p>
      )}
    </div>
  );
};

export default Content;

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
  return (
    <main className=" flex relative min-h-screen">
      <div className="flex flex-col justify-center lg:justify-between items-center w-full py-20 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)),url('/home/eyangapp.webp')] bg-center">
        <h3>Nique.</h3>
        <div className="flex flex-col gap-1 items-center">
          <h2>Check Out</h2>
          <h1>Our Menu</h1>
        </div>
        <div className="w-fit absolute bottom-2/12 left-[50%] -translate-x-[50%] lg:static lg:translate-none">
          <NavBar />
        </div>
      </div>
      <div className="flex flex-col w-full px-12 py-10 gap-20">
        <ul className="flex gap-4 items-center justify-center">
          <li>
            <a href="#id">Starters</a>
          </li>
          <li>
            <a href="#id">Breakfast</a>
          </li>
          <li>
            <a href="#id">Lunch</a>
          </li>
          <li>
            <a href="#id">Drinks</a>
          </li>
        </ul>

        <div className="w-full overflow-y-scroll">
          <div className="flex flex-col gap-4">
            {dishesData.isSuccess ? (
              dishesData.data.map((data, index) => (
                <Dish {...data} key={index} />
              ))
            ) : (
              <p>Could not find your meals</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

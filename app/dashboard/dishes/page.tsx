// File: app/dashboard/dishes/page.tsx

"use client";

import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useStore } from "@/providers/datastore";
import { DishesQuery } from "@/queries/dishesQuery";
import { RestaurantQuery } from "@/queries/restaurantQuery";
import { Dish } from "@/types/dataTypes";
import { toast } from "react-toastify";

export default function ManageDishesPage() {
  const dishesQuery = new DishesQuery();
  const restaurantQuery = new RestaurantQuery();
  const queryClient = useQueryClient();
  const { selectedDish, setSelectedDish, clearSelectedDish } = useStore();

  const { data: restaurants } = useQuery({
    queryKey: ["restaurants"],
    queryFn: restaurantQuery.getRestaurant,
  });

  const { data: dishes, isLoading } = useQuery({
    queryKey: ["dishes"],
    queryFn: dishesQuery.getDishes,
  });

  const createMutation = useMutation({
    mutationFn: (newDish: Partial<Dish>) => dishesQuery.createDish(newDish),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["dishes"] }),
  });

  const updateMutation = useMutation({
    mutationFn: (dish: Dish) => dishesQuery.updateDish(dish),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["dishes"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => dishesQuery.deleteDish(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["dishes"] }),
  });

  useEffect(() => {
    return () => clearSelectedDish();
  }, [clearSelectedDish]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selectedDish?.id)
      updateMutation.mutate({ ...selectedDish, id: selectedDish.id } as Dish);
    else if (selectedDish) createMutation.mutate(selectedDish);
    else toast.info("selected should not be null");
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Manage Dishes</h1>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={selectedDish?.name || ""}
          onChange={(e) =>
            setSelectedDish({ ...selectedDish, name: e.target.value })
          }
          className="border px-2 py-1 rounded w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={selectedDish?.price || ""}
          onChange={(e) =>
            setSelectedDish({ ...selectedDish, price: +e.target.value })
          }
          className="border px-2 py-1 rounded w-full"
        />
        <select
          value={selectedDish?.restaurantId || ""}
          onChange={(e) =>
            setSelectedDish({ ...selectedDish, restaurantId: +e.target.value })
          }
          className="border px-2 py-1 rounded w-full"
        >
          <option value="">Select Restaurant</option>
          {restaurants?.map((r: any) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {selectedDish?.id ? "Update" : "Create"}
        </button>
        {selectedDish?.id && (
          <button
            type="button"
            onClick={clearSelectedDish}
            className="ml-2 text-sm text-gray-500"
          >
            Cancel
          </button>
        )}
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Price</th>
              <th className="border px-4 py-2 text-left">Restaurant</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dishes !== undefined &&
              dishes.map((dish: any) => (
                <tr key={dish.id} className="border-t">
                  <td className="border px-4 py-2">{dish.name}</td>
                  <td className="border px-4 py-2">{dish.price}</td>
                  <td className="border px-4 py-2">
                    {
                      restaurants?.find((r: any) => r.id === dish.restaurantId)
                        ?.name
                    }
                  </td>
                  <td className="border px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => setSelectedDish(dish)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteMutation.mutate(dish.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// File: app/dashboard/restaurants/page.tsx

"use client";

import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Restaurant } from "@/types/dataTypes";
import { useStore } from "@/providers/datastore";
import { RestaurantQuery } from "@/queries/restaurantQuery";

export default function ManageRestaurantsPage() {
  const restaurantQuery = new RestaurantQuery();
  const queryClient = useQueryClient();
  const { selectedRes, setSelectedRes, clearSelectedRes } = useStore();

  const { data: restaurants, isLoading } = useQuery<Restaurant[]>({
    queryKey: ["restaurants"],
    queryFn: restaurantQuery.getRestaurant,
  });

  const createMutation = useMutation({
    mutationFn: (newRestaurant: Restaurant) =>
      restaurantQuery.createRestaurant(newRestaurant),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["restaurants"] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, ...rest }: Partial<Restaurant> & { id: number }) =>
      axios.put(`/api/restaurants/${id}`, rest),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["restaurants"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => axios.delete(`/api/restaurants/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["restaurants"] }),
  });

  useEffect(() => {
    return () => clearSelectedRes();
  }, [clearSelectedRes]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selectedRes?.id)
      updateMutation.mutate({ id: selectedRes.id, ...selectedRes });
    else createMutation.mutate(selectedRes as Restaurant);
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Manage Restaurants</h1>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={selectedRes?.name || ""}
          onChange={(e) =>
            setSelectedRes({ ...selectedRes, name: e.target.value })
          }
          className="border px-2 py-1 rounded w-full"
        />
        <input
          type="text"
          placeholder="Address"
          value={selectedRes?.address || ""}
          onChange={(e) =>
            setSelectedRes({ ...selectedRes, address: e.target.value })
          }
          className="border px-2 py-1 rounded w-full"
        />
        <input
          type="text"
          placeholder="Phone"
          value={selectedRes?.phone || ""}
          onChange={(e) =>
            setSelectedRes({ ...selectedRes, phone: e.target.value })
          }
          className="border px-2 py-1 rounded w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={selectedRes?.email || ""}
          onChange={(e) =>
            setSelectedRes({ ...selectedRes, email: e.target.value })
          }
          className="border px-2 py-1 rounded w-full"
        />
        <textarea
          placeholder="About"
          value={selectedRes?.about || ""}
          onChange={(e) =>
            setSelectedRes({ ...selectedRes, about: e.target.value })
          }
          className="border px-2 py-1 rounded w-full"
        />
        <input
          type="url"
          placeholder="Logo URL"
          value={selectedRes?.logoUrl || ""}
          onChange={(e) =>
            setSelectedRes({ ...selectedRes, logoUrl: e.target.value })
          }
          className="border px-2 py-1 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {selectedRes?.id ? "Update" : "Create"}
        </button>
        {selectedRes?.id && (
          <button
            type="button"
            onClick={clearSelectedRes}
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
              <th className="border px-4 py-2 text-left">Phone</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants?.map((restaurant) => (
              <tr key={restaurant.id} className="border-t">
                <td className="border px-4 py-2">{restaurant.name}</td>
                <td className="border px-4 py-2">{restaurant.phone}</td>
                <td className="border px-4 py-2">{restaurant.email}</td>
                <td className="border px-4 py-2 text-center space-x-2">
                  <button
                    onClick={() => setSelectedRes(restaurant)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteMutation.mutate(restaurant.id)}
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

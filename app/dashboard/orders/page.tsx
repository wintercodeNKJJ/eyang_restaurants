// File: app/dashboard/orders/page.tsx

"use client";

import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useStore } from "@/providers/datastore";
import { OrderQuery } from "@/queries/orderQuery";
import { Order } from "@/types/dataTypes";

export default function ManageOrdersPage() {
  const orderQuery = new OrderQuery();
  const queryClient = useQueryClient();
  const { selectedOrd, setSelectedOrd, clearSelectedOrd } = useStore();

  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: orderQuery.getOrders,
  });

  const updateMutation = useMutation({
    mutationFn: (data: Order) => orderQuery.updateOrder(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["orders"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => orderQuery.deleteOrder(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["orders"] }),
  });

  useEffect(() => {
    return () => clearSelectedOrd();
  }, [clearSelectedOrd]);

  function handleUpdateStatus(
    status: "pending" | "preparing" | "served" | "completed" | "cancelled"
  ) {
    if (selectedOrd) selectedOrd.status = status;
    if (selectedOrd?.id) {
      updateMutation.mutate({ ...selectedOrd, id: selectedOrd.id } as Order);
    }
  }
  console.log(selectedOrd);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Manage Orders</h1>

      {selectedOrd && (
        <div className="space-x-2">
          <span className="text-lg font-medium">Order #{selectedOrd.id}</span>
          <select
            value={selectedOrd.status}
            onChange={(e) =>
              handleUpdateStatus(
                e.target.value as
                  | "pending"
                  | "preparing"
                  | "served"
                  | "completed"
                  | "cancelled"
              )
            }
            className="border px-2 py-1 rounded"
          >
            <option value="pending">Pending</option>
            <option value="preparing">Preparing</option>
            <option value="served">Served</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button
            onClick={clearSelectedOrd}
            className="ml-2 text-sm text-gray-500"
          >
            Cancel
          </button>
        </div>
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Order #</th>
              <th className="border px-4 py-2">User ID</th>
              <th className="border px-4 py-2">Table</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Payment</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders !== undefined &&
              orders.map((order: Order) => (
                <tr key={order.id} className="border-t">
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.userId}</td>
                  <td className="border px-4 py-2">
                    {order.tableNumber || "—"}
                  </td>
                  <td className="border px-4 py-2">{order.totalAmount} FCFA</td>
                  <td className="border px-4 py-2 capitalize">
                    {order.status}
                  </td>
                  <td className="border px-4 py-2">{order.paymentMethod}</td>
                  <td className="border px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => setSelectedOrd(order)}
                      className="text-blue-600 hover:underline"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteMutation.mutate(order.id)}
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

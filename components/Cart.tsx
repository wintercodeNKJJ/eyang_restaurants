// components/CartModal.tsx
"use client";

import { useStore } from "@/providers/datastore";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  XCircleIcon,
} from "@phosphor-icons/react";

export default function CartModal() {
  const { isOpen, closeCart, cart, incrementItem, decrementItem, getTotal } =
    useStore();

  if (!isOpen) return null;

  const total = getTotal();

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
      <div className="bg-white/80 text-black rounded-lg shadow-lg w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh] relative">
        <button
          onClick={closeCart}
          className="absolute top-3 right-3 text-xl font-bold hover:text-red-500"
        >
          <XCircleIcon size={32} color="red" />
        </button>
        <h6 className="font-semibold mb-4 flex items-center">
          <ShoppingCartIcon size={32} /> Your Cart
        </h6>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.dish.id} className="border-b pb-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      src={item.dish.imageUrl}
                      alt="dish"
                      className="w-32 h-24 object-cover rounded-xl bg-gray-200"
                    />
                    <div className="flex flex-col">
                      <h6>{item.dish.name}</h6>
                      <p>{item.dish.description?.substring(0, 50)}...</p>
                      <p>{item.dish.price} FCFA</p>
                      <div className="flex gap-2 mt-1 items-center">
                        <button onClick={() => decrementItem(item.dish.id)}>
                          <MinusCircleIcon size={32} />
                        </button>
                        <h6>{item.quantity}</h6>
                        <button onClick={() => incrementItem(item.dish.id)}>
                          <PlusCircleIcon size={32} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p>{item.dish.price * item.quantity} FCFA</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-right font-bold mt-4">Total: {total} FCFA</div>

            <div className="mt-6">
              <label className="block mb-1">Promo Code</label>
              <input
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter code"
              />
            </div>

            <div className="mt-4">
              <p className="font-semibold mb-2">Payment Method</p>
              <label className="block">
                <input type="radio" name="payment" className="mr-2" />
                Orange Money (enter phone later)
              </label>
              <label className="block">
                <input type="radio" name="payment" className="mr-2" />
                Cash (pay to restaurant manager)
              </label>
            </div>

            <div className="mt-4">
              <label className="block mb-1">Delivery Address</label>
              <textarea
                className="w-full border p-2 rounded"
                rows={3}
                placeholder="Your delivery address"
              ></textarea>
            </div>

            <button className="bg-green-600 text-white px-4 py-2 rounded w-full mt-6 hover:bg-green-700">
              Submit Order & Print Ticket
            </button>

            <p className="text-sm text-gray-500 mt-4">
              📦 Delivery within 30 minutes. Please verify your address before
              submitting.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

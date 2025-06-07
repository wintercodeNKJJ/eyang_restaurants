import React from "react";
import MyNavButton from "./MyNavButton";
import clsx from "clsx";
import { CartItem as CartItemT } from "@/types/dataTypes";
import { useStore } from "@/providers/datastore";
import { MinusCircleIcon, PlusCircleIcon, XIcon } from "@phosphor-icons/react";

const CartItem = (item: CartItemT) => {
  const { decrementItem, incrementItem, removeItem } = useStore();
  return (
    <div
      className={clsx(
        "flex items-center gap-4 p-4 rounded-2xl hover:bg-[var(--primary)]/30 justify-between relative",
        item.dish.special ? "outline outline-[var(--primary)]" : ""
      )}
    >
      <div className="flex gap-4 items-center">
        <img
          src={item.dish.imageUrl}
          alt="some item"
          className=" size-32 rounded-xl object-cover bg-gray-200"
        />
        <div className="flex flex-col gap-2">
          <h5>{item.dish.name}</h5>
          <div>
            <p>{item.dish.description?.substring(0, 50)}...</p>
            <p>
              <span>Price:</span> {item.dish.price} FCFA
            </p>
            {/* <div className="flex gap-2">
              <p>Total:</p>
              <p>{item.dish.price} FCFA x</p>
              <p>{item.quantity} =</p>
              <p className="text-[var(--primary)]">
                {item.dish.price * item.quantity} FCFA
              </p>
            </div> */}
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
          <div>
            <button
              className="ml-4 text-red-600 text-sm underline absolute top-2 right-2"
              onClick={() => removeItem(item.dish.id)}
            >
              <XIcon size={20} color="red" />
            </button>
          </div>
        </div>
      </div>
      <div className="py-2 px-3 outline outline-[var(--primary)] rounded-lg">
        <p>{item.dish.price * item.quantity} FCFA</p>
      </div>
    </div>
  );
};

export default CartItem;

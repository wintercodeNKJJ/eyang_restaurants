import React from "react";
import MyNavButton from "./MyNavButton";
import clsx from "clsx";

type CartItemProps = {
  img: string;
  title: string;
  qty: number;
  price: number;
  special: boolean;
};

const CartItem = ({
  img,
  title,
  qty,
  price,
  special = true,
}: CartItemProps) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-4 p-4 rounded-2xl hover:bg-[var(--primary)]/10 justify-between max-w-[500px]",
        special ? "outline outline-[var(--primary)]" : ""
      )}
    >
      <div className="flex gap-4 items-center">
        <img
          src="/"
          alt="some item"
          className=" size-32 rounded-xl object-cover bg-gray-200"
        />
        <div className="flex flex-col gap-2">
          <h5>{title}</h5>
          <div>
            <p>
              <span>Price:</span> {price} XAF
            </p>
            <div className="flex gap-2">
              <p>Total:</p>
              <p>{price} XAF x</p>
              <p>{qty} =</p>
              <p className="text-[var(--primary)]">{qty * price} XAF</p>
            </div>
          </div>
          <div>
            <button className="text-[var(--primary)] p-4">Remove</button>
          </div>
        </div>
      </div>
      <div className="py-2 px-3 outline outline-[var(--primary)] rounded-lg">
        <p>{qty}</p>
      </div>
    </div>
  );
};

export default CartItem;

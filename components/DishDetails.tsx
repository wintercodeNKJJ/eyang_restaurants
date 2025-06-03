import clsx from "clsx";
import React from "react";
import IconButton from "./IconButton";

type DishProps = {
  title: string;
  desc: string;
  price: string;
  offer?: string;
  special?: boolean;
  img?: string;
  link: string;
  restaurant: {
    title: string;
    img: string;
    phone: string;
  };
  qty: number;
};

const DishDetails = ({
  title,
  desc,
  price,
  offer,
  special = false,
  restaurant,
  qty,
}: DishProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6 items-center p-6 relative max-w-[500px] hover:bg-[var(--primary)]/10 rounded-3xl",
        special == true ? "border border-[var(--primary)]" : ""
      )}
    >
      <img
        src="/"
        alt="dish"
        className="w-full h-40 object-cover rounded-xl bg-gray-200"
      />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-2">
          <img
            src={restaurant.img}
            alt={restaurant.title}
            className="w-8 h-8 rounded-full bg-gray-200"
          />
          <div className="flex flex-col gap-1">
            <p>{restaurant.title}</p>
            <small>
              <a href={`tel:+${restaurant.phone}`}>{restaurant.phone}</a>
            </small>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h5>{title}</h5>
          <span className="flex gap-2">
            {offer ? (
              <>
                <p className=" line-through text-[var(--secondary)]">
                  {price} XAF
                </p>
                <p>{offer} XAF</p>
              </>
            ) : (
              <>
                <p>{price}XAF</p>
              </>
            )}
          </span>
        </div>
        <p className="text-[var(--secondary)]">{desc}</p>
        <div className="flex gap-4 w-full justify-between">
          <div className="flex gap-2 items-center">
            <p className="px-2 py-1 outline rounded-lg">+</p>
            <p className="w-6 text-center">{qty}</p>
            <p className="px-2 py-1 outline rounded-lg">-</p>
          </div>
          <div className="flex gap-4 h-fit">
            <IconButton title="view more" />
            <IconButton title="add to cart" state="white" />
          </div>
        </div>
      </div>
      {special && (
        <p className=" absolute -top-4 right-6 bg-[var(--primary)] text-black p-2 rounded-lg">
          Starter of the Day
        </p>
      )}
    </div>
  );
};

export default DishDetails;

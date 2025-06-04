import clsx from "clsx";
import React from "react";
import IconButton from "./IconButton";
import { Dish as DishT } from "@/types/dataTypes";

/**
 * 
 *   id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  categoryId: number;
  isAvailable: boolean;
  tags?: string[]; // e.g., ['vegan', 'spicy']
  preparationTime?: number; // in minutes 
 */

const Dish = ({
  name,
  slug,
  description,
  price,
  offer,
  special = false,
  imageUrl,
}: DishT) => {
  return (
    <div
      className={clsx(
        "flex gap-6 items-center px-6 py-5 relative max-w-[500px] lg:max-w-none hover:bg-[var(--primary)]/10 rounded-3xl",
        special == true ? "border border-[var(--primary)]" : ""
      )}
    >
      <img
        src={imageUrl}
        alt="dish"
        className="w-32 h-24 object-cover rounded-xl bg-gray-200"
      />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h5>{name}</h5>
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
        <p className="text-[var(--secondary)]">{description}</p>
        <div className="flex gap-4 w-full justify-end">
          <IconButton title="view more" link={`/menu/${slug}`} />
          <IconButton title="add to cart" state="white" />
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

export default Dish;

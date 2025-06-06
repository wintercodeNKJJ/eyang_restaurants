"use client";
import clsx from "clsx";
import React from "react";
import IconButton from "./IconButton";
import { Dish } from "@/types/dataTypes";
import {
  MinusCircleIcon,
  MinusIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import { useStore } from "@/providers/datastore";

const DishDetails = (data: Dish) => {
  const addItem = useStore((state) => state.addItem);
  return (
    <div
      className={clsx(
        "flex flex-col gap-6 items-center p-12 relative hover:bg-[var(--primary)]/10 rounded-3xl",
        data.special == true ? "border border-[var(--primary)]" : ""
      )}
    >
      <img
        src={data.imageUrl}
        alt="dish"
        className="w-full h-[300px] object-cover rounded-xl bg-gray-200"
      />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-2">
          <img
            src={data.imageUrl}
            alt={data.name}
            className="w-8 h-8 rounded-full bg-gray-200"
          />
          <div className="flex flex-col gap-1">
            <p>{data.name}</p>
            <small>
              <a href={`tel:+${data.restaurantId}`}>{data.restaurantId}</a>
            </small>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h5>{data.name}</h5>
          <span className="flex gap-2">
            {data.offer ? (
              <>
                <p className=" line-through text-[var(--secondary)]">
                  {data.price} XAF
                </p>
                <p>{data.offer} XAF</p>
              </>
            ) : (
              <>
                <p>{data.price}XAF</p>
              </>
            )}
          </span>
        </div>
        <p className="text-[var(--secondary)]">{data.description}</p>
        <div className="flex gap-4 w-full justify-between">
          <div className="flex gap-1 items-center">
            <p>
              <PlusCircleIcon size={32} />
            </p>
            <p className="w-6 text-center">{0}</p>
            <p>
              <MinusCircleIcon size={32} />
            </p>
          </div>
          <div className="flex gap-4 h-fit">
            <IconButton title="view more" />
            <span
              className="cursor-pointer"
              onClick={() =>
                addItem({
                  dish: data,
                  notes: "",
                })
              }
            >
              <IconButton title="add to cart" state="white" />
            </span>
          </div>
        </div>
      </div>
      {data.special ? (
        <p className=" absolute -top-4 right-6 bg-[var(--primary)] text-black p-2 rounded-lg">
          Starter of the Day
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default DishDetails;

import clsx from "clsx";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  state?: "selected" | "black" | "default";
  title: string;
  link?: string;
};

const MyButton = ({ state, title, link }: ButtonProps) => {
  return (
    <div
      className={clsx(
        "px-4 py-3 rounded-full h-fit",
        state === "selected"
          ? "bg-[#f1f1f1] text-black"
          : state === "black"
          ? "bg-black"
          : "bg-none text-black"
      )}
    >
      {link ? (
        <Link href={link}>
          <p className="text-nowrap">{title}</p>
        </Link>
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
};

export default MyButton;

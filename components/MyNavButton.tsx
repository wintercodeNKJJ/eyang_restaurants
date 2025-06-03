import clsx from "clsx";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  state?: "selected" | "black" | "default";
  title: string;
  link?: string;
  footer?: boolean;
};

const MyNavButton = ({ state, title, footer = false, link }: ButtonProps) => {
  return (
    <div
      className={clsx(
        "px-3 py-2",
        state === "selected"
          ? "text-[var(--primary)]"
          : state === "black"
          ? "text-[var(--secondary)]"
          : "bg-none text-black",
        footer && "text-white!"
      )}
    >
      {link ? (
        <Link href={link}>
          <h6>{title}</h6>
        </Link>
      ) : (
        <h6>{title}</h6>
      )}
    </div>
  );
};

export default MyNavButton;

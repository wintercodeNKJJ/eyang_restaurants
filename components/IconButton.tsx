import clsx from "clsx";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  state?: "white" | "outline";
  title: string;
  link?: string;
};

const IconButton = ({ state, title, link }: ButtonProps) => {
  return (
    <div
      className={clsx(
        "px-2 py-1 rounded-full flex items-center gap-2",
        state === "white"
          ? "bg-[var(--primary)] text-black"
          : "outline outline-[var(--primary)] text-[var(--primary)]"
      )}
    >
      {link ? (
        <Link href={link}>
          <p>{title}</p>
        </Link>
      ) : (
        <p>{title}</p>
      )}
      <i className="px-1 bg-white rounded-full">O</i>
    </div>
  );
};

export default IconButton;

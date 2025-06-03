import clsx from "clsx";
import Link from "next/link";
import React from "react";
import {} from "@phosphor-icons/react";
import {
  ArrowLineRightIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";

type ButtonProps = {
  state?: "white" | "outline";
  title: string;
  link?: string;
};

const IconButton = ({ state, title, link }: ButtonProps) => {
  return (
    <div
      className={clsx(
        "px-2 py-[6px] rounded-full flex items-center gap-2",
        state === "white"
          ? "bg-[var(--primary)] text-black"
          : "outline outline-[var(--primary)] text-[var(--primary)]"
      )}
    >
      {link ? (
        <>
          <Link href={link}>
            <p>{title}</p>
          </Link>
          <ArrowRightIcon
            size={24}
            className={clsx(
              "px-1 bg-[var(--background)] border rounded-full",
              state === "white" ? "text-[var(--primary)]" : ""
            )}
          />
        </>
      ) : (
        <>
          <p>{title}</p>
          <ArrowRightIcon
            size={24}
            className={clsx(
              "px-1 bg-[var(--background)] border rounded-full",
              state === "white" ? "text-[var(--primary)]" : ""
            )}
          />
        </>
      )}
    </div>
  );
};

export default IconButton;

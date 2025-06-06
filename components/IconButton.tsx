import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import {
  ArrowLineRightIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";

type ButtonProps = {
  state?: "white" | "outline";
  title: string;
  link?: string;
  icon?: "cart";
};

const IconButton = ({ state, title, link, icon }: ButtonProps) => {
  return (
    <div
      className={clsx(
        "px-2 py-[6px] rounded-full flex items-center gap-2  h-fit",
        state === "white"
          ? "bg-[var(--primary)] text-black"
          : "outline outline-[var(--primary)] text-[var(--primary)]"
      )}
    >
      {link ? (
        <>
          <Link href={link}>
            <p className="text-nowrap">{title}</p>
          </Link>
          {icon === "cart" ? (
            <ShoppingCartIcon size={24} />
          ) : (
            <ArrowRightIcon
              size={24}
              className={clsx(
                "px-1 bg-[var(--background)] border rounded-full",
                state === "white" ? "text-[var(--primary)]" : ""
              )}
            />
          )}
        </>
      ) : (
        <>
          <p className="text-nowrap">{title}</p>
          {icon === "cart" ? (
            <span>
              <ShoppingCartIcon size={24} />
            </span>
          ) : (
            <ArrowRightIcon
              size={24}
              className={clsx(
                "px-1 bg-[var(--background)] border rounded-full",
                state === "white" ? "text-[var(--primary)]" : ""
              )}
            />
          )}
        </>
      )}
    </div>
  );
};

export default IconButton;

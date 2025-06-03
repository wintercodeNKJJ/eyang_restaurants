import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "restaurant menu",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}

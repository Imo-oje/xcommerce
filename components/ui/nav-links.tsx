"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <ul className="flex p-2 items-center justify-center gap-14">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={clsx("text-lg", {
            "text-primary": pathname === link.path,
          })}
        >
          {link.name}
        </Link>
      ))}
    </ul>
  );
}

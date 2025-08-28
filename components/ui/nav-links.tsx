"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ setToggle }: { setToggle?: Function }) {
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
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={clsx("text-lg", {
            "text-primary": pathname === link.path,
          })}
          onClick={() => {
            if (pathname !== link.path && setToggle) {
              setToggle(false);
            }
          }}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}

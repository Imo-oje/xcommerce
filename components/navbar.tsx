"use client";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./ui/nav-links";
import {
  CircleUserRound,
  Search,
  ShoppingCart,
  HeartPlus,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      {/* MOBILE NAV */}
      {toggle && (
        <nav className=" lg:hidden fixed z-100 top-16 left-0 right-14 shadow bg-background">
          <ul className="flex flex-col items-center gap-8 py-8">
            <NavLinks setToggle={setToggle} />
          </ul>
        </nav>
      )}
      <nav className="flex bg-background border items-center justify-between gap-6 w-ful fixed z-1 top-0 right-0 left-0 p-4">
        <div onClick={() => setToggle(!toggle)} className="lg:hidden">
          {toggle ? (
            <X className="cursor-pointer" />
          ) : (
            <Menu className="cursor-pointer" />
          )}
        </div>

        <Link href="/" className="flex items-start justify-center gap-3">
          <Image alt="logo" src="logo.svg" width={35} height={40} />
          <h1 className="font-bold text-2xl">Furniro</h1>
        </Link>
        <ShoppingCart size={23} className="cursor-pointer lg:hidden" />
        <ul className="hidden lg:flex p-2 items-center justify-center gap-14">
          <NavLinks />
        </ul>
        <div className="hidden lg:flex items-center justify-center gap-12">
          <CircleUserRound size={23} className="cursor-pointer" />
          <Search size={23} className="cursor-pointer" />
          <HeartPlus size={23} className="cursor-pointer" />
          <ShoppingCart size={23} className="cursor-pointer" />
        </div>
      </nav>
    </>
  );
}

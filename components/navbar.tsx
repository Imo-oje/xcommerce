import Image from "next/image";
import Link from "next/link";
import NavLinks from "./ui/nav-links";
import { CircleUserRound, Search, ShoppingCart, HeartPlus } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex bg-background items-center justify-between gap-6 w-ful py-4 px-10 sticky z-1 top-0 right-0 left-0">
      <Link href="/" className="flex items-start justify-center gap-3">
        <Image alt="logo" src="logo.svg" width={35} height={40} />
        <h1 className="font-bold text-2xl">Furniro</h1>
      </Link>
      <NavLinks />
      <div className="flex items-center justify-center gap-12">
        <CircleUserRound size={23} className="cursor-pointer" />
        <Search size={23} className="cursor-pointer" />
        <HeartPlus size={23} className="cursor-pointer" />
        <ShoppingCart size={23} className="cursor-pointer" />
      </div>
    </nav>
  );
}

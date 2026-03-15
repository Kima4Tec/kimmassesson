"use client"
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex w-full justify-between items-center text-md px-10 p-3 sticky top-0 border-b border-zinc-200 bg-white/80 backdrop-blur shadow-sm z-50 dark:bg-black dark:text-zinc-400 dark:border-zinc-700">
      
      {/* Logo */}
      <div className="font-bold">Kim Massesson</div>

      {/* Desktop menu */}
      <div className="hidden md:flex flex-row gap-10 items-center dark:bg-black dark:text-zinc-400">
        <Link className={pathname === "/" ? "underline underline-offset-18 decoration-3" : "hover:text-orange-600"} href="/">Home</Link>
        <Link className={pathname === "/aboutme" ? "underline underline-offset-18 decoration-3" : "hover:text-orange-600"} href="/aboutme">Om mig</Link>
        <Link className={pathname === "/skills" ? "underline underline-offset-18 decoration-3" : "hover:text-orange-600"} href="/skills">Skills</Link>
        <Link className={pathname === "/aboutpage" ? "underline underline-offset-18 decoration-3" : "hover:text-orange-600"} href="/aboutpage">Om siden</Link>
        <Link className={pathname === "/history" ? "underline underline-offset-18 decoration-3" : "hover:text-orange-600"} href="/history">Sidens udvikling</Link>
        <div className="social-icons flex justify-end gap-3 sm:px-8 sm:py-3">
            <a href="https://www.linkedin.com/in/kim-m-9b9416159/">
<FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
      </div>

      {/* Hamburger ikon til mobil */}
      <div className="md:hidden cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
        {open ? "×" : "☰"}
      </div>

      {/* Mobilmenu */}
{open && (
  <div className="flex flex-col absolute top-16 left-0 w-full bg-white md:hidden shadow-md dark:bg-black dark:text-zinc-400">
    <Link className="p-4 hover:text-orange-500 border-b dark:border-zinc-700" href="/" onClick={() => setOpen(false)}>Home</Link>
    <Link className="p-4 hover:text-orange-500 border-b dark:border-zinc-700" href="/aboutme" onClick={() => setOpen(false)}>Om mig</Link>
    <Link className="p-4 hover:text-orange-500 border-b dark:border-zinc-700" href="/skills" onClick={() => setOpen(false)}>Skills</Link>
    <Link className="p-4 hover:text-orange-500 border-b dark:border-zinc-700" href="/aboutpage" onClick={() => setOpen(false)}>Om siden</Link>
    <Link className="p-4 hover:text-orange-500 border-b dark:border-zinc-700" href="/history" onClick={() => setOpen(false)}>Sidens udvikling</Link>
    <div className="p-4">SoMe</div>
  </div>
)}

    </nav>
  )
}
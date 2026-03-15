"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (    
  <nav className="flex w-full justify-between items-center text-md px-10 p-3 sticky top-0 border-b border-zinc-200 bg-white/80 backdrop-blur shadow-sm">
<div className="font-bold">Kim Massesson</div>

<div className="md:hidden cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
{open ? "X" : "☰"}
</div>
      <div
        className={`flex-col md:flex md:flex-row md:items-center absolute md:static top-20 left-6 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in ${
          open ? "flex" : "hidden"
        }`}
      >
        <Link className="p-4 md:p-0 hover:text-orange-500" href="/">
          Home
        </Link>
        <Link className="p-4 md:p-0 hover:text-orange-500" href="/aboutme">
          Om mig
        </Link>
        <Link className="p-4 md:p-0 hover:text-orange-500" href="/skills">
          Skills
        </Link>
        <Link className="p-4 md:p-0 hover:text-orange-500" href="/aboutpage">
          Om siden
        </Link>
        <Link className="p-4 md:p-0 hover:text-orange-500" href="/history">
          Sidens udvikling
        </Link>
        <div className="p-4 md:p-0">SoMe</div>
      </div>
    </nav>

    );
}

      // <div className="font-bold">Kim Massesson</div>
      // <div className="flex flex-row gap-10">
      //   <Link className="hover:text-orange-500" href="/">Home</Link>
      //   <Link className="hover:text-orange-500" href="/aboutme">Om mig</Link>
      //   <Link className="hover:text-orange-500" href="/skills">Skills</Link>
      //   <Link className="hover:text-orange-500" href="/aboutpage">Om siden</Link>
      //   <Link className="hover:text-orange-500" href="/history">Sidens udvikling</Link>
      // </div>
      // <div>SoMe</div>
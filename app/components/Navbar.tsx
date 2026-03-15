import Link from "next/link";

export default function Navbar() {
  return (    
  <nav className="flex w-full justify-between text-md px-10 p-3 sticky top-0 border-b border-zinc-200 bg-white/80 backdrop-blur shadow-sm">
      <div>Kim Massesson</div>
      <div className="flex flex-row gap-10">
        <Link className="hover:text-orange-500" href="/">Home</Link>
        <Link className="hover:text-orange-500" href="/aboutme">Om mig</Link>
        <Link className="hover:text-orange-500" href="/aboutpage">Om siden</Link>
        <Link className="hover:text-orange-500" href="/history">Sidens udvikling</Link>
      </div>
      <div>SoMe</div>
    </nav>

    );
}
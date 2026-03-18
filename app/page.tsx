import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-10 dark:bg-black sm:items-start">
      <h1 className="text-3xl font-bold mb-5">En portefølje-side i Next.js</h1>

<div className="text-lg sm:max-w-md text-zinc-600 dark:text-zinc-400"> 
  Velkommen til siden. Dette er et udviklingsprojekt i Nextjs, som jeg lavede for at afprøve dette React-baseret webframework.
  Det er en portefølje-side, som viser de teknologier, som jeg har arbejdet med, projekter, som jeg har lavet og samtidig kan du finde mit CV her.
  Du vil også kunne følge sidens historik, som jeg løbende vil opdatere, når jeg laver ændringer.
  Trinene i udviklingen kan du finde under <Link className="font-semibold hover:text-orange-500" href="/history">Sidens udvikling</Link>
  </div>
          <img className="mt-5 md:max-w-md rounded-xl shadow-md shadow-zinc-600" src="thinkpad.png" alt="thinkpad" />
      </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-10 dark:bg-black sm:items-start">
      <h1 className="text-3xl font-bold mb-5">Min side</h1>

<div className="text-lg sm:max-w-md text-zinc-600 dark:text-zinc-400"> 
  Velkommen til min side. Dette er et udviklingsprojekt i Nextjs, der skal ende med at være en portefølje-side om mig.
  Jeg har med vilje valgt at lægge siden op helt fra starten, lige efter at jeg har oprettet den med Next.js, så man kan følge udviklingen af siden. </div>
          <img className="mt-5 md:max-w-md rounded-xl shadow-md shadow-zinc-600" src="thinkpad.png" alt="thinkpad" />
      </main>
  );
}

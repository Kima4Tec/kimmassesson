import Link from "next/link";

export default function Home() {
  return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
<h1 className="text-3xl font-semibold mb-2">Kim Massesson</h1>

<div className="text-lg sm:max-w-md text-zinc-600 dark:text-zinc-400"> 
  Velkommen til min side. Dette er et udviklingsprojekt i Nextjs, der skal ende med at være en portefølje-side om mig.
  Jeg har med vilje valgt at lægge siden op helt fra starten, lige efter at jeg har oprettet den med Next.js, så man kan følge udviklingen af siden. </div>
      </main>
    </div>
  );
}

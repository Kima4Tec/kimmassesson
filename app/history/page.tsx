import Link from "next/link";

export default function History() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-4 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold">Udviklingshistorie</h1>
        <p className="text-lg">
          Denne side blev oprettet som et eksperiment for at udforske Next.js og Tailwind CSS. 
          Jeg ønskede at lære mere om disse teknologier og se, hvordan de kunne bruges til at skabe en simpel og stilfuld hjemmeside.
        </p>
        <p className="text-lg mb-4">
          Jeg håber, at jeg i udviklingen af siden, lærer en masse om Next.js.
        </p>
        <div className="text-xl font-semibold">Udviklingshistorie i trin</div>
        <ul className="list-disc list-inside ml-4 text-lg">
          <li>15-03-2026: Oprettede Nextjs hjemmeside med kommandoen: npx create-next-app@latest kimmassesson</li>
          <li>15-03-2026: Slettede home-siden, som Nextjs havde lavet, og oprettede en ny side med navnet Home</li>
            <li>15-03-2026: Oprettede en side med navnet aboutme</li>
          <li>15-03-2026: Oprettede en side med navnet aboutpage</li>
          <li>15-03-2026: Oprettede en side med navnet history</li>          
            <li>15-03-2026: Uploadede siden til Github</li>
          <li>15-03-2026: Oprettede en bruger hos{' '}
            <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              Vercel
            </Link>
          </li>
            <li>15-03-2026: Oprettede et projekt hos Vercel, forbundet til min GitHub side, der bliver opdateret, hver gang jeg committer til GitHub</li>
            <li>15-03-2026: Har tidligere købt domænet kimmassesson.dk gennem Simply.com - ændrede navneserverne her til at pege mod Vercel</li>
            <li>15-03-2026: Siden er nu live på https://kimmassesson.dk</li>
            <li>Oprettet Navbar i components/Navbar.tsx og importeret den i layout.tsx</li>
        </ul>
      </main>
    </div>
  );
}

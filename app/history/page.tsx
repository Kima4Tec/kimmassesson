import Timeline from "@/components/TimeLInes";
import Link from "next/link";

export default function History() {
  return (
    <main className="max-w-6xl mx-auto p-10 dark:bg-black sm:items-start">
      <h1 className="text-3xl font-bold mb-8">Udviklingshistorie</h1>
        <p className="text-lg">
          Denne side blev oprettet som et eksperiment for at udforske Next.js og Tailwind CSS. 
          Jeg ønskede at lære mere om disse teknologier og se, hvordan de kunne bruges til at skabe en simpel og stilfuld hjemmeside.
        </p>
        <p className="text-lg mb-4">
          Jeg håber, at jeg i udviklingen af siden, lærer en masse om Next.js.
        </p>
        <div className="text-xl font-semibold mb-3">Udviklingshistorie i trin</div>
<Timeline />
      </main>
  );
}

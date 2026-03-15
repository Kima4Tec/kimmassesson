export default function About() {
  return (
    <main className="max-w-6xl mx-auto p-10 dark:bg-black sm:items-start">
      <h1 className="text-3xl font-bold mb-8">Om mig</h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Hej! Jeg hedder Kim Massesson og er en passioneret webudvikler
          nysgerrig på forskellige frontend- og backend-teknologier.
        </p>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Jeg har erfaring med HTML, JavaScript, Angular og Tailwind CSS. Jeg
          har også kigget på React og Nestjs.
        </p>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Jeg er en nysgerrig person, der elsker at lære nye ting og er
          inspireret af frontend, fordi man kan skabe smukke og funktionelle
          brugergrænseflader.
        </p>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Denne side er et eksperiment for at udforske Next.js, der både kan
          være frontend og backend, samt Tailwind CSS,
          og jeg håber, du finder den interessant!
        </p>
        <img className="max-w-md rounded mt-5" src="thinkpad.png" alt="thinkpad" />

      </main>
  );
}

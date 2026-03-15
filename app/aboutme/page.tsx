export default function About() {
  return (
    <main className="max-w-6xl md:flex md:flex-row mx-auto p-10 rounded dark:bg-black sm:items-start">
      <div>
      <h1 className="text-3xl font-bold mb-5">Om mig</h1>
        <p className="max-w-md text-lg mb-3 text-zinc-600 dark:text-zinc-400">
          Jeg hedder Kim Massesson og er en passioneret webudvikler
          nysgerrig på forskellige frontend- og backend-teknologier.
        </p>
        <p className="max-w-md text-lg mb-3 text-zinc-600 dark:text-zinc-400">
          Jeg har min daglige gang i Hvidovre, hvor jeg er lærling på TECs erhvervsuddannelse
          som datatekniker med specialisering i programmering. En uddannelse
          på næsten 5 år.<br /> Hvis alt går vel, er jeg færdiguddannet i august 2027.
        </p>
        <p className="max-w-md text-lg mb-3 text-zinc-600 dark:text-zinc-400">
          Jeg har erfaring med HTML, JavaScript, Angular og Tailwind CSS. Jeg
          har også kigget på React og Nestjs.
        </p>
        <p className="max-w-md text-lg mb-3 text-zinc-600 dark:text-zinc-400">
          Jeg er en nysgerrig person, der elsker at lære nye ting og er
          inspireret af frontend, fordi man kan skabe smukke og funktionelle
          brugergrænseflader.
        </p>
        <p className="max-w-md text-lg mb-3 text-zinc-600 dark:text-zinc-400">
          Denne side er et eksperiment for at udforske Next.js, der både kan
          være frontend og backend, samt Tailwind CSS,
          og jeg håber, du finder den interessant!
        </p>
        </div>
        <div>
        <img className="mt-5 md:mt-15 md:ml-15 md:max-w-xs lg:max-w-md rounded-xl shadow-md shadow-zinc-600" src="kim.png" alt="Kim Massesson" />
        </div>
      </main>
  );
}

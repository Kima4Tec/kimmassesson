export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-4 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold">Om siden</h1>
        <p className="text-lg">
          Sidens kode ligger på GitHub:{" "}
          <a
            href="https://github.com/kima4tec/kimmassesson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://github.com/kima4tec/kimmassesson
          </a>
          
        </p>
        <p>Den er bygget med Next.js og Tailwind CSS, og jeg har brugt TypeScript til at skrive koden. 
          Jeg har også brugt Vercel til at hoste siden, hvilket gør det nemt at deploye og opdatere den.
          Domænet er købt gennem Simply.com, og jeg har konfigureret det til at pege på min Vercel-hostede side.
          </p>

            Da jeg oprettede siden, blev disse dependencies installeret:
            <ul className="list-disc list-inside ml-4">
              <li>next.js</li>
              <li>tailwind CSS</li>
              <li>typeScript</li>
              <li>react</li>
              <li>react-dom</li>
              <li>@tailwindcss/postcss</li>
              <li>@types/node</li>
              <li>@types/react</li>
              <li>@types/react-dom</li>
              <li>eslint</li>
              <li>eslint-config-next</li>
            </ul>


      </main>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto p-10 dark:bg-black sm:items-start">
      <h1 className="text-3xl font-bold mb-8">Om siden</h1>
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
        <p className="mt-5 mb-5">Den er bygget med <b>Next.js</b> og <b>Tailwind CSS</b>, og jeg har brugt <b>TypeScript</b> til at skrive koden. 
          Jeg har brugt <b>Vercel</b> til at hoste siden, hvilket gør det nemt at deploye og opdatere den.
          Domænet er købt gennem <b>Simply.com</b>, og jeg har konfigureret det til at pege på min Vercel-hostede side.
          </p>
            
            <h3 className="text-lg font-semibold">Dependencies</h3>
            <p className="mb-2">Da jeg oprettede siden, blev disse dependencies installeret:</p>
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

  );
}

export default function Education() {
  return (
    <main className="p-6 bg-white shadow rounded-b-lg max-w-4xl mx-auto mb-5 dark:bg-gray-900">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Uddannelse</h2>

    <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-white">TEC – Technical Education Copenhagen</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">Okt 2022 –</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 dark:text-gray-400">
            <li>Programmering i .NET (C#), SQL, JavaScript, TypeScript, Angular, HTML, CSS, Blazor, Git, Azure, Python,
                C++</li>
        </ul>
    </div>

    <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Københavns Universitet</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">2006 – 2012</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 dark:text-gray-400">
            <li>Cand.mag. i kunsthistorie med japansk som tilvalg</li>
            <li>Speciale: *Keep quiet, please!* – Museumsformidling af installationskunst til børn</li>
            <li>1 års udveksling i Japan</li>
        </ul>
    </div>

    <div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-white">KEA & Copenhagen Business Academy</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">2014 – 2015</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 dark:text-gray-400">
            <li>Skriftlig kommunikation</li>
            <li>Sociale medier – strategi, planlægning og markedsføring</li>
        </ul>
    </div>
    <br/>
    <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Sprog</h3>
              <div className="space-y-2 w-2/3">
                  <div className="flex items-center gap-2">
                      <div className="w-20 text-gray-700 dark:text-gray-400">Dansk</div>
                      <div className="bg-blue-500 h-3 w-full max-w-full">
                          <div className="bg-blue-700 h-3 w-full"></div>
                      </div>
                  </div>
              </div>
              <div className="space-y-2 w-2/3 mt-1">
                  <div className="flex items-center gap-2">
                      <div className="w-20 text-gray-700 dark:text-gray-400">Engelsk</div>
                      <div className="bg-blue-500 h-3 w-full max-w-full">
                          <div className="bg-blue-700 h-3 w-9/10"></div>
                      </div>
                  </div>
              </div>
              <div className="space-y-2 w-2/3 mt-1">
                  <div className="flex items-center gap-2">
                      <div className="w-20 text-gray-700 dark:text-gray-400">Svensk</div>
                      <div className="bg-blue-500 h-3 w-full max-w-full">
                          <div className="bg-blue-700 h-3 w-8/10"></div>
                      </div>
                  </div>
              </div>
                            <div className="space-y-2 w-2/3 mt-1">
                  <div className="flex items-center gap-2">
                      <div className="w-20 text-gray-700 dark:text-gray-400">Tysk</div>
                      <div className="bg-blue-500 h-3 w-full max-w-full">
                          <div className="bg-blue-700 h-3 w-6/10"></div>
                      </div>
                  </div>
              </div>
              <div className="space-y-2 w-2/3 mt-1">
                  <div className="flex items-center gap-2">
                      <div className="w-20 text-gray-700 dark:text-gray-400">Japansk</div>
                      <div className="bg-blue-500 h-3 w-full max-w-full">
                          <div className="bg-blue-700 h-3 w-3/10"></div>
                      </div>
                  </div>
              </div>
                            <div className="space-y-2 w-2/3 mt-1">
                  <div className="flex items-center gap-2">
                      <div className="w-20 text-gray-700 dark:text-gray-400">Fransk</div>
                      <div className="bg-blue-500 h-3 w-full max-w-full">
                          <div className="bg-blue-700 h-3 w-3/10"></div>
                      </div>
                  </div>
              </div>
    </div>
    </main>
  );
}
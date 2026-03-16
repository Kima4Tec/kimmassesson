export default function Education() {
  return (
    <main className="p-6 bg-white shadow rounded-b-lg max-w-4xl mx-auto mb-5">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Uddannelse</h2>

    <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">TEC – Technical Education Copenhagen</h3>
        <p className="text-sm text-gray-500">Okt 2022 –</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Programmering i .NET (C#), SQL, JavaScript, TypeScript, Angular, HTML, CSS, Blazor, Git, Azure, Python,
                C++</li>
        </ul>
    </div>

    <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Københavns Universitet</h3>
        <p className="text-sm text-gray-500">2006 – 2012</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Cand.mag. i kunsthistorie med japansk som tilvalg</li>
            <li>Speciale: *Keep quiet, please!* – Museumsformidling af installationskunst til børn</li>
            <li>1 års udveksling i Japan</li>
        </ul>
    </div>

    <div>
        <h3 className="text-xl font-semibold text-gray-700">KEA & Copenhagen Business Academy</h3>
        <p className="text-sm text-gray-500">2014 – 2015</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Skriftlig kommunikation</li>
            <li>Sociale medier – strategi, planlægning og markedsføring</li>
        </ul>
    </div>
    <br/>
    <div>
        <h3 className="text-xl font-semibold text-gray-700">Sprog</h3>
        <img src="language.png" alt="Sprog" className="w-1/3 rounded-lg mt-2 space-y-1"/>
    </div>
    </main>
  );
}
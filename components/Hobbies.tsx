export default function Hobbies() {
  return (
    <main className="p-6 bg-white shadow rounded-b-lg max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Hobbyer</h2>


    <div className="flex flex-col md:flex-row mb-6 items-center">
        <img src="skak.jpg" alt="Skak"
            className="w-full md:w-40 h-40 rounded-lg shadow-md md:mr-6 mb-4 md:mb-0"/>
        <p className="text-gray-700 text-lg">Skak – Jeg nyder det strategiske aspekt og fordybelsen i spillet, og har ind
            imellem lavet
            arrangementer for venner, fordi det også er superhyggeligt at spille sammen og ikke kun på chess.com.
        </p>
    </div>


    <div className="flex flex-col md:flex-row mb-6 items-center">
        <img src="art.jpg" alt="Kunst"
            className="w-full md:w-40 h-40 rounded-lg shadow-md md:mr-6 mb-4 md:mb-0"/>
        <p className="text-gray-700 text-lg">Kunst – Både som betragter og som udøver.</p>
    </div>


    <div className="flex flex-col md:flex-row mb-6 items-center">
        <img src="walking.jpg" alt="Gåture"
            className="w-full md:w-40 h-40 rounded-lg shadow-md md:mr-6 mb-4 md:mb-0"/>
        <p className="text-gray-700 text-lg">Gåture – Naturen giver mig ro og tid til refleksion, og det er godt at røre
            sig.</p>
    </div>

    <div className="flex flex-col md:flex-row items-center">
        <img src="family.png" alt="Familie"
            className="w-full md:w-40 h-40 rounded-lg shadow-md md:mr-6 mb-4 md:mb-0"/>
        <p className="text-gray-700 text-lg">Min familie – Tiden med min familie er vigtig.
        </p>
    </div>
    </main>
  );
}
import { history } from "../data/history"
import Link from "next/link"

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-zinc-300 dark:border-zinc-700 ml-4 pl-6">
      {history.map((item, index) => (
        <div key={index} className="mb-8 relative">
          {/* Dato-badge */}
          <span className="absolute -left-5 top-0 flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full font-semibold text-sm">
            {item.date.split("-")[0]} {/* dag */}
          </span>

          {/* Indhold */}
          <div className="relative left-5 top-2 ml-2">
            {item.link ? (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-lg text-blue-600 hover:underline"
              >
                {item.text}
              </Link>
            ) : (
              <span className="font-medium text-lg">{item.text}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
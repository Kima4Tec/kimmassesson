import Link from "next/link"
import { MyProject } from "../data/project"

export default function ProjectCard({ myProject }: { myProject: MyProject }) {
  return (

    <div className="rounded-xl mt-10 overflow-hidden shadow-md shadow-zinc-600 bg-white dark:bg-zinc-900 flex flex-col">
      <img
        src={myProject.image}
        alt={myProject.name}
        className="w-full h-85 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{myProject.name}</h2>
        <span className="text-sm font-semibold">Teknologier:<span className="text-sm font-normal"> {myProject.tools}</span></span>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">{myProject.description}</p>
        <Link
          href={myProject.link}
          target="_blank"
          className="mt-auto text-sm font-medium text-blue-500 hover:underline"
        >
          Besøg siden →
        </Link>
      </div>
    </div>
  )
}
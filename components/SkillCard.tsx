type Skill = {
  name: string
  category: string
  purpose: string
  keyPoints: string
  skill: string
}

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-xl font-semibold">{skill.name}</h3>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">{skill.category}</p>

      <p className="mt-2">{skill.purpose}</p>

      <p className="text-sm text-zinc-600 mt-2 dark:text-zinc-400">
        {skill.keyPoints}
      </p>

      <span className="inline-block mt-3 px-3 py-1 text-sm bg-zinc-200 rounded dark:text-zinc-700">
        {skill.skill}
      </span>
    </div>
  )
}
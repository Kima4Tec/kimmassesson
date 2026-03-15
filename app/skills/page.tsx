import { skills } from "../../data/skills"
import SkillCard from "@/components/SkillCard"

export default function SkillsPage() {

  const oevet = skills.filter(s => s.skill === "Øvet")
  const letoevet = skills.filter(s => s.skill === "Letøvet")
  const begynder = skills.filter(s => s.skill === "Begynder")

  return (
    <main className="max-w-6xl mx-auto p-10 dark:bg-black sm:items-start">

      <h1 className="text-3xl font-bold mb-8">
        Kompetencer
      </h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Øvet</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {oevet.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Letøvet</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {letoevet.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Begynder</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {begynder.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

    </main>
  )
}
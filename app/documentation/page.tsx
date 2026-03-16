"use client";
import {useState} from "react";
import Experience from "@/components/Experience";
import Hobbies from "../../components/Hobbies";
import Education from "@/components/Education";

export default function Documentation() {
const [open, setOpen] = useState<string | null>(null);
  return (
    <main className="max-w-6xl mx-auto p-10 dark:bg-black sm:items-start">
      <h1 className="text-3xl font-bold mb-3">Portefølje</h1>
      <div className="font-bold text-white text-lg p-0.5 mt-5 bg-gray-400 shadow-2xl rounded-t-lg max-w-4xl mx-auto">
          <button onClick={() => setOpen("experience")} className="px-5 font-bold cursor-pointer">Joberfaring</button>
          <button onClick={() => setOpen("education")} className="px-5 font-bold cursor-pointer">Uddannelse</button>
          <button onClick={() => setOpen("hobbies")} className="px-5 font-bold cursor-pointer">Hobbyer</button>
          <button onClick={() => setOpen("vis-alt")} className="px-5 font-bold cursor-pointer">Vis alt</button>
 </div>
          {open === "experience" && (<Experience />)}
          {open === "education" && (<Education />)}
          {open === "hobbies" && (<Hobbies />)}
          {open === "vis-alt" && (<><Experience /> <Education /> <Hobbies /></>)}
    </main>
  );
}
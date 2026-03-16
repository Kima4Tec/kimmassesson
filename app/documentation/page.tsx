"use client";
import {useState} from "react";
import Experience from "@/components/Experience";
import Hobbies from "../../components/Hobbies";
import Education from "@/components/Education";

export default function Documentation() {
const [open, setOpen] = useState<string | null>("experience");
  return (
    <main className="max-w-6xl mx-auto p-10 dark:bg-black sm:items-start">
      <h1 className="text-3xl font-bold mb-3">Portefølje</h1>
      <div className="text-white text-lg p-0.5 mt-5 bg-gray-400 shadow-2xl rounded-t-lg max-w-4xl mx-auto px-5 flex gap-5">
        
          <button onClick={() => setOpen("experience")} className={open === "experience" ? "text-black" : "hover:text-gray-600"}>Joberfaring</button>
          <button onClick={() => setOpen("education")} className={open === "education" ? "text-black" : "hover:text-gray-600"}>Uddannelse</button>
          <button onClick={() => setOpen("hobbies")} className={open === "hobbies" ? "text-black" : "hover:text-gray-600"}>Hobbyer</button>
          {/* <button onClick={() => setOpen("show-all")} className={open === "show-all" ? "text-black" : "hover:text-gray-600"}>Vis alt</button> */}
 </div>
          {open === "experience" && (<Experience />)}
          {open === "education" && (<Education />)}
          {open === "hobbies" && (<Hobbies />)}
          {/* {open === "show-all" && (<><Experience /> <Education /> <Hobbies /></>)} */}
    </main>
  );
}
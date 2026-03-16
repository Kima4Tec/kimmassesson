"use client";
import { useEffect, useState, useRef } from "react";

export default function SimpleDino() {
  const [score, setScore] = useState(0);
  const dinoRef = useRef<HTMLDivElement>(null);
  const cactusRef = useRef<HTMLDivElement>(null);

  // Hent highscore fra localStorage
// Hent highscore fra localStorage
const [highscores, setHighscores] = useState<{ name: string; points: number }[]>([]);

useEffect(() => {
  const storedScores = localStorage.getItem("dinoScores");
  if (storedScores) {
    setHighscores(JSON.parse(storedScores));
  }
}, []);

  // Jump funktion
  const jump = () => {
    const dino = dinoRef.current;
    const cactus = cactusRef.current;
    if (!dino || !cactus) return;

    cactus.classList.add("animate-moveCactus");
    if (!dino.classList.contains("jump")) {
      dino.classList.add("jump");
      setTimeout(() => dino.classList.remove("jump"), 300);
      setScore((prev) => prev + 1);
    }
  };

  // Collision detection
  useEffect(() => {
    const interval = setInterval(() => {
      const dino = dinoRef.current;
      const cactus = cactusRef.current;
      if (!dino || !cactus) return;

      const dinoTop = parseInt(getComputedStyle(dino).top);
      const cactusLeft = parseInt(getComputedStyle(cactus).left);

      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130) {
        handleScore(score);
        setScore(0);
        cactus.classList.remove("animate-moveCactus");
      }
    }, 10);

    return () => clearInterval(interval);
  }, [score]);

  // Taster til jump
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") jump();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleScore = (newScore: number) => {
    const initials = prompt("Flot spillet! Indtast dine initialer (f.eks. JNS):", "AAA");
    const playerName = initials ? initials.toUpperCase().substring(0, 3) : "???";

    let scores = [...highscores];
    scores.unshift({ name: playerName, points: newScore });
    scores.sort((a, b) => b.points - a.points);
    scores = scores.slice(0, 5);
    localStorage.setItem("dinoScores", JSON.stringify(scores));
    setHighscores(scores);
  };

  return (
    <div className="text-center font-mono dark:bg-black dark">
      <h1 className="text-2xl font-bold mb-2 dark:bg-black dark">Page not found - play Simple Dino</h1>
      <i>Tryk på mellemrum for at hoppe</i>

      <div className="text-left text-lg mt-4 mb-4 ml-5 dark:bg-black dark">Score: {score}</div>

      <div className="relative w-150 h-50 bg-white border-b-2 border-zinc-500 mx-auto">
        <div
          ref={dinoRef}
          className="w-9 h-9 bg-[url('/dino.png')] bg-contain absolute top-40 left-12"
        ></div>
        <div
          ref={cactusRef}
          className="w-5 h-10 bg-[url('/cactus.png')] bg-contain absolute top-39 left-145"
        ></div>
      </div>

      <div className="mt-6 dark:bg-black dark">
        <h3 className="mb-2 text-lg">🏆 TOP 5 HIGHSCORES 🏆</h3>
        <table className="mx-auto w-75 border border-zinc-400 text-left">
          <thead>
            <tr>
              <th className="border-b px-2">Navn</th>
              <th className="border-b px-2">Point</th>
            </tr>
          </thead>
          <tbody>
            {highscores.map((entry, index) => (
              <tr key={index}>
                <td className="border-b px-2">{entry.name}</td>
                <td className="border-b px-2">{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tailwind animations */}
      <style jsx>{`
        .jump {
          animation: jump 0.3s linear;
        }
        @keyframes jump {
          0% { top: 160px; }
          30% { top: 90px; }
          50% { top: 50px; }
          80% { top: 90px; }
          100% { top: 160px; }
        }

        .animate-moveCactus {
          animation: moveCactus 1s linear infinite;
        }

        @keyframes moveCactus {
          0% { left: 580px; }
          100% { left: -20px; }
        }
      `}</style>
    </div>
  );
}
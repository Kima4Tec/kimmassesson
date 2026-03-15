import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
<h1 className="text-3xl font-semibold mb-2">Kim Massessons hjemmeside</h1>
<div className="flex flex-row gap-4" >
<Link href="/about">Om mig</Link>
<Link href="/aboutpage">Om siden</Link>
</div>
      </main>
    </div>
  );
}

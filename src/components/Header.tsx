"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const linkClass = "flex items-center gap-2 transition-colors";
  const pathname = usePathname();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // }, [])

  const getLinkClass = (path: string) => {
    return pathname === path
      ? `${linkClass} text-blue-500 font-bold`
      : `${linkClass} hover:text-blue-500`;
  };
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <header className="flex w-full flex-col items-center justify-center lg:flex-row">
        <div className="flex w-full items-center justify-center text-lg lg:flex-row gap-2">
          <Link href="/" className={getLinkClass("/")}>
            [Home]
          </Link>
          <Link href="/projects" className={getLinkClass("/projects")}>
            [Projects]
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            [About]
          </Link>
          <div className="absolute right-4">
            <p className="">{time.toLocaleTimeString()}</p>
          </div>
        </div>
      </header>
    </main>
  );
}

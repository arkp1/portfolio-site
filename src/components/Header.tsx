"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "@radix-ui/react-switch";
import { CiDark, CiLight } from "react-icons/ci";
import { CgDarkMode } from "react-icons/cg";

export default function Header() {
  const linkClass = "flex items-center gap-2 transition-colors";
  const pathname = usePathname();
  const { isDark, toggleDarkMode } = useTheme();
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8081/ws");
    ws.onmessage = (event: MessageEvent) => {
      const count = parseInt(event.data);
      setActiveUsers(count);
    };
    return () => ws.close();
  }, []);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getLinkClass = (path: string) => {
    return pathname === path
      ? `${linkClass} text-blue-500 font-bold`
      : `${linkClass} hover:text-blue-500`;
  };
  return (
    <main
      className={`flex flex-col items-center justify-between p-4 ${
        isDark ? "text-[#e5e5e5]" : "text-black"
      }`}
    >
      <header className="flex w-full flex-col items-center justify-center lg:flex-row">
        <div className="relative inline-flex items-center">
          <Switch
            checked={isDark}
            onCheckedChange={toggleDarkMode}
            className="peer h-6 w-11 rounded-full bg-neutral-400 data-[state=checked]:bg-neutral-800 transition-colors cursor-pointer"
          />
          <div
            className={`
              pointer-events-none absolute top-0.5 left-0.5 
              h-5 w-5 flex items-center justify-center 
              rounded-full bg-white text-black 
              transition-transform duration-300 ease-in-out
              peer-data-[state=checked]:translate-x-5
              peer-data-[state=checked]:bg-white
              `}
          >
            {isDark ? (
              <CiDark className="text-lg" />
            ) : (
              <CiLight className="text-lg" />
            )}
          </div>
        </div>

        <div className="flex w-full items-center justify-center text-lg md:text-lg lg:flex-row gap-6">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/projects" className={getLinkClass("/projects")}>
            Projects
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>

          <div className="flex items-center gap-2">
            {activeUsers > 0 ? 
            <span className="h-2 w-2 bg-green-600 rounded-full animate-pulse"></span> : 
            <span className="h-2 w-2 bg-gray-600 rounded-full"></span>  }
          <p className="">
             {activeUsers} Online
            </p>
          </div>

          <div className="absolute right-4 hidden md:block">
            <p className="">{time.toLocaleTimeString()}</p>
          </div>
        </div>
      </header>
    </main>
  );
}

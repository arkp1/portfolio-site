"use client";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "@radix-ui/react-switch";
import { CiDark, CiLight } from "react-icons/ci";
import Chat from "./Chat";
import { useOnlineUsers } from "@/Utils/onlineUsers";

export default function Header() {
  const { isDark, toggleDarkMode } = useTheme();
  const [chatOpen, setChatOpen] = useState(false);
  const activeUsers = useOnlineUsers()

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main
      className={`flex flex-col items-center justify-between p-3 md:p-4 ${
        isDark ? "text-[#e5e5e5]" : "text-black"
      }`}
    >
      <header className="flex w-full flex-row items-center justify-center lg:flex-row relative">
        <div className="relative inline-flex items-center mr-auto">
          <Switch
            checked={isDark}
            onCheckedChange={toggleDarkMode}
            className="peer h-6 w-11 rounded-full bg-neutral-400 data-[state=checked]:bg-neutral-800 transition-colors cursor-pointe border-1"
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

        <div className="flex w-full items-center justify-center text-lg relative">
          <div className="flex items-center gap-1 pr-10 md:gap-2 relative">
            {activeUsers > 0 ? (
              <span className="h-2 w-2 bg-green-600 rounded-full animate-pulse"></span>
            ) : (
              <span className="h-2 w-2 bg-gray-600 rounded-full"></span>
            )}
            <p className="text-sm md:text-lg">{activeUsers} Online</p>

            <button className="ml-1 cursor-pointer" onClick={toggleChat}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-messages h-6 w-6 hover:opacity-60 hover:scale-115 transition-transform"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
            </button>

            {chatOpen ? (
              <div
                className="absolute top-full right-0 mt-2 z-50 flex justify-center items-center visible"
                style={{
                  width: "320px",
                }}
              >
                <Chat />
              </div>
            ) : (
              <div
                className="absolute top-full right-2 mt-2 z-50 justify-center items-center hidden"
                style={{
                  width: "320px",
                }}
              >
                <Chat />
              </div>
            )}
          </div>

          <div className="ml-auto absolute right-4">
            <p className="hidden md:block">{time.toLocaleTimeString()}</p>
            <p className="block text-lg md:hidden">
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </p>
          </div>
        </div>
      </header>
    </main>
  );
}

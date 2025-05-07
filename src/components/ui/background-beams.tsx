"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NUM_PATHS = 14;

const COLORS = [
  "#00ffff",
  "#ff00ff",
  "#00ff00",
  "#ff9900",
  "#3399ff",
  "#ff4444",
  "#aaffcc",
  "#cc99ff",
]; // solid colors

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const generatePath = (offset: number) =>
      `M${-380 + offset * 7} ${-289 - offset * 10}C${-380 + offset * 7} ${
        -289 - offset * 10
      } ${-312 + offset * 7} ${116 - offset * 8} ${152 + offset * 7} ${
        243 - offset * 8
      }C${616 + offset * 7} ${370 - offset * 8} ${684 + offset * 7} ${
        775 - offset * 8
      } ${684 + offset * 7} ${775 - offset * 8}`;

    return (
      <div
        className={cn(
          "absolute inset-0 flex h-full w-full items-start justify-center opacity-40",
          className
        )}
      >
        <svg
          className="pointer-events-none absolute z-0 h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff00ff" />
              <stop offset="100%" stopColor="#00ffff" />
            </linearGradient>
            <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3399ff" />
              <stop offset="100%" stopColor="#ff9900" />
            </linearGradient>
            <linearGradient id="grad3" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#00ff00" />
              <stop offset="100%" stopColor="#cc99ff" />
            </linearGradient>
          </defs>

          {Array.from({ length: NUM_PATHS }).map((_, i) => {
            const path = generatePath(i);
            const useGradient = i % 5 === 0;
            const stroke =
              i % 5 === 0
                ? "url(#grad1)"
                : i % 7 === 0
                ? "url(#grad2)"
                : i % 9 === 0
                ? "url(#grad3)"
                : COLORS[i % COLORS.length];

            return (
              <motion.path
              key={i}
              d={path}
              stroke={stroke}
              strokeWidth="1.5"
              strokeOpacity="0.75"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{
                duration: 6,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
            
            );
          })}
        </svg>
      </div>
    );
  }
);

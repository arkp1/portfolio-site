"use client";
import { useMotionValue, useMotionTemplate, motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "../ThemeProvider";
import { MdOutlineArrowOutward } from "react-icons/md";
import { v4 as uuidv4 } from "uuid"

export const ProjectGrid = ({ projects }: { projects: any[] }) => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold mt-5">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
        {projects.map((project, i) => (
          <div className="border border-neutral-300 dark:border-neutral-600 rounded-2xl" key={i}>
          <EvervaultCard key={i} project={project} />
          </div>
        ))}
      </div>
    </>
  );
};

export const EvervaultCard = ({
  project,
  className,
}: {
  project: any;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { isDark } = useTheme();

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn("p-0.5 bg-transparent w-full h-full relative", className)}
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div
          onMouseMove={onMouseMove}
          className="group/card w-full h-60 relative overflow-hidden bg-transparent flex items-center justify-center"
        >
          <CardPattern
            mouseX={mouseX}
            mouseY={mouseY}
          />

          <MdOutlineArrowOutward className="absolute top-4 right-4 text-lg" />

          <div className="relative z-10 text-center px-2">
            <h2 className={`text-lg md:text-2xl font-bold underline`}>{project.name}</h2>
            <p className="text-lg md:text-xl mt-2 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-row flex-wrap mt-2 justify-center items-center gap-2">
              {project.stack.map((tech: any, index: any) => {
                return (
                  <span
                    key={uuidv4()}
                    className={`font-extralight text-sm ${isDark ? "text-zinc-900" : "text-[#e5e5e5]"} px-2 py-2 ${isDark ? "bg-[#e5e5e5]" : "bg-zinc-700" } rounded-full`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl blur-lg [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

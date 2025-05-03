"use client";
import React from "react";
import MyProjects from "@/Utils/projects";
import { useTheme } from "@/components/ThemeProvder";

export default function Projects() {
  const { isDark } = useTheme();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {MyProjects.map((project) => {
        return (
          <div
            key={project.name}
            className={`flex flex-col items-center justify-center p-4`}
          >
            <h2 className="text-xl md:text-2xl font-bold">{project.name}</h2>
            <p className="text-lg text-center md:text-lg max-w-[30ch]">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={`${isDark ? "bg-gray-200" : "bg-gray-800" } rounded-full px-3 py-0.5 md:py-1 text-sm font-semibold ${isDark ? "text-gray-700" : "text-gray-200"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}

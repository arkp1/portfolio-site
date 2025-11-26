"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useTheme } from "./ThemeProvider";


const Footer: React.FC = () => {
  const { isDark } = useTheme();
  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/arkp1",
      label: "GitHub",
    },
    {
      icon: FaFileAlt,
      url: "https://drive.google.com/file/d/1EtHJA23D8loedQ3av-trw11L9kJkZ6pK/view?usp=sharing",
      label: "Resume",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/a-r-k-praneet-1ba4592b8/",
      label: "LinkedIn",
    },
    {
      icon: SiLeetcode,
      url: "https://leetcode.com/u/praneet7/",
      label: "Leetcode",
    },
    {
      icon: FaEnvelope,
      url: "mailto:praneet2656@gmail.com",
      label: "Mail",
    },
  ];

  return (
    <footer className="min-w-full py-4 mt-auto bg-transparent backdrop-blur-sm w-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white opacity-80 hover:opacity-100 transition-colors duration-300"
                aria-label={link.label}
              >
                <Icon className={`w-6 h-6 ${isDark ? "text-white" : "text-black"}`} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

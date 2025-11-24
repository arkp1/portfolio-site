import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: "/icons/github.svg",
      url: "https://github.com/arkp1",
      label: "GitHub",
    },
       {
      icon: "/icons/document-text-svgrepo-com.svg",
      url: "https://drive.google.com/file/d/1EtHJA23D8loedQ3av-trw11L9kJkZ6pK/view?usp=sharing",
      label: "Resume",
    },
    {
      icon: "/icons/linkedin-svgrepo-com.svg",
      url: "https://www.linkedin.com/in/a-r-k-praneet-1ba4592b8/",
      label: "LinkedIn",
    },
    {
      icon: "/icons/leetcode-svgrepo.svg",
      url: "https://leetcode.com/u/praneet7/",
      label: "Leetcode",
    },
    {
      icon: "/icons/mail-svgrepo.svg",
      url: "mailto:praneet2656@gmail.com",
      label: "Mail",
    },
  ];

  return (
    <footer className="min-w-full py-4 mt-auto bg-neutral-700 backdrop-blur-sm border-t border-neutral-800 w-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-colors duration-300"
              aria-label={link.label}
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={24}
                height={24}
                className="invert"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

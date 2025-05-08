"use client";
import TechLogos from "@/Utils/techLogos";
import { useTheme } from "@/components/ThemeProvider";
import MyProjects from "@/Utils/projects";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ProjectGrid } from "@/components/ui/evervault-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
import { motion, useInView } from "framer-motion";
import ScrollHandler from "@/components/ScrollHandler";
import ContactForm from "@/components/ContactForm";
import { Toaster } from "@/components/ui/sonner";
import {
  FloatingDock,
  FloatingDockDesktop,
} from "@/components/ui/floating-dock";
import { links } from "@/components/FloatingDock";

export default function page() {
  const { isDark } = useTheme();
  const projectRef = useRef(null);
  const isInview = useInView(projectRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center p-4">
      <ScrollHandler />
      <BackgroundBeams className="pointer-events-none" />
      <TextGenerateEffect
        words="
          Hello, I'm praneet!"
      />

      {/* intro */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div>
          <p
            className={`mt-4 text-lg text-center ${
              isDark ? "text-[#e5e5e5]" : "text-gray-700"
            }`}
          >
            A fullstack developer who's currently focused on Web Development.
            Other than that, I'm also interested in UX/UI Design. I like to
            build things that make life easier.
          </p>
        </div>
      </motion.div>

      {/* tech */}
      <div className={` ${isDark ? "text-[#e5e5e5]" : "text-gray-700"}`}>
        <h2 className="text-2xl font-bold text-left mt-8">
          Technologies I use:
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {TechLogos.map((logo) => {
            return (
              <div key={logo.name} className="flex items-center gap-2 p-2">
                <img
                  src={logo.icon}
                  alt={logo.name}
                  className="w-8 h-8"
                  loading="lazy"
                />
                <span className="font-semibold">{logo.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* projects */}
      <div
        className={`${
          isDark ? "text-[#e5e5e5]" : "text-gray-900"
        } text-2xl mt-14`}
      >
        <ProjectGrid projects={MyProjects} />

        <div className="flex justify-center mt-5 text-lg">
          <Modal>
            <ModalTrigger className=" bg-black dark:bg-[#e5e5e5] dark:text-black text-white hover:opacity-60 flex justify-center group/modal-btn cursor-pointer">
              <a
                className="group-hover/modal-btn:translate-x-40 text-center transition duration-500"
                href="https://github.com/arkp1?tab=repositories&type=source"
                rel="noopener noreferrer"
                target="_blank"
              >
                More
              </a>
              <a
                className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20 cursor-pointer"
                href="https://github.com/arkp1?tab=repositories&type=source"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="arrow-right-up.svg"
                  alt="arrow"
                  className="h-6 w-6"
                  loading="lazy"
                />
              </a>
            </ModalTrigger>
          </Modal>
        </div>

        {/* contact form */}
        <div className="flex flex-col items-center justify-center mt-10 grid grid-cols-2">
          <div className="flex justify-center items-center text-2xl">Contact</div>
          <ContactForm />
          <Toaster />
        </div>

      </div>
    </main>
  );
}

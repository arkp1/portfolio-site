"use client";
import TechLogos from "@/Utils/techLogos";
import { useTheme } from "@/components/ThemeProvider";
import MyProjects from "@/Utils/projects";
import { useEffect } from "react";
import Lenis from "lenis";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ProjectGrid } from "@/components/ui/evervault-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import { WebSocketProvider } from "@/Utils/WebSocketContext";

export default function Page() {
  const { isDark } = useTheme();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <BackgroundBeams className="pointer-events-none" />
      <WebSocketProvider>
      <Header />
      </WebSocketProvider>
      <main className="flex flex-col items-center justify-center">
        <TextGenerateEffect
          words="
          <Hello, I'm Praneet!/>"
          className={`${isDark ? "text-white" : "text-black"}`}
        />

        {/* intro */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div>
            <p
              className={`mt-4 text-lg text-center text-pretty p-6  ${
                isDark ? "text-[#e5e5e5]" : "text-gray-700"
              }`}
            >
              A coding enthusiast & a passionate fullstack developer focused on scalable, user-centric web apps.
              Other than that, I'm also interested in UX/UI Design. I like to
              build things that make life easier.
            </p>
          </div>
        </motion.div>

        {/* tech */}
        <div className={` ${isDark ? "text-[#e5e5e5]" : "text-gray-800"}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-left mt-4 ml-2 mb-1">Skills :</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
            {TechLogos.map((logo) => {
              return (
                <div key={logo.name} className="flex items-center gap-2 p-2 hover:rotate-6">
                  <img
                    src={logo.icon}
                    alt={logo.name}
                    className="w-8 h-8 hover:rotate-6"
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
              <ModalTrigger
                className={`${
                  isDark ? "bg-[#e5e5e5]" : "bg-white"
                }  hover:opacity-60 flex justify-center group/modal-btn cursor-pointer`}
              >
                <a
                  className={`group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-black`}
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
                    src="arrow-right.svg"
                    alt="arrow"
                    className="h-6 w-6 text-red-600"
                    loading="lazy"
                  />
                </a>
              </ModalTrigger>
            </Modal>
          </div>

          {/* contact form */}
          <div className="flex-col items-center justify-center mt-10 grid md:grid-cols-2 gap-6">
            <div className="flex justify-center items-center md:text-4xl font-bold">
              Contact:
            </div>
            <ContactForm />
            <Toaster />
          </div>
        </div>
      </main>
    </>
  );
}

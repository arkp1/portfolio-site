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
import Player from "@/components/Player";
import { GitHubCalendar } from "react-github-calendar";
import { IoDocumentText } from "react-icons/io5";

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
      <WebSocketProvider>
        <div className="fixed w-full z-50 top-0 left-0">
          <Header />
        </div>
      </WebSocketProvider>
      <BackgroundBeams className="pointer-events-none" />
      <main className="flex flex-col items-center justify-center pt-12 md:p-5 md:pt-20 min-h-screen">
        <div className="flex gap-2 items-baseline">
          <TextGenerateEffect words="<Hello, I'm" />
          <TextGenerateEffect
            words="Praneet."
            className="font-heading italic"
          />
          <TextGenerateEffect words="/>" />
        </div>

        {/* intro */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div>
            <p
              className={`mt-4 text-md md:text-lg text-center text-pretty p-3  ${
                isDark ? "text-[#e5e5e5]" : "text-gray-700"
              }`}
            >
              A coding enthusiast & a passionate fullstack developer focused on
              scalable, user-centric web apps. With a focus on UI design. I like
              to build things that make life easier.
            </p>
          </div>
        </motion.div>

        <div className="w-fit gap-4 md:gap-8 flex justify-center items-center text-center mx-auto">
          <div>
            <a
              href="https://drive.google.com/file/d/1EtHJA23D8loedQ3av-trw11L9kJkZ6pK/view?usp=sharing"
              className={`group inline-flex items-center gap-3 m-5 shadow-[inset_0px_0px_45px_-40px_#000000] border-1 border-white ${
                isDark ? "bg-gray-900" : "bg-white"
              } 
                ${
                  isDark
                    ? "hover:bg-black transition-colors duration-600"
                    : "hover:bg-[#e5e5e5] transition-colors duration-300"
                }
                
              px-3 py-2 text-sm md:text-md font-semibold rounded-lg mx-auto`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoDocumentText className="group-hover:-rotate-30 transition-transform duration-200" />
              Resume / CV
            </a>
          </div>
          <p
            className={`inline-flex items-center gap-3 m-5 shadow-[inset_0px_0px_60px_-40px_#000000] ${
              isDark ? "bg-white" : "bg-gray-800"
            } ${isDark ? "text-black" : "text-[#e5e5e5]"} ${
              isDark
                ? "hover:bg-[#e5e5e5] transition-colors duration-600"
                : "hover:bg-black transition-colors duration-600"
            } px-3 py-2 text-sm md:text-md font-semibold rounded-lg mx-auto`}
          >
            <span className="h-2 w-2 bg-green-600 rounded-full animate-pulse"></span>
            Open to work
          </p>
        </div>

        {/* skills */}
        <div className={` ${isDark ? "text-[#e5e5e5]" : "text-gray-800"}`}>
          <h2 className="text-2xl md:text-3xl font-heading text-left mt-4 ml-2 mb-1">
            Skills
          </h2>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {TechLogos.map((logo) => {
              return (
                <div
                  key={logo.name}
                  className="flex items-center gap-2 p-2 hover:rotate-6"
                >
                  <img
                    src={logo.icon}
                    alt={logo.name}
                    className="w-6 md:w-8 h-6 md:h-8 hover:rotate-6"
                    loading="lazy"
                  />
                  {/* <span className="font-semibold">{logo.name}</span> */}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col transform scale-90 md:scale-100 mt-4 md:mt-10">
          <Player />
        </div>

        {/* projects */}
        <div
          className={`${
            isDark ? "text-[#e5e5e5]" : "text-gray-900"
          } text-xl md:mt-12`}
        >
          <ProjectGrid projects={MyProjects} />
          <div className="flex justify-center text-lg text-white dark:text-black mt-8">
            <Modal>
              <ModalTrigger
                className={`${
                  isDark ? "bg-[#e5e5e5]" : "bg-[#e5e5e5]"
                }  hover:opacity-60 flex justify-center group/modal-btn cursor-pointer`}
              >
                <a
                  className={`group-hover/modal-btn:translate-x-40 text-center transition duration-500`}
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
                    src="icons/arrow-right.svg"
                    alt="arrow"
                    className="h-6 w-6 text-black"
                    loading="lazy"
                  />
                </a>
              </ModalTrigger>
            </Modal>
          </div>

          <div className="flex flex-col w-85 max-w-screen md:w-min justify-center items-center m-4 bg-transparent overflow-hidden mx-auto md:scale-100 md:flex">
            <h2 className="text-2xl md:text-3xl font-heading text-left m-5">
              Github Activity
            </h2>
            <GitHubCalendar
              username="arkp1"
              colorScheme={isDark ? "dark" : "light"}
            />
          </div>

          <div className="flex flex-col justify-center items-center pb-2 md:pl-46 md:pr-46">
            <h2 className="text-2xl md:text-3xl font-heading text-left mt-5 mb-5">
              Contact
            </h2>
            <ContactForm />
          </div>
          {/* <Footer /> */}
          <Toaster />
        </div>

        <div className="flex flex-col items-center justify-center text-center py-6 md:py-12 gap-1 md:gap-2">
          <p className="text-sm md:text-base text-gray-400">
            Design & Developed by <b className="text-gray-400">Praneet</b>
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}

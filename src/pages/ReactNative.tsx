import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NativePageAbout from "../components/react-native/NativePageAbout";
import NativePageContact from "../components/react-native/NativePageContact";
import NativePageHero from "../components/react-native/NativePageHero";
import NativePageProjects from "../components/react-native/NativePageProjects";

const ReactNative = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Fixed Navigation */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg">
        <motion.div
          className="flex gap-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative"
            >
              <span
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Page Sections */}
      <section id="home">
        <NativePageHero />
      </section>
      <section id="about">
        <NativePageAbout />
      </section>
      <section id="projects">
        <NativePageProjects />
      </section>
      <section id="contact">
        <NativePageContact />
      </section>
    </>
  );
};

export default ReactNative;

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUp, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useRef } from "react";

import fl1 from "../../assets/images/fl/fl-1.png";
import fl2 from "../../assets/images/fl/fl-2.png";
import fl3 from "../../assets/images/fl/fl-3.png";
import fl4 from "../../assets/images/fl/fl-4.png";
import fl5 from "../../assets/images/fl/fl-5.png";
import fl6 from "../../assets/images/fl/fl-6.png";

import ml1 from "../../assets/images/ml/ml-1.png";
import ml2 from "../../assets/images/ml/ml-2.png";
import ml3 from "../../assets/images/ml/ml-3.png";
import ml4 from "../../assets/images/ml/ml-4.png";
import ml5 from "../../assets/images/ml/ml-5.png";
import ml6 from "../../assets/images/ml/ml-6.png";
import ml7 from "../../assets/images/ml/ml-7.png";
import ml8 from "../../assets/images/ml/ml-8.png";
import ml9 from "../../assets/images/ml/ml-9.png";

import bz1 from "../../assets/images/bz/bz-1.png";
import bz2 from "../../assets/images/bz/bz-2.png";
import bz3 from "../../assets/images/bz/bz-3.png";
import bz4 from "../../assets/images/bz/bz-4.png";
import bz5 from "../../assets/images/bz/bz-5.png";
import bz6 from "../../assets/images/bz/bz-6.png";
import bz7 from "../../assets/images/bz/bz-7.png";
import bz8 from "../../assets/images/bz/bz-8.png";

import tr1 from "../../assets/images/tr/tr-1.png";
import tr2 from "../../assets/images/tr/tr-2.png";
import tr3 from "../../assets/images/tr/tr-3.png";
import tr4 from "../../assets/images/tr/tr-4.png";
import tr5 from "../../assets/images/tr/tr-5.png";
import tr6 from "../../assets/images/tr/tr-6.png";
import tr7 from "../../assets/images/tr/tr-7.png";

import db1 from "../../assets/images/db/db-1.png";
import db2 from "../../assets/images/db/db-2.png";
import db3 from "../../assets/images/db/db-3.png";
import db4 from "../../assets/images/db/db-4.png";
import db5 from "../../assets/images/db/db-5.png";
import db6 from "../../assets/images/db/db-6.png";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  features: string[];
  techStack: string[];
  category: string;
  playStore?: string;
  appStore?: string;
}

const NativePageProjects = () => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [activeImage, setActiveImage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "FleetLobby",
      category: "Car Fleet Management",
      description:
        "A comprehensive fleet management solution for Turo and Getaround hosts, designed to streamline operations and maximize revenue potential.",
      images: [fl1, fl2, fl3, fl4, fl5, fl6],
      features: [
        "Fleet analytics dashboard",
        "Revenue tracking",
        "Maintenance scheduling",
        "Host collaboration tools",
        "Performance metrics",
        "Automated reporting",
      ],
      techStack: [
        "React Native",
        "TypeScript",
        "Redux",
        "Firebase",
        "Analytics",
      ],
      appStore: "https://apps.apple.com/in/app/fleetlobby/id6443474840",
      playStore:
        "https://play.google.com/store/apps/details?id=com.fleetlobby&hl=en",
    },
    {
      id: 2,
      title: "30ML",
      category: "Nightlife & Entertainment",
      description:
        "The ultimate bar-hopping companion app offering premium venue discovery, seamless reservations, and exclusive rewards.",
      images: [ml1, ml2, ml3, ml4, ml5, ml6, ml7, ml8, ml9],
      features: [
        "Venue discovery",
        "Real-time reservations",
        "Digital payments",
        "Loyalty rewards",
        "Social features",
        "Event calendar",
      ],
      techStack: [
        "React Native",
        "Redux Toolkit",
        "Razorpay Integration",
        "Maps API",
        "Push Notifications",
      ],
      appStore: "https://apps.apple.com/in/app/houseof30ml/id6499301169",
      playStore:
        "https://play.google.com/store/apps/details?id=com.houseof30ml&hl=en_IN",
    },
    {
      id: 3,
      title: "Bazaarche",
      category: "E-commerce & Classifieds",
      description:
        "A comprehensive classified ads platform for the Iranian community worldwide, facilitating buying and selling across multiple categories.",
      images: [bz1, bz2, bz3, bz4, bz5, bz6, bz7, bz8],
      features: [
        "Multi-category listings",
        "Advanced search",
        "Chat system",
        "Location-based results",
        "Secure transactions",
        "Multi-language support",
      ],
      techStack: [
        "React Native",
        "Context API",
        "Socket.io",
        "MongoDB",
        "AWS Services",
      ],
      appStore:
        "https://apps.apple.com/in/app/bazaarche-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1%DA%86%D9%87/id1566212047",
      playStore: "https://play.google.com/store/apps/details?id=com.bazaarche",
    },
    {
      id: 4,
      title: "Trkr",
      category: "Business Management",
      description:
        "An innovative CRM solution for showrooms, featuring QR code integration, sample tracking, and seamless customer communication.",
      images: [tr1, tr2, tr3, tr4, tr5, tr6, tr7],
      features: [
        "QR code generation",
        "Sample tracking",
        "SMS integration",
        "Chat system",
        "Price management",
        "Customer database",
      ],
      techStack: [
        "React Native",
        "Firebase",
        "Twilio",
        "Cloud Functions",
        "Real-time Database",
      ],
      appStore: "https://apps.apple.com/us/app/trkr-app/id1615527419",
    },
    {
      id: 5,
      title: "Diabetes Guide",
      category: "Healthcare",
      description:
        "A comprehensive educational app providing valuable information about diabetes, compiled by Dr. Anand Gandhi from extensive medical literature.",
      images: [db6, db1, db2, db3, db4, db5],
      features: [
        "Educational content",
        "Medical references",
        "Information categories",
        "Search functionality",
        "Bookmark system",
        "Regular updates",
      ],
      techStack: [
        "React Native",
        "SQLite",
        "Content Management",
        "Offline Support",
        "Analytics",
      ],
      appStore: "https://apps.apple.com/us/app/diabetes-guide/id1528665847",
    },
  ];

  const nextImage = () => {
    const projectImages = projects[activeProject].images;
    setActiveImage((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    const projectImages = projects[activeProject].images;
    setActiveImage(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-purple-50 to-white max-h-screen"
    >
      <motion.div className="max-w-6xl mx-auto px-4" style={{ opacity, y }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Mobile Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of diverse mobile applications built with React Native
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Display */}
          <div className="relative">
            <div className="relative mx-auto w-[300px]">
              <motion.div
                className="relative z-20 bg-gray-900 rounded-[3rem] p-4 shadow-2xl"
                layoutId="phoneFrame"
                transition={{ duration: 0.6 }}
              >
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />
                <div className="bg-white rounded-[2.5rem] overflow-hidden h-[600px] relative">
                  {/* Image Navigation */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
                    <button
                      onClick={prevImage}
                      className="p-2 bg-white/80 rounded-full shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
                    <button
                      onClick={nextImage}
                      className="p-2 bg-white/80 rounded-full shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* App Screenshots */}
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ x: `-${activeImage * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute top-0 left-0 flex">
                      {projects[activeProject].images.map((image, index) => (
                        <motion.img
                          key={index}
                          src={image}
                          alt={`${projects[activeProject].title} screenshot ${
                            index + 1
                          }`}
                          className="w-[300px] h-[600px] object-cover"
                          layoutId={`project-image-${activeProject}-${index}`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-8">
            <div>
              <motion.span
                className="text-purple-600 font-medium"
                layoutId={`category-${activeProject}`}
              >
                {projects[activeProject].category}
              </motion.span>
              <motion.h3
                className="text-3xl font-bold text-gray-900 mt-2"
                layoutId={`title-${activeProject}`}
              >
                {projects[activeProject].title}
              </motion.h3>
              <motion.p
                className="text-gray-600 mt-4"
                layoutId={`description-${activeProject}`}
              >
                {projects[activeProject].description}
              </motion.p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {projects[activeProject].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* App Store Links */}
            <div className="flex gap-4">
              {/* Play Store Button */}
              <motion.a
                href={projects[activeProject].playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl shadow-lg hover:opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs opacity-90">GET IT ON</span>
                  <span className="text-sm font-semibold -mt-1">
                    Google Play
                  </span>
                </div>
              </motion.a>

              {/* App Store Button */}
              <motion.a
                href={projects[activeProject].appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl shadow-lg hover:opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs opacity-90">Download on the</span>
                  <span className="text-sm font-semibold -mt-1">App Store</span>
                </div>
              </motion.a>
            </div>

            {/* Project Navigation */}
            <div className="flex gap-4 items-center">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`h-8 px-4 rounded-lg font-medium transition-all flex items-center justify-center ${
                    activeProject === index
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NativePageProjects;

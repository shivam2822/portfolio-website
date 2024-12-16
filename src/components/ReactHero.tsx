import { motion } from "framer-motion";
import { Code2, Layers, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReactHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="react"
      className="max-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      {/* Floating Elements Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-blue-500/10"
            animate={{
              x: [0, Math.random() * 20],
              y: [0, Math.random() * 20],
              scale: [1, Math.random() + 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-32 pb-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                React.js
                <span className="text-blue-600"> Developer</span>
              </h1>
              <p className="text-xl text-gray-600">
                Building modern, responsive, and performant web applications
                with React's ecosystem
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  Modern React with Hooks & Context
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Layers className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  State Management (Redux, Zustand)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  Next.js & Performance Optimization
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                onClick={() => {
                  navigate("react");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View React Projects
              </button>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative">
              <motion.div
                className="w-full h-full absolute"
                animate={{
                  rotate: isHovered ? 360 : 0,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="fill-none stroke-blue-200 stroke-[0.5]"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    className="fill-none stroke-blue-200 stroke-[0.5]"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="20"
                    className="fill-none stroke-blue-200 stroke-[0.5]"
                  />
                </svg>
              </motion.div>
              <motion.div
                className="w-32 h-32 mx-auto"
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4="
                  alt="React Logo"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReactHero;

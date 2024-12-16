import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Braces, Layers, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ReactPageHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Modern React",
      description: "Building with the latest React features and best practices",
    },
    {
      icon: <Braces className="w-6 h-6" />,
      title: "TypeScript",
      description: "Type-safe development with enhanced code quality",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "State Management",
      description: "Efficient state handling with modern solutions",
    },
  ];

  return (
    <motion.section
      ref={containerRef}
      className="max-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      style={{ y, opacity }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* React Logo Watermark */}
        <motion.div
          className="absolute -right-20 -top-20 w-96 h-96 text-blue-100"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 200,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Mouse Follow Effect */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-300/20 via-blue-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-32 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.h1
              className="text-6xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              React
              <span className="text-blue-600"> Development</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Creating modern, performant, and scalable web applications with
              React's powerful ecosystem
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 10 }}
                >
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium gap-2 hover:bg-blue-700 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View React Projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Visual */}
          <div className="relative">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Code Editor Mock */}
              <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="p-6">
                  <pre className="text-sm">
                    <code className="text-blue-400">
                      const
                      <span className="text-purple-400"> App</span>
                      <span className="text-white">{" = () => {"}</span>
                    </code>
                    <br />
                    <code className="text-white pl-4">return (</code>
                    <br />
                    <code className="text-green-400 pl-8">{"<div>"}</code>
                    <br />
                    <code className="text-green-400 pl-12">
                      {"<h1>"}
                      <span className="text-white">Hello React</span>
                      {"</h1>"}
                    </code>
                    <br />
                    <code className="text-green-400 pl-8">{"</div>"}</code>
                    <br />
                    <code className="text-white pl-4">);</code>
                    <br />
                    <code className="text-white">{"}"};</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReactPageHero;

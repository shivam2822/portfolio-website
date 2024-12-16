import { motion } from "framer-motion";
import { Palette, Code, Blocks, Gauge } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WordPressHero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="wordpress"
      className="max-h-screen bg-gradient-to-b from-green-50 to-white relative overflow-hidden"
    >
      {/* WordPress Block Pattern Background */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-green-100"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 45}deg`,
            }}
            animate={{
              rotate: [0, 90, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-32 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                WordPress
                <span className="text-green-600"> Developer</span>
              </h1>
              <p className="text-xl text-gray-600">
                Building custom WordPress solutions with modern development
                practices
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-green-100 p-2 rounded-lg">
                  <Palette className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-gray-700">Custom Theme Development</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-green-100 p-2 rounded-lg">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-gray-700">Plugin Development</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-green-100 p-2 rounded-lg">
                  <Gauge className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-gray-700">Performance Optimization</span>
              </motion.div>
            </div>

            <motion.button
              onClick={() => {
                navigate("wordpress");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View WordPress Projects
            </motion.button>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* WordPress Interface Mockup */}
              <motion.div
                className="bg-white rounded-2xl shadow-2xl p-6 relative z-10"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="w-10 h-10 bg-blue-500 rounded mb-4" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                </div>

                {/* Content Blocks */}
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-50 p-4 rounded-lg"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-green-100 rounded mr-3" />
                        <div className="h-3 w-24 bg-gray-200 rounded" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-gray-200 rounded" />
                        <div className="h-2 w-3/4 bg-gray-200 rounded" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -right-4 -bottom-4 w-full h-full bg-green-100 rounded-2xl -z-10"
                animate={{
                  rotate: [0, 2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -left-4 -top-4 w-full h-full bg-green-200/50 rounded-2xl -z-20"
                animate={{
                  rotate: [0, -2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.2,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WordPressHero;

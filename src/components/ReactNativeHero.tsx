import { motion } from "framer-motion";
import { Smartphone, Zap, Globe, Cpu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReactNativeHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Notification animation data
  const notifications = [
    { id: 1, text: "New message received", color: "bg-blue-500" },
    { id: 2, text: "Payment successful", color: "bg-green-500" },
    { id: 3, text: "Upload completed", color: "bg-purple-500" },
  ];

  return (
    <section
      id="react-native"
      className="max-h-screen bg-gradient-to-b from-purple-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

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
                React Native
                <span className="text-purple-600"> Developer</span>
              </h1>
              <p className="text-xl text-gray-600">
                Crafting seamless cross-platform mobile experiences with native
                performance
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Smartphone className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-gray-700">iOS & Android Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-gray-700">
                  Native Performance Optimization
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-gray-700">Cross-Platform Solutions</span>
              </div>
            </div>

            <button
              onClick={() => {
                navigate("react-native");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              View Mobile Projects
            </button>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative mx-auto w-[280px]">
              {/* Phone Frame */}
              <div className="relative z-10 bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />
                {/* Screen */}
                <div className="bg-gray-100 rounded-[2.5rem] overflow-hidden h-[520px] relative">
                  {/* App UI Mockup */}
                  <div className="bg-purple-600 h-20 flex items-center px-6">
                    <div className="w-8 h-8 rounded-full bg-white" />
                    <div className="ml-4">
                      <div className="h-3 w-24 bg-white/50 rounded" />
                      <div className="h-2 w-16 bg-white/30 rounded mt-2" />
                    </div>
                  </div>

                  {/* Animated Notifications */}
                  <div className="p-4 space-y-3">
                    {notifications.map((notif, index) => (
                      <motion.div
                        key={notif.id}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{
                          x: isHovered ? 0 : -100,
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ delay: index * 0.2 }}
                        className={`${notif.color} p-3 rounded-lg text-white text-sm`}
                      >
                        {notif.text}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-200 rounded-full -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -left-6 -top-6 w-16 h-16 bg-purple-300 rounded-full -z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReactNativeHero;

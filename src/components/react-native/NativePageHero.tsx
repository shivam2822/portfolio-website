import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, Radio, Zap, Layers } from "lucide-react";
import { useRef, useState } from "react";

const NativePageHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Cross-Platform",
      description: "Build once, deploy everywhere - iOS and Android",
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Native Performance",
      description: "Smooth animations and native capabilities",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hot Reload",
      description: "Instant feedback during development",
    },
  ];

  const mockNotifications = [
    { id: 1, title: "New Message", content: "Hey there! 👋" },
    { id: 2, title: "Payment Success", content: "Transaction completed ✅" },
    { id: 3, title: "Update Available", content: "Version 2.0 is here! 🚀" },
  ];

  return (
    <section
      ref={containerRef}
      className="max-h-screen relative overflow-hidden bg-gradient-to-b from-purple-50 to-white"
    >
      {/* Floating Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-32 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div style={{ opacity }} className="space-y-8">
            <motion.span
              className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              React Native Development
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Crafting Native
              <span className="text-purple-600"> Mobile Experiences</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Building high-performance mobile applications that deliver
              exceptional user experiences across platforms.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                View Mobile Projects
              </button>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative mx-auto w-[300px]">
              {/* Phone Frame */}
              <div className="relative z-20 bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />
                {/* Screen */}
                <div className="bg-purple-50 rounded-[2.5rem] overflow-hidden h-[600px] relative">
                  {/* App Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-20 flex items-center px-6">
                    <div className="w-8 h-8 rounded-full bg-white" />
                    <div className="ml-4">
                      <div className="h-3 w-24 bg-white/50 rounded" />
                      <div className="h-2 w-16 bg-white/30 rounded mt-2" />
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="p-4 space-y-3">
                    {mockNotifications.map((notif, index) => (
                      <motion.div
                        key={notif.id}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{
                          x: isHovered ? 0 : -100,
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-4 rounded-xl shadow-md"
                      >
                        <h4 className="font-medium text-gray-900">
                          {notif.title}
                        </h4>
                        <p className="text-sm text-gray-600">{notif.content}</p>
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

export default NativePageHero;

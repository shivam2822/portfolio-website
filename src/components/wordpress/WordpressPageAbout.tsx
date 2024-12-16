import { Code, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WordpressPageAbout = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Custom Development",
      description:
        "Specialized in creating custom WordPress themes and plugins tailored to specific business needs.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Modern Solutions",
      description:
        "Building responsive, fast-loading websites using the latest WordPress technologies and best practices.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Client Focus",
      description:
        "Delivering user-friendly solutions that empower clients to manage their content efficiently.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = [
    "Expert in WordPress Theme Development",
    "Custom Plugin Development",
    "Performance Optimization",
    "Security Implementation",
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              variants={itemVariants}
            >
              Crafting Digital Experiences with WordPress
            </motion.h2>

            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              With over X years of experience in WordPress development, I
              specialize in creating custom websites that combine aesthetic
              appeal with powerful functionality. My approach focuses on
              delivering scalable, maintainable, and user-friendly solutions.
            </motion.p>

            <motion.div className="space-y-4 pt-4" variants={containerVariants}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  variants={skillVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.span
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  />
                  <span className="text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div className="grid gap-6" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WordpressPageAbout;

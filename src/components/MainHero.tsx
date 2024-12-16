import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const MainHero = () => {
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

  const skills = [
    {
      icon: <Code className="text-blue-600" />,
      text: "react", // will scroll to #react
      color: "blue",
    },
    {
      icon: <Smartphone className="text-purple-600" />,
      text: "react-native", // will scroll to #react-native
      color: "purple",
    },
    {
      icon: <Globe className="text-green-600" />,
      text: "wordpress", // will scroll to #wordpress
      color: "green",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/shivam2822",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/shivam-goyal-000501156/",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:dev.shivam2822@gmail.com",
    },
  ];

  return (
    <section className="max-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Mouse Follow Gradient */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-32 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Name and Role */}
          <motion.div
            className="mb-6 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Hi, I'm Shivam G. 👋
            </h2>
            <span className="px-4 py-2 bg-white rounded-full text-gray-600 text-sm font-medium shadow-sm inline-block">
              Frontend Developer
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Creating{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
              Amazing
            </span>{" "}
            Web & Mobile Experiences
          </h1>

          {/* About Me */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Passionate frontend developer specializing in React.js, React
            Native, and WordPress. With a keen eye for design and a love for
            clean code, I transform ideas into seamless digital experiences.
          </p>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="initial"
            animate="animate"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-white shadow-lg rounded-xl flex items-center gap-2 text-gray-700 cursor-pointer"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => {
                  const element = document.getElementById(
                    skill.text.toLowerCase()
                  );
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {skill.icon}
                {skill.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainHero;

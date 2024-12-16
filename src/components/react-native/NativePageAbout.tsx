import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Code2,
  Database,
  Settings,
  Puzzle,
} from "lucide-react";

const NativePageAbout = () => {
  const skills = [
    {
      category: "Core Expertise",
      items: [
        { name: "React Native CLI", level: 95 },
        { name: "Expo", level: 90 },
        { name: "Redux & Context API", level: 92 },
        { name: "React Navigation", level: 95 },
        { name: "Native Modules", level: 85 },
      ],
    },
    {
      category: "UI/UX Implementation",
      items: [
        { name: "Reanimated 2", level: 88 },
        { name: "Gesture Handler", level: 90 },
        { name: "Custom Components", level: 92 },
        { name: "Responsive Design", level: 95 },
        { name: "UI Libraries", level: 90 },
      ],
    },
  ];

  const expertise = [
    {
      icon: <Smartphone />,
      title: "Cross-Platform Development",
      description:
        "Proficient in developing apps for both iOS and Android platforms using a single codebase",
    },
    {
      icon: <Database />,
      title: "State Management",
      description:
        "Expert in implementing Redux, Context API, and other state management solutions",
    },
    {
      icon: <Zap />,
      title: "Performance Optimization",
      description:
        "Skilled in optimizing app performance, reducing bundle size, and improving load times",
    },
    {
      icon: <Code2 />,
      title: "Native Modules",
      description:
        "Experience in creating and integrating native modules for enhanced functionality",
    },
    {
      icon: <Puzzle />,
      title: "Third-Party Integration",
      description:
        "Proficient in integrating various APIs, payment gateways, and third-party services",
    },
    {
      icon: <Settings />,
      title: "App Deployment",
      description:
        "Experienced in publishing apps to App Store and Play Store, including CI/CD setup",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              3 Years of React Native Excellence
            </h2>

            <div className="prose prose-lg text-gray-600">
              <p>
                Over the past three years, I've specialized in React Native
                development, crafting high-performance mobile applications that
                deliver exceptional user experiences across platforms.
              </p>
              <p>
                My journey includes working on diverse projects from startup
                MVPs to enterprise-level applications, mastering the intricacies
                of mobile development and staying current with the evolving
                React Native ecosystem.
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-purple-50 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-purple-600 mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skills.map((skillSet, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {skillSet.category}
                </h3>
                <div className="space-y-4">
                  {skillSet.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-purple-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Recent Focus Areas
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced animation implementations with Reanimated 2</li>
                <li>• Complex state management patterns</li>
                <li>• Performance optimization techniques</li>
                <li>• Native module development</li>
                <li>• CI/CD implementation for mobile apps</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NativePageAbout;

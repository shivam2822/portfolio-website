import { motion } from "framer-motion";
import { BookOpen, Code2, Briefcase, GraduationCap } from "lucide-react";

const ReactPageAbout = () => {
  const experiences = [
    {
      title: "Experience",
      items: [
        {
          duration: "2021 - Present",
          role: "Frontend Developer",
          company: "Freelancer",
          description:
            "Building modern web applications with React and TypeScript.",
        },
        {
          duration: "2020 - 2021",
          role: "Web Developer",
          company: "Freelancer",
          description:
            "Developed and maintained WordPress websites for clients.",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          duration: "2016 - 2020",
          role: "B.Tech in Computer Science",
          company: "JIIT, Noida, UP, 201301",
          description: "Focused on web technologies and software development.",
        },
      ],
    },
  ];

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "React Native",
    "WordPress",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "HTML5/CSS3",
    "Redux",
    "REST APIs",
    "Responsive Design",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Frontend developer passionate about creating beautiful and
            functional web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-gray-600">
                Hey! I'm Shivam, a frontend developer based in India. I
                specialize in building exceptional websites, applications, and
                everything in between.
              </p>
              <p className="text-gray-600">
                With 3+ years of experience in frontend development, I enjoy
                turning complex problems into simple, beautiful, and intuitive
                solutions. When I'm not coding, you'll find me learning new
                technologies or contributing to open-source projects.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Technologies I work with
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <Code2 className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  {category.title === "Experience" ? (
                    <Briefcase className="w-5 h-5 text-blue-500" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-blue-500" />
                  )}
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex + index) * 0.1 }}
                      className="relative pl-6 border-l-2 border-blue-200 hover:border-blue-500 transition-colors"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded-full" />
                      <span className="text-sm text-blue-600 font-medium">
                        {item.duration}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.role}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {item.company}
                      </p>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReactPageAbout;

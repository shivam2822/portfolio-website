import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Shield,
  GraduationCap,
  Church,
} from "lucide-react";
import { useState } from "react";
import firewall from "../../assets/images/the-firewall-thumbnail.png";
import offerletter from "../../assets/images/offerletter-thumbnail.png";
import oit from "../../assets/images/oit-thumbnail.png";

interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  icon: JSX.Element;
  image: string;
  link: string;
  github?: string;
  tech: string[];
  features: string[];
}

const ReactPageProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "The Firewall",
      description:
        "An open-source cybersecurity application designed for blue team operations, providing robust security monitoring and threat detection capabilities.",
      role: "Co-founder & Lead Developer",
      icon: <Shield className="w-6 h-6" />,
      image: firewall, // Replace with actual project image
      link: "https://www.thefirewall.org/",
      tech: ["React", "Node.js", "TypeScript", "Electron", "Security APIs"],
      features: [
        "Real-time threat detection",
        "Network monitoring dashboard",
        "Security incident response",
        "Automated threat mitigation",
        "Comprehensive logging system",
      ],
    },
    {
      id: 2,
      title: "OfferLetter",
      description:
        "A startup platform helping students discover and apply to their ideal colleges abroad, streamlining the international education journey.",
      role: "Frontend Developer",
      icon: <GraduationCap className="w-6 h-6" />,
      image: offerletter, // Replace with actual project image
      link: "https://offerletter.co.in/",
      tech: ["React", "Next.js", "Tailwind CSS", "Firebase"],
      features: [
        "College recommendation engine",
        "Application tracking system",
        "Document management",
        "Admission counseling interface",
        "Visa application guidance",
      ],
    },
    {
      id: 3,
      title: "One in Trinity",
      description:
        "A comprehensive church and diocese management solution providing digital tools for religious institutions to manage their operations efficiently.",
      role: "Full Stack Developer",
      icon: <Church className="w-6 h-6" />,
      image: oit, // Replace with actual project image
      link: "https://oneintrinity.com/",
      tech: ["React Native", "Node.js", "MongoDB", "AWS"],
      features: [
        "Member management",
        "Event scheduling",
        "Donation tracking",
        "Communication system",
        "Resource management",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of meaningful projects I've worked on
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <motion.div
                  className={`relative rounded-xl overflow-hidden ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-video relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 flex gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-blue-600 font-medium mb-6">
                    {project.role}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactPageProjects;

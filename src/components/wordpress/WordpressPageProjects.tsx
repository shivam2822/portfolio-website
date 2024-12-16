import { motion } from "framer-motion";
import { useState } from "react";
import bhagyavidhata from "../../assets/images/bhagyavidhata_thumbnail.png";
import elitelawteam from "../../assets/images/elites_law_team_thumbnail.png";
import sthapatya from "../../assets/images/sthapatya_india_thumbnail.png";
import greatCreditFast from "../../assets/images/great_credit_fast_thumbnail.png";
import arthlabh from "../../assets/images/arthlabh_thumbnail.png";
import skcGlobalVenture from "../../assets/images/skc_global_ventures_thumbnail.png";
import { Project, ProjectCardProps } from "../../types";
import ProjectModal from "../ui/ProjectModal";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="aspect-video"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </motion.div>
  );
};

const WordpressPageProjects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const openModal = (project: Project): void => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setTimeout(() => setCurrentProject(null), 300);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Bhagyavidhata Foundation",
      description:
        "A comprehensive website for a non-profit organization dedicated to empowering underprivileged individuals through education, healthcare, and community development initiatives.",
      image: bhagyavidhata,
      link: "https://bhagyavidhata.org/",
      date: "2024",
      technologies: [
        "WordPress",
        "Elementor",
        "Custom Theme",
        "Contact Form 7",
      ],
      features: [
        "Donation system integration",
        "Event management and calendar",
        "Impact metrics visualization",
        "Newsletter subscription",
        "Mobile-responsive design",
        "Social media integration",
      ],
    },
    {
      id: 2,
      title: "Elite's Law Team",
      description:
        "A modern law firm website showcasing legal services with a professional and trustworthy design. The site features comprehensive service information, team profiles, and easy client engagement tools.",
      image: elitelawteam,
      link: "https://eliteslawteam.com/",
      date: "2024",
      technologies: [
        "WordPress",
        "Elementor Pro",
        "Custom Theme",
        "Contact Form 7",
        "Schema Markup",
      ],
      features: [
        "Case evaluation form integration",
        "Practice areas showcase",
        "Team member profiles",
        "Client testimonials section",
        "Multi-location support",
        "SEO optimization for legal keywords",
        "Mobile-first responsive design",
        "Integrated blog section",
      ],
    },
    {
      id: 3,
      title: "Sthapatya India",
      description:
        "A professional valuation services website that showcases property valuation expertise, detailed service offerings, and streamlined client consultation processes. The platform emphasizes trust, expertise, and comprehensive valuation solutions.",
      image: sthapatya,
      link: "https://credit.indyvault.com/", // Update with actual website link
      date: "2024",
      technologies: [
        "WordPress",
        "Elementor Pro",
        "Custom Theme",
        "Contact Form 7",
        "Google Maps Integration",
        "Schema Markup",
      ],
      features: [
        "Service category showcase",
        "Property valuation request form",
        "Project portfolio gallery",
        "Team expertise highlights",
        "Geographic service area mapping",
        "Client testimonial section",
        "Industry certification display",
        "Detailed valuation process explanation",
      ],
    },
    {
      id: 4,
      title: "Great Credit Fast",
      description:
        "A dynamic credit repair and financial services website designed to help clients improve their credit scores. The platform offers comprehensive credit repair solutions with educational resources and easy-to-understand service packages.",
      image: greatCreditFast,
      link: "https://greatcreditfast.com/",
      date: "2024",
      technologies: [
        "WordPress",
        "Elementor Pro",
        "Custom Theme",
        "Contact Form 7",
        "Animated Sections",
        "Performance Optimization",
      ],
      features: [
        "Interactive service pricing cards",
        "Free credit evaluation form",
        "Before/After credit score showcase",
        "Credit repair process timeline",
        "Educational blog section",
        "Mobile-optimized design",
        "Quick contact scheduling",
        "Service guarantee section",
      ],
    },
    {
      id: 5,
      title: "Arthlabh",
      description:
        "A professional real estate consulting and financial advisory website that helps clients make informed property investments and financial decisions. The platform showcases comprehensive property consultation services alongside expert financial planning guidance.",
      image: arthlabh,
      link: "https://arthlabh.in/",
      date: "2024",
      technologies: [
        "WordPress",
        "Elementor Pro",
        "Custom Theme",
        "Contact Form 7",
        "Property Listing Integration",
        "Google Analytics",
      ],
      features: [
        "Real estate investment showcase",
        "Property consultation booking",
        "Financial advisory services section",
        "Investment portfolio planning",
        "Property market insights",
        "Wealth management services",
        "Client success stories",
        "Expert team profiles",
      ],
    },
    {
      id: 6,
      title: "SKC Global Ventures",
      description:
        "A Dubai-based project management company website that showcases their expertise in construction, infrastructure, and development projects. The platform effectively communicates their international project portfolio and professional management services.",
      image: skcGlobalVenture,
      link: "https://skcglobalventures.com/",
      date: "2024",
      technologies: [
        "WordPress",
        "Elementor Pro",
        "Custom Theme",
        "Contact Form 7",
        "Multi-language Support",
        "Project Portfolio Plugin",
      ],
      features: [
        "International project showcase",
        "Detailed service categories",
        "Interactive project gallery",
        "Dubai office location map",
        "Multi-sector expertise display",
        "Project management process flow",
        "Team expertise profiles",
        "Global presence visualization",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of WordPress websites I've crafted for various clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={openModal}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectData={currentProject}
      />
    </section>
  );
};

export default WordpressPageProjects;

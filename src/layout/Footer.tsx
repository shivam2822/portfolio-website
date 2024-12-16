import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/shivam2822",
      label: "GitHub",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/shivam-goyal-000501156/",
      label: "LinkedIn",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:dev.shivam2822@gmail.com",
      label: "Email",
      color: "bg-green-500 hover:bg-green-600",
    },
  ];

  return (
    <footer className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-medium"
            whileHover={{ scale: 1.02 }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} p-2 rounded-lg text-white shadow-md transition-all`}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-4 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Made with ❤️ using React & Framer Motion
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

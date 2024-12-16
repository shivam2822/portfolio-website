import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ExternalLink } from "lucide-react";

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  projectData,
}) => {
  if (!projectData) return null;

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  // Update the backdrop click handler to be more specific
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/60 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 overflow-y-auto"
          >
            <div className="min-h-screen px-4 text-center">
              {/* Modal positioning */}
              <div className="inline-block w-full max-w-4xl my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {/* Close button */}
                <button
                  onClick={handleButtonClick}
                  className="absolute right-4 top-4 p-2 bg-gray-100 rounded-full transition-colors z-50"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Hero Image */}
                <div className="relative h-64 md:h-96 rounded-t-2xl overflow-hidden">
                  <img
                    src={projectData.image}
                    alt={projectData.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {projectData.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {projectData.description}
                      </p>

                      {/* Key Features */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {projectData.features?.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Project Details */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="mb-4">
                          <h4 className="text-sm text-gray-500 mb-1">
                            Timeline
                          </h4>
                          <div className="flex items-center text-gray-900">
                            <Calendar className="w-4 h-4 mr-2" />
                            {projectData.date}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm text-gray-500 mb-1">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {projectData.technologies?.map((tech, index) => (
                              <span
                                key={index}
                                className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={projectData.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

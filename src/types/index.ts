export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  technologies: string[];
  features: string[];
}

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: Project | null;
}

export interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

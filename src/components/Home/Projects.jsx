import React from "react";
import { Github, ExternalLink, Folder } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Twigs",
      description: "Minimalist image sharing and real-time chat platform with premium glassmorphic UI",
      tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Express"],
      github: "https://github.com/aayuxhchaudhary/twigs_frontend",
      demo: "https://twigs.ayushcenzo.tech",
      color: "from-emerald-900 to-green-950",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio showcasing projects and skills",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/aayuxhchaudhary",
      demo: "https://www.ayushcenzo.tech",
      color: "from-cyan-900 to-teal-950",
    },
    {
      title: "Migration Hub (Hartron)",
      description: "MERN platform for migration data and student enrollment",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/aayuxhchaudhary",
      demo: "https://www.migrationhub.in",
      color: "from-indigo-900 to-blue-950",
    },
    {
      title: "VertiVerse (In Development)",
      description: "Manga & manhwa discovery and reading platform",
      tech: ["React", "Node.js", "Vite", "Tailwind CSS"],
      github: "https://github.com/aayuxhchaudhary",
      color: "from-rose-900 to-purple-950",
    },
    {
      title: "Falcon (In Development)",
      description: "Luxury jewelry brand showcase & e-commerce",
      tech: ["React", "Node.js", "Vite", "Tailwind CSS"],
      github: "https://github.com/aayuxhchaudhary",
      color: "from-amber-900 to-yellow-950",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen select-none py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-600 to-black rounded-2xl mb-4">
            <Folder className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Projects</h1>
          <p className="text-gray-600 text-lg">Things I've built</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white z-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

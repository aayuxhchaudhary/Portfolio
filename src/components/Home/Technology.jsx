import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Technology() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const technologies = [
    {
      category: 'Frontend',
      skills: [
        {
          name: 'React',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          info: 'A JavaScript library for building user interfaces',
          color: 'hover:bg-cyan-50'
        },
        {
          name: 'JavaScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          info: 'High-level programming language for web development',
          color: 'hover:bg-yellow-50'
        },
        {
          name: 'TypeScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          info: 'Typed superset of JavaScript that compiles to plain JavaScript',
          color: 'hover:bg-blue-50'
        },
        {
          name: 'HTML5',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          info: 'Standard markup language for creating web pages',
          color: 'hover:bg-orange-50'
        },
        {
          name: 'CSS3',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          info: 'Style sheet language for describing presentation of documents',
          color: 'hover:bg-blue-50'
        },
        {
          name: 'Tailwind CSS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
          info: 'Utility-first CSS framework for rapid UI development',
          color: 'hover:bg-teal-50'
        },
      ]
    },
    {
      category: 'Backend',
      skills: [
        {
          name: 'Node.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          info: 'JavaScript runtime built on Chrome\'s V8 engine',
          color: 'hover:bg-green-50'
        },
        {
          name: 'Express',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          info: 'Fast, minimalist web framework for Node.js',
          color: 'hover:bg-gray-50'
        },
        {
          name: 'Python',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          info: 'High-level programming language known for simplicity',
          color: 'hover:bg-blue-50'
        },
        {
          name: 'Java',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          info: 'Object-oriented programming language for enterprise applications',
          color: 'hover:bg-red-50'
        },
      ]
    },
    {
      category: 'Database',
      skills: [
        {
          name: 'MongoDB',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          info: 'NoSQL document database for modern applications',
          color: 'hover:bg-green-50'
        },
        {
          name: 'MySQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          info: 'Popular open-source relational database system',
          color: 'hover:bg-blue-50'
        },
        {
          name: 'PostgreSQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          info: 'Advanced open-source relational database',
          color: 'hover:bg-blue-50'
        },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        {
          name: 'Git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          info: 'Distributed version control system',
          color: 'hover:bg-orange-50'
        },
        {
          name: 'Docker',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          info: 'Platform for developing, shipping, and running applications',
          color: 'hover:bg-blue-50'
        },
        {
          name: 'VS Code',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
          info: 'Lightweight but powerful source code editor',
          color: 'hover:bg-blue-50'
        },
        {
          name: 'GitHub',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          info: 'Platform for version control and collaboration',
          color: 'hover:bg-gray-50'
        },
      ]
    }
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
        type: 'spring',
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-500 to-black rounded-2xl mb-4">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Technologies & Skills</h1>
          <p className="text-gray-600 text-lg">Tools and languages I work with</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-5 pb-3 border-b border-gray-200">
                {tech.category}
              </h2>

              <div className="grid grid-cols-3 gap-4">
                {tech.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={`flex flex-col items-center justify-center p-4 rounded-xl ${skill.color} transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-gray-200 hover:scale-105`}>
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 object-contain mb-2"
                      />
                      <span className="text-xs font-medium text-gray-700 text-center">
                        {skill.name}
                      </span>
                    </div>

                    {hoveredSkill === `${index}-${skillIndex}` && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg z-10 w-48 text-center">
                        <div className="font-semibold mb-1">{skill.name}</div>
                        <div className="text-gray-300">{skill.info}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Hover over any technology to learn more • Continuously learning and exploring
          </p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Qualification() {
  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      field: 'Computer Science',
      institution: 'Kurukshetra University',
      location: 'Kurukshetra, Haryana',
      period: '2024',
      grade: 'CGPA: 8.5/10'
    },
    {
      degree: 'Higher Secondary',
      field: 'Science Stream',
      institution: 'IGPS Kaithal',
      location: 'Kaithal, Haryana',
      period: '2021',
      grade: 'Percentage: 91%'
    }
  ];

  const experience = [
    {
      role: 'Software Development Intern',
      company: 'Hartron Advance Skill Centre',
      location: 'Kaithal, Haryana, India',
      period: 'January 2026 - Present',
      responsibilities: [
        'Developing and maintaining web applications using React and Node.js',
        'Collaborating with team members on feature implementations',
        'Participating in code reviews and agile development processes'
      ]
    }
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen select-none py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Qualifications</h1>
          <p className="text-gray-600 text-lg">Education & Experience</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-black rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Education</h2>
            </div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 relative z-10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-800 font-medium mb-3">{edu.field}</p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <span className="text-sm font-medium text-gray-700">{edu.grade}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-black rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
            </div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 relative z-10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-green-800 font-medium mb-3">{exp.company}</p>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-green-800 mt-1">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

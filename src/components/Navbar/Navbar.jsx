import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, CircleUserRound, Globe, Folder, GraduationCap, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const Menu_icons = [
    { name: 'GitHub', icon: <Github />, link: 'https://github.com/Ayushcenzo' },
    { name: 'LinkedIn', icon: <Linkedin />, link: 'https://www.linkedin.com/in/' },
    { name: 'Twitter', icon: <Twitter />, link: 'https://twitter.com/' },
  ];

  const Menu_items = [
    { name: 'Profile', icon: <CircleUserRound />, sectionId: 'profile' },
    { name: 'Technologies', icon: <Globe />, sectionId: 'technologies' },
    { name: 'Education', icon: <GraduationCap />, sectionId: 'education' },
    { name: 'Projects', icon: <Folder />, sectionId: 'projects' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Menu_items.map(item => item.sectionId);
      const navbarHeight = 80;
      const scrollPosition = window.scrollY + navbarHeight + 20;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex items-center justify-center h-16 select-none sticky top-0 z-50'>
      <nav className="w-11/12 md:w-3/4 mt-4 h-12 bg-white shadow-md p-4 flex justify-between items-center rounded-full">
        <div className='flex items-center justify-center gap-3'>
          <img src="https://res.cloudinary.com/dglbqay4e/image/upload/v1762235448/logo_iizuc7.png" alt="logo" className='h-10 md:h-12 object-contain rounded-3xl' />
        </div>

        <div className='hidden md:block'>
          {/* Make the container relative */}
          <ul className="relative flex items-center gap-3 mx-4">
            {Menu_items.map((item) => (
              <li 
                key={item.name} 
                onClick={() => scrollToSection(item.sectionId)}
                className={`flex items-center gap-1.5 cursor-pointer transition-all duration-300 px-3 py-2 rounded-full ${
                  activeSection === item.sectionId
                    ? 'text-white' // Only change text color
                    : 'text-gray-600 hover:text-gray-900'
                } relative z-10`}
              >
                {/* This is the sliding pill */}
                {activeSection === item.sectionId && (
                  <motion.div
                    layoutId="active-pill" // This ID links the pills
                    className="absolute inset-0 bg-gray-900 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {item.icon}
                <span className="text-sm font-bold">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {Menu_icons.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 hover:stroke-gray-900 stroke-1 transition-colors"
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* You can also animate the mobile menu! */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 mx-4 bg-white shadow-lg rounded-2xl p-4 z-40">
          <ul className="space-y-2 mb-4 pb-4 border-b border-gray-200">
            {Menu_items.map((item) => (
              <li 
                key={item.name} 
                onClick={() => scrollToSection(item.sectionId)}
                className={`flex items-center gap-2 cursor-pointer p-3 rounded-full transition-all duration-300 ${
                  activeSection === item.sectionId
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-600 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-6 pt-2">
            {Menu_icons.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
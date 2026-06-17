import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footnote() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, link: 'https://github.com/aayuxhchaudhary' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, link: 'https://www.linkedin.com/in/' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, link: 'https://twitter.com/' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, link: 'mailto:your.email@example.com' },
  ];

  return (
    <footer className="bg-black text-gray-300 py-8 mt-auto select-none">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Name/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-1">Ayush</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Right - Quick Links */}
          <div className="flex gap-4 text-sm">
            <a href="#profile" className="hover:text-white transition-colors">Profile</a>
            <a href="#technologies" className="hover:text-white transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom - Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Ayush
          </p>
          <p className="mt-1">© {currentYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
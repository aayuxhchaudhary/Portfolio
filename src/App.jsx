import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Home/Profile.jsx'
import Technology from './components/Home/Technology.jsx'
import Qualification from './components/Home/Qualification.jsx'
import Projects from './components/Home/Projects.jsx'
import Footnote from './components/Home/Footnote.jsx'

export default function App() {
  return (
    <div className="min-h-screen h-[100vh] w-full bg-[#fafafa] relative text-gray-900">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <Navbar />
      <div id="profile"><Profile /></div>
      <div id="technologies"><Technology /></div>
      <div id="education"><Qualification /></div>
      <div id="projects"><Projects /></div>
      <Footnote/>
    </div>
  )
}
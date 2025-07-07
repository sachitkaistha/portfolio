import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import FloatingChat from './components/FloatingChat';

const themes = [
  { name: 'Blue', class: 'theme-blue' },
  { name: 'Emerald', class: 'theme-emerald' },
  { name: 'Amber', class: 'theme-amber' },
  { name: 'Slate', class: 'theme-slate' },
  { name: 'Dark', class: 'dark' },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    document.body.classList.remove(...themes.map(t => t.class));
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setTheme(!darkMode ? 'dark' : 'theme-blue');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${theme} ${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className="dark:bg-slate-900 bg-gray-50 min-h-screen relative overflow-x-hidden">
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 z-50">
          <div style={{ width: `${scroll}%` }} className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 transition-all duration-200" />
        </div>
        <ParticleBackground />
        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-slate-600" />
          )}
        </button>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/10 dark:bg-slate-900/10 border-b border-white/20 dark:border-slate-700/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                Sachit
              </div>
              <div className="hidden md:flex space-x-8">
                {['about', 'skills', 'education', 'experience', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors capitalize"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Certifications />
          <Projects />
          <Contact />
        </main>

        {/* Floating Chat */}
        <FloatingChat />

        {/* Scroll Indicator */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        </div>

        {/* Footer */}
        <footer className="w-full mt-16 py-6 bg-white/70 dark:bg-slate-900/70 text-center text-slate-600 dark:text-slate-300 text-sm shadow-inner z-30 relative">
          <div>
            &copy; {new Date().getFullYear()} Sachit. Built with React &amp; Vite.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
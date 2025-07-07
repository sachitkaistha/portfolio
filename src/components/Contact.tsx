import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 relative overflow-hidden min-h-[60vh] flex items-center justify-center">
      {/* Animated SVG Accent - Purple/Blue */}
      <svg className="absolute left-0 top-0 w-full h-full -z-10 opacity-40" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="contact-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <path fill="url(#contact-gradient)" fillOpacity="0.18" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
      {/* Floating Mail Icon */}
      <Mail className="absolute left-1/2 -translate-x-1/2 top-10 w-16 h-16 text-purple-400 opacity-30 animate-float" />
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch justify-center">
            {/* Left: Get In Touch Form */}
            <div className="flex-1 glass-card p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 dark:border-slate-700/30 backdrop-blur-2xl bg-white/60 dark:bg-slate-800/60 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <Mail className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-move">
                  Get In Touch
                </h2>
              </div>
              <form className="flex flex-col gap-6">
                <input type="text" placeholder="Your Name" className="rounded-xl px-5 py-3 bg-white/80 dark:bg-slate-800/80 border border-white/30 dark:border-slate-700/30 focus:ring-2 focus:ring-purple-400 outline-none transition-all" />
                <input type="email" placeholder="Your Email" className="rounded-xl px-5 py-3 bg-white/80 dark:bg-slate-800/80 border border-white/30 dark:border-slate-700/30 focus:ring-2 focus:ring-purple-400 outline-none transition-all" />
                <textarea placeholder="Your Message" rows={5} className="rounded-xl px-5 py-3 bg-white/80 dark:bg-slate-800/80 border border-white/30 dark:border-slate-700/30 focus:ring-2 focus:ring-purple-400 outline-none transition-all resize-none" />
                <div className="flex flex-col md:flex-row gap-4 mt-4 items-center justify-between">
                  {/* Hire Me Button */}
                  <button type="button" className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 animate-bounce-slow">
                    <span className="relative z-10">Hire Me</span>
                    <span className="absolute left-0 top-0 w-full h-full rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </button>
                  <button type="submit" className="px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            {/* Right: Profile Description & Socials */}
            <div className="flex-1 glass-card p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 dark:border-slate-700/30 backdrop-blur-2xl bg-white/60 dark:bg-slate-800/60 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-move">Let's Collaborate!</h3>
              <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg mb-8">
                I'm a passionate developer specializing in DevOps and web development, eager to tackle innovative projects and collaborate with forward-thinking teams. Whether you have a new idea, need a technical partner, or just want to connect, feel free to reach out!
              </p>
              <div className="flex gap-5 justify-center mt-2">
                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gradient-to-br from-slate-800 to-purple-400 text-white shadow-lg hover:scale-110 transition-all duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-400 text-white shadow-lg hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:your.email@example.com" className="p-3 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 text-white shadow-lg hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
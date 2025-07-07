import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Folder, Play, Code, Zap } from 'lucide-react';

const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  const projects = [
    {
      id: 1,
      title: "Cloud Infrastructure Automation",
      category: "DevOps",
      description: "Automated AWS infrastructure provisioning using Terraform and Jenkins, reducing deployment time by 80%.",
      longDescription: "A comprehensive infrastructure-as-code solution that automates the entire AWS cloud setup process. Features include auto-scaling groups, load balancers, RDS instances, and monitoring dashboards. The system uses Terraform for infrastructure provisioning and Jenkins for CI/CD pipeline automation.",
      techStack: ["Terraform", "AWS", "Jenkins", "Docker", "Bash"],
      image: "🏗️",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Auto-scaling infrastructure",
        "Zero-downtime deployments",
        "Cost optimization",
        "Monitoring & alerting"
      ],
      metrics: {
        "Deployment Time": "80% faster",
        "Uptime": "99.9%",
        "Cost Savings": "40%"
      }
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Backend",
      description: "Full-featured e-commerce solution with Laravel, featuring real-time inventory and payment processing.",
      longDescription: "A scalable e-commerce platform built with Laravel framework, featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Includes real-time inventory management and order tracking.",
      techStack: ["PHP", "Laravel", "MySQL", "Redis", "JavaScript"],
      image: "🛒",
      color: "from-purple-500 to-pink-500",
      features: [
        "Real-time inventory",
        "Payment gateway integration",
        "Admin dashboard",
        "Order tracking"
      ],
      metrics: {
        "Users": "10,000+",
        "Transactions": "$500K+",
        "Performance": "2s load time"
      }
    },
    {
      id: 3,
      title: "Microservices API Gateway",
      category: "Backend",
      description: "Scalable API gateway with load balancing, rate limiting, and service discovery.",
      longDescription: "A robust microservices architecture with API gateway, implementing load balancing, rate limiting, authentication, and service discovery. Built for high availability and horizontal scaling.",
      techStack: ["PHP", "Laravel", "Docker", "Nginx", "Redis"],
      image: "🔗",
      color: "from-green-500 to-emerald-500",
      features: [
        "Load balancing",
        "Rate limiting",
        "Service discovery",
        "Health monitoring"
      ],
      metrics: {
        "Requests/sec": "10,000+",
        "Services": "15+",
        "Latency": "<100ms"
      }
    },
    {
      id: 4,
      title: "CI/CD Pipeline Automation",
      category: "DevOps",
      description: "Automated testing and deployment pipeline with GitHub Actions and Docker containers.",
      longDescription: "Complete CI/CD pipeline automation using GitHub Actions, Docker, and AWS. Features automated testing, security scanning, and multi-environment deployments with rollback capabilities.",
      techStack: ["GitHub Actions", "Docker", "AWS", "Bash", "YAML"],
      image: "⚙️",
      color: "from-orange-500 to-red-500",
      features: [
        "Automated testing",
        "Security scanning",
        "Multi-environment deployment",
        "Rollback capabilities"
      ],
      metrics: {
        "Deploy Frequency": "50+ per day",
        "Success Rate": "98%",
        "MTTR": "5 minutes"
      }
    },
    {
      id: 5,
      title: "Real-time Monitoring Dashboard",
      category: "DevOps",
      description: "Comprehensive monitoring solution with Grafana, Prometheus, and custom alerting.",
      longDescription: "A real-time monitoring and alerting system for infrastructure and application metrics. Features custom dashboards, automated alerting, and performance analytics with historical data tracking.",
      techStack: ["Grafana", "Prometheus", "Docker", "Linux", "Python"],
      image: "📊",
      color: "from-teal-500 to-blue-500",
      features: [
        "Real-time metrics",
        "Custom dashboards",
        "Automated alerting",
        "Performance analytics"
      ],
      metrics: {
        "Metrics Tracked": "1000+",
        "Alerts": "24/7",
        "Retention": "1 year"
      }
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: "Backend",
      description: "Advanced inventory tracking with real-time updates, reporting, and multi-location support.",
      longDescription: "A comprehensive inventory management system with real-time stock tracking, automated reordering, multi-location support, and detailed reporting. Features barcode scanning and mobile app integration.",
      techStack: ["PHP", "Laravel", "MySQL", "Chart.js", "AJAX"],
      image: "📦",
      color: "from-yellow-500 to-orange-500",
      features: [
        "Real-time tracking",
        "Automated reordering",
        "Multi-location support",
        "Barcode scanning"
      ],
      metrics: {
        "Items Tracked": "50,000+",
        "Locations": "25+",
        "Accuracy": "99.5%"
      }
    }
  ];

  const openModal = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setShowModal(true);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-6xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Project Showcase
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Innovative solutions that demonstrate expertise in modern development and DevOps practices
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  group relative overflow-hidden
                  bg-white/80 dark:bg-slate-800/80 backdrop-blur-md
                  rounded-3xl border border-white/30 dark:border-slate-700/30
                  hover:scale-105 hover:shadow-2xl
                  transition-all duration-500 cursor-pointer
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => openModal(index)}
              >
                {/* Animated background gradient */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                  bg-gradient-to-br ${project.color}
                `}></div>

                {/* Project content */}
                <div className="relative z-10 p-8">
                  {/* Project icon/emoji */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>

                  {/* Category badge */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Project title */}
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200">
                      <Play className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200">
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  
                  {/* View details indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-float"
                      style={{
                        left: `${15 + i * 20}%`,
                        top: `${15 + i * 15}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/30 dark:border-slate-700/30 shadow-2xl">
            <div className="p-8">
              {/* Modal header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-4xl mb-2">{projects[selectedProject].image}</div>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                    {projects[selectedProject].title}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${projects[selectedProject].color}`}>
                    {projects[selectedProject].category}
                  </span>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  ✕
                </button>
              </div>

              {/* Project details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                    Project Overview
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {projects[selectedProject].longDescription}
                  </p>

                  <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {projects[selectedProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Zap className="w-4 h-4 text-green-500" />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                    Project Metrics
                  </h4>
                  <div className="space-y-3 mb-6">
                    {Object.entries(projects[selectedProject].metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <span className="text-slate-600 dark:text-slate-300">{key}</span>
                        <span className="font-semibold text-slate-800 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform duration-200">
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 dark:bg-slate-600 text-white rounded-lg hover:scale-105 transition-transform duration-200">
                      <Github className="w-5 h-5" />
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;
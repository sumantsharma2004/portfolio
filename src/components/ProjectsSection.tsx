"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code, Zap, Users, TrendingUp } from "lucide-react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "TrustMed Healthcare Platform",
      description: "Full-stack healthcare platform streamlining doctor–patient interactions and appointment booking with optimized workflows",
      longDescription: [
        "Built a complete healthcare platform streamlining doctor–patient interactions and appointment booking",
        "Designed REST APIs supporting 10K+ concurrent users and optimized workflows by 40%",
        "Implemented secure authentication, patient records management, and real-time appointment scheduling"
      ],
      tech: ["React", "Node.js", "Express", "SQLite", "REST API"],
      github: "https://github.com/sumantsharma2004",
      demo: "#",
      metrics: [
        { label: "Concurrent Users", value: "10K+" },
        { label: "Efficiency Gain", value: "40%" },
        { label: "API Endpoints", value: "20+" }
      ],
      color: "cyan",
      icon: "🏥"
    },
    {
      title: "Surface Profiling of RF Cavity",
      description: "Non-contact laser imaging tool with sub-millimeter precision for remote monitoring in radioactive environments",
      longDescription: [
        "Created a laser-based surface profiling system achieving 95% accuracy for RF cavity inspection",
        "Implemented real-time frame processing with Python and OpenCV for defect detection",
        "Developed intuitive Tkinter GUI for remote monitoring in safety-critical radioactive environments"
      ],
      tech: ["Python", "OpenCV", "Tkinter", "Computer Vision", "Image Processing"],
      github: "#",
      demo: "#",
      metrics: [
        { label: "Accuracy", value: "95%" },
        { label: "Precision", value: "Sub-mm" },
        { label: "Processing", value: "Real-time" }
      ],
      color: "purple",
      icon: "🔬"
    },
    {
      title: "CineScope Streaming Platform",
      description: "Netflix-like platform with authentication, playback tracking, and personalized recommendations using MERN stack",
      longDescription: [
        "Developed a Netflix-like streaming platform with complete authentication and user management",
        "Integrated REST APIs and MongoDB for user history, search functionality, and watchlists",
        "Implemented personalized recommendations and playback tracking for enhanced user experience"
      ],
      tech: ["MongoDB", "Express", "React", "Node.js", "REST API", "JWT"],
      github: "https://github.com/sumantsharma2004",
      demo: "#",
      metrics: [
        { label: "Tech Stack", value: "MERN" },
        { label: "Features", value: "15+" },
        { label: "Database", value: "MongoDB" }
      ],
      color: "cyan",
      icon: "🎬"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building innovative solutions across healthcare, research, and entertainment
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`bg-card border border-border rounded-2xl overflow-hidden hover:border-${project.color}-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-${project.color}-500/20`}>
                <div className="grid lg:grid-cols-3 gap-6 p-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{project.icon}</span>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mt-1">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 bg-${project.color}-400/10 border border-${project.color}-400/30 rounded-lg hover:border-${project.color}-400 transition-all duration-300`}
                        >
                          <Github className={`text-${project.color}-400`} size={20} />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 bg-${project.color}-400/10 border border-${project.color}-400/30 rounded-lg hover:border-${project.color}-400 transition-all duration-300`}
                        >
                          <ExternalLink className={`text-${project.color}-400`} size={20} />
                        </motion.a>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2 pt-2">
                      {project.longDescription.map((desc, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <Zap className={`text-${project.color}-400 mt-1 flex-shrink-0 group-hover/item:text-${project.color === "cyan" ? "purple" : "cyan"}-400 transition-colors`} size={16} />
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`px-3 py-1.5 text-sm rounded-full bg-${project.color}-400/10 text-${project.color}-400 border border-${project.color}-400/30 font-medium cursor-default`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="lg:col-span-1 flex lg:flex-col gap-4">
                    {project.metrics.map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        className={`bg-gradient-to-br from-${project.color}-400/10 to-transparent border border-${project.color}-400/30 rounded-xl p-4 flex-1 hover:border-${project.color}-400/60 transition-all duration-300`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className={`text-${project.color}-400`} size={16} />
                          <p className="text-xs text-muted-foreground font-medium">{metric.label}</p>
                        </div>
                        <p className={`text-2xl font-bold text-${project.color}-400`}>{metric.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">More projects available on GitHub</p>
          <motion.a
            href="https://github.com/sumantsharma2004"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

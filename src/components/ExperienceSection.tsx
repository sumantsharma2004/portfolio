"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Strategic Chief",
      organization: "Optica JIIT Chapter",
      period: "06/2024 – 07/2025",
      location: "Noida, Uttar Pradesh",
      type: "Leadership",
      description: [
        "Led JSCOP 2024 conference with 200+ paid registrations, managing team of 12 volunteers and increasing engagement by 25%",
        "Orchestrated strategic initiatives for JIIT's premier optics and photonics society",
        "Coordinated technical workshops, research collaborations, and industry connections"
      ],
      skills: ["Leadership", "Strategic Planning", "Event Management", "Team Coordination"],
      color: "purple",
      icon: "👨‍💼"
    },
    {
      title: "Research Intern",
      organization: "Beam Technology Development Group, BARC, Mumbai",
      period: "06/2024 – 07/2024",
      location: "Maharashtra, India",
      type: "Research",
      description: [
        "Built laser-based surface profiling system achieving 95% accuracy, reducing defect identification time by 70%",
        "Developed automated data extraction and analysis pipelines using Python and OpenCV for real-time defect detection",
        "Contributed to INR 1 Crore safety-critical project with Agile debugging workflows for laser imaging systems"
      ],
      skills: ["Python", "OpenCV", "Computer Vision", "Data Analysis", "Research"],
      color: "cyan",
      icon: "🔬"
    },
    {
      title: "Remote Intern",
      organization: "India Space Lab, Delhi",
      period: "06/2025 – 07/2025",
      location: "Remote",
      type: "Aerospace",
      description: [
        "Simulated aerospace telemetry and drone control systems to enhance understanding of event-driven architectures",
        "Modeled satellite launch control systems strengthening responsive design and data synchronization",
        "Gained hands-on experience with aerospace software engineering principles"
      ],
      skills: ["Telemetry", "Control Systems", "Event-Driven Architecture", "Data Sync"],
      color: "purple",
      icon: "🚀"
    },
    {
      title: "Organizing Committee Member",
      organization: "IEEE ICSC 2025",
      period: "02/2025",
      location: "Noida, Uttar Pradesh",
      type: "Conference",
      description: [
        "Coordinated 5 hybrid sessions for 100+ attendees using Slack and Notion for efficient collaboration",
        "Managed logistics, speaker coordination, and technical setup for international conference",
        "Facilitated knowledge exchange between academia and industry professionals"
      ],
      skills: ["Event Planning", "Coordination", "Communication", "Project Management"],
      color: "cyan",
      icon: "📡"
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Research, leadership, and technical excellence across domains
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Animated Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.5 }}
                className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 rounded-full bg-${exp.color}-400 shadow-lg shadow-${exp.color}-400/50 border-4 border-background z-10`}
              />

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="ml-12 md:ml-0"
              >
                <div className={`bg-card border border-border rounded-2xl p-6 hover:border-${exp.color}-400/50 transition-all duration-300 group hover:shadow-xl hover:shadow-${exp.color}-500/10`}>
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{exp.icon}</span>
                        <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="space-y-1 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-cyan-400" />
                          <span className="font-medium text-foreground">{exp.organization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-purple-400" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-cyan-400" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full bg-${exp.color}-400/10 text-${exp.color}-400 border border-${exp.color}-400/30 font-semibold`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <TrendingUp className="text-cyan-400 mt-1 flex-shrink-0 group-hover/item:text-purple-400 transition-colors" size={16} />
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 text-xs rounded-full bg-secondary hover:bg-${exp.color}-400/20 border border-border hover:border-${exp.color}-400/50 transition-all duration-300 cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
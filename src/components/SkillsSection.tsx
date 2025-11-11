"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, Terminal, Wrench, Brain } from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["C/C++", "Python", "JavaScript", "TypeScript", "Java"],
      color: "cyan",
      proficiency: 95
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["React.js", "Node.js", "Angular", "Next.js", "Express", "Tailwind CSS"],
      color: "purple",
      proficiency: 92
    },
    {
      icon: Database,
      title: "Databases & Data",
      skills: ["SQL", "MongoDB", "SQLite", "PostgreSQL", "Data Structures & Algorithms"],
      color: "cyan",
      proficiency: 88
    },
    {
      icon: Terminal,
      title: "Core CS Fundamentals",
      skills: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "DBMS"],
      color: "purple",
      proficiency: 90
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Excel", "OpenCV", "Tkinter"],
      color: "cyan",
      proficiency: 87
    },
    {
      icon: Brain,
      title: "Technical Skills",
      skills: ["Computer Vision", "REST APIs", "Agile", "Problem Solving", "Research"],
      color: "purple",
      proficiency: 85
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Full-stack development, research, and engineering expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`bg-card border border-border rounded-xl p-6 h-full hover:border-${category.color}-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-${category.color}-500/20 relative overflow-hidden`}>
                {/* Animated background gradient */}
                <motion.div
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute inset-0 bg-gradient-to-br from-${category.color}-400/20 to-transparent`}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`p-2 bg-${category.color}-400/10 rounded-lg group-hover:bg-${category.color}-400/20 transition-colors`}
                      >
                        <category.icon className={`text-${category.color}-400`} size={24} />
                      </motion.div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                  
                  {/* Proficiency Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">Proficiency</span>
                      <span className={`text-xs font-bold text-${category.color}-400`}>{category.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${category.proficiency}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r from-${category.color}-400 to-${category.color === "cyan" ? "purple" : "cyan"}-400 rounded-full`}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.15, y: -3 }}
                        className="px-3 py-1.5 text-sm bg-secondary rounded-lg hover:bg-accent transition-colors cursor-default font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
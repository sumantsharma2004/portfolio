"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Code, Zap, Trophy, Users } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "6.1", color: "cyan" },
    { icon: Code, label: "Projects", value: "10+", color: "purple" },
    { icon: Trophy, label: "Hackathons", value: "Top 100", color: "cyan" },
    { icon: Users, label: "Leadership", value: "200+", color: "purple" },
  ];

  const achievements = [
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "Top 100 in India HackWithInfy 2025",
    "Finalist Smart India Hackathon 2024",
    "Finalist RideHack College Hackathon 2024",
    "Active Competitive Programmer - LeetCode, GeeksforGeeks, Coding Ninjas"
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Driven by innovation, research, and engineering excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Education & Background</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="font-bold text-lg text-foreground">Bachelor of Technology in Computer Science</h4>
                  <p className="text-cyan-400 font-medium">Jaypee Institute of Information Technology, Noida</p>
                  <p className="text-muted-foreground text-sm">2022 – 2026 • Noida, Uttar Pradesh</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Specializing in cutting-edge technologies at the intersection of research and practical application. 
                  My journey combines rigorous academic training with hands-on experience in atomic research, 
                  aerospace systems, and full-stack development.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about building scalable systems, leading technical teams, and solving complex problems 
                  through innovative engineering solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-card border border-border rounded-xl p-6 hover:border-${stat.color}-400/50 transition-all duration-300 group cursor-pointer`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className={`text-${stat.color}-400 mb-3 group-hover:text-${stat.color === "cyan" ? "purple" : "cyan"}-400 transition-colors`} size={28} />
                </motion.div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="font-bold text-2xl gradient-text">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-500/10 via-card to-cyan-500/10 border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-yellow-400" size={32} />
              <h3 className="text-3xl font-bold gradient-text">Achievements & Recognition</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 group-hover:bg-purple-400 transition-colors" />
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Grid Background with depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF15_1px,transparent_1px),linear-gradient(to_bottom,#9333EA15_1px,transparent_1px)] bg-[size:8rem_8rem]" />
      
      {/* Multiple Animated gradient orbs with varied animations */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Enhanced Social Icons with sparkle effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6 flex items-center justify-center gap-4"
            >
              <motion.a
                href="https://github.com/sumantsharma"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg hover:border-cyan-400 transition-all duration-300 glow-cyan relative group"
              >
                <Github className="text-cyan-400 relative z-10" size={20} />
                <motion.div
                  className="absolute inset-0 bg-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sumant-sharma"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card/80 backdrop-blur-sm border border-purple-400/30 rounded-lg hover:border-purple-400 transition-all duration-300 glow-purple relative group"
              >
                <Linkedin className="text-purple-400 relative z-10" size={20} />
                <motion.div
                  className="absolute inset-0 bg-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
              <motion.a
                href="mailto:sumantsharma2004@gmail.com"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg hover:border-cyan-400 transition-all duration-300 glow-cyan relative group"
              >
                <Mail className="text-cyan-400 relative z-10" size={20} />
                <motion.div
                  className="absolute inset-0 bg-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            </motion.div>

            {/* Enhanced Name with better gradient animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 relative"
            >
              <motion.span 
                className="gradient-text inline-block relative"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Sumant Sharma
                <motion.span
                  className="absolute -top-4 -right-4"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="text-cyan-400" size={24} />
                </motion.span>
              </motion.span>
            </motion.h1>
            
            {/* Enhanced title with stagger animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 mb-8"
            >
              <motion.p 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  y: [0, -2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Software Engineer & Research Innovator
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl text-cyan-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                B.Tech Computer Science • JIIT Noida • 2022-2026
              </motion.p>
              
              {/* Enhanced badges with individual animations */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-3 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { text: "BARC Research Intern", color: "cyan" },
                  { text: "Strategic Chief @ Optica JIIT", color: "purple" },
                  { text: "Top 100 HackWithInfy 2025", color: "cyan" }
                ].map((badge, i) => (
                  <motion.span
                    key={badge.text}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 bg-${badge.color}-400/10 border border-${badge.color}-400/30 rounded-full text-sm font-medium hover:border-${badge.color}-400/60 transition-all cursor-default`}
                  >
                    {badge.text}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Enhanced description with better readability */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Building innovative solutions at the intersection of cutting-edge research and full-stack development. 
              Specialized in laser imaging systems, healthcare platforms, and scalable web applications.
              <motion.span 
                className="block mt-2 text-cyan-400 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Seeking Software Engineering Internships at Top Tech Companies
              </motion.span>
            </motion.p>
            
            {/* Enhanced CTA buttons with better hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 240, 255, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 glow-cyan relative group overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 240, 255, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-lg font-semibold transition-all duration-300 hover:border-cyan-400 relative group overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-cyan-400/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 rounded-lg font-semibold transition-all duration-300 hover:border-purple-400 relative group overflow-hidden"
              >
                <span className="relative z-10">Download Resume</span>
                <motion.div
                  className="absolute inset-0 bg-purple-400/10"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-cyan-400 text-sm font-medium">Scroll Down</span>
          <ChevronDown className="text-cyan-400" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
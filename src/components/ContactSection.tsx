"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Phone, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const contactLinks = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "sumantsharma2004@gmail.com", 
      href: "mailto:sumantsharma2004@gmail.com",
      color: "cyan"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      value: "Connect on LinkedIn", 
      href: "https://linkedin.com/in/sumant-sharma",
      color: "purple"
    },
    { 
      icon: Github, 
      label: "GitHub", 
      value: "View My Repositories", 
      href: "https://github.com/sumantsharma",
      color: "cyan"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+91-9412223764", 
      href: "tel:+919412223764",
      color: "purple"
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-purple-500/5 to-transparent" />
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and build something amazing together
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect!</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm actively seeking Software Engineering Internship opportunities at top tech companies. 
                  Always open to discussing innovative projects, research collaborations, or just having a 
                  chat about technology and engineering.
                </p>
                
                <div className="flex items-start gap-3 text-muted-foreground mb-4">
                  <MapPin className="text-cyan-400 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p>JIIT Noida, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-xl">
                  <p className="text-sm text-foreground font-medium mb-2">🎯 Open to Opportunities</p>
                  <p className="text-xs text-muted-foreground">
                    Full-Stack Development • Research Internships • Software Engineering Roles
                  </p>
                </div>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-2 gap-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-card border border-border rounded-xl p-5 hover:border-${link.color}-400/50 transition-all duration-300 group`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <link.icon className={`text-${link.color}-400 mb-3 group-hover:text-${link.color === "cyan" ? "purple" : "cyan"}-400 transition-colors`} size={24} />
                    </motion.div>
                    <p className="font-semibold text-sm mb-1">{link.label}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">{link.value}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
                <motion.div
                  animate={{
                    opacity: [0.03, 0.08, 0.03],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500"
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="Your name"
                      />
                    </motion.div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                    >
                      {formStatus === "success" ? (
                        <>
                          <CheckCircle size={18} />
                          <span>Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20 pt-10 border-t border-border"
        >
          <p className="text-muted-foreground mb-2">
            © {new Date().getFullYear()} Sumant Sharma. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS, Framer Motion & ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
}
"use client"
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';
import {
  Github,
  Linkedin,
  Instagram,
  Code2,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import {motion}  from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiVuedotjs,
} from "react-icons/si";

export default function Home() {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/finalcv.pdf';
    link.download = 'finalcv.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const SkillsSection = () => {
    const techStack = [
      {
        name: "React",
        icon: <SiReact className="w-full h-full" />,
        color: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-full h-full" />,
        color: "#06B6D4",
      },
      {
        name: "Vue.js",
        icon: <SiVuedotjs className="w-full h-full" />,
        color: "#41B883",
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="w-full h-full" />,
        color: "#E535AB",
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-full h-full" />,
        color: "#339933",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-full h-full" />,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-full h-full" />,
        color: "#F7DF1E",
      },
      {
        name: "shadcn/ui",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full"
            fill="currentColor"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13v6h2v-6h-2zm0 8v2h2v-2h-2z" />
          </svg>
        ),
        color: "#FFFFFF",
      },
    ];

    return (
      
      <section className=" h-screen py-30 bg-white dark:bg-slate-950" id="skills">
        <div className="container mx-auto px-4 max-w-full overflow-hidden">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              Tech Stacks
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tools and technologies I wield to craft exceptional digital
              experiences
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative group max-w-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-red-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

                <div className="relative h-full bg-slate-50 dark:bg-slate-900 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {tech.name}
                  </h3>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Floating Badges (Decorative) */}
          <div className="hidden lg:flex justify-center gap-4 mt-16 opacity-30">
            {techStack.map((tech, index) => (
              <motion.div
                key={`floating-${tech.name}`}
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
                style={{ color: tech.color }}
              >
                <div className="w-8 h-8">{tech.icon}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <section id= "home" className=" pt-32 md:pt-24 min-h-screen flex items-center bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Text Content - Animates from left */}
            <motion.div
              className="md:w-1/2 text-center md:text-left md:pl-12 lg:pl-16"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <div className="mb-6 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                  Hi, I&apos;m
                </h1>
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">
                  Biyash Shrestha
                </h2>
                <div className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                  I&apos;m a{" "}
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      2000,
                      "Web Developer",
                      2000,
                      "Tech Enthusiast",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-red-500"
                  />
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                Turning ideas into interactive web experiences. Specializing in
                modern full stack development with a focus on user-centric
                design.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start space-x-6 mb-8">
                <a
                  href="https://github.com/biyash-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-1 transition-transform duration-300"
                >
                  <Github className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-red-500" />
                </a>
                <a
                  href="https://www.linkedin.com/in/biyash-shrestha-375593278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-1 transition-transform duration-300"
                >
                  <Linkedin className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-red-500" />
                </a>
                <a
                  href="https://www.instagram.com/biyash10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-1 transition-transform duration-300"
                >
                  <Instagram className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-red-500" />
                </a>
              </div>

              <Button
                size="lg" onClick = {handleDownloadCV}
                className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-purple-600 hover:to-red-500 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Download CV
              </Button>
            </motion.div>

            {/* Right Image Content - Animates from right */}
            <motion.div
              className="md:w-1/2 mt-12 md:mt-0 w-full"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 rounded-full blur-lg opacity-30 animate-pulse" />
                <div className="relative rounded-full overflow-hidden border-8 border-gray-200 dark:border-slate-800 aspect-square">
                  <Image
                    src="/assets/myphoto3.png"
                    alt="Biyash Shrestha"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        <section id = "about" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Profile Image */}
              <motion.div
                className="relative group max-w-md max-h-md mx-auto"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                viewport={{once:false}}
                transition={{ duration: 0.8, ease: "easeIn" }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <Image
                  src="/assets/myphoto4.png"
                  alt="Biyash Shrestha"
                  width={500}
                  height={400}

                  className=" md:block hidden rounded-2xl border-4 border-white dark:border-slate-800 shadow-xl"
                />
              </motion.div>

              {/* Right Side - About Content */}
              <motion.div
                className="space-y-6"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                viewport={{once:false}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Passionate Full Stack Developer with expertise in modern web
                  technologies. I specialize in creating robust, scalable
                  applications with intuitive user interfaces. With 2+ years of
                  experience, I bridge the gap between design and technical
                  implementation.
                </p>

                {/* Experience Timeline */}
                <div className="space-y-6">
                  {/* Full Stack Development */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-full">
                      <Code2 className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Full Stack Development
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Proficient in React, Next.js, Node.js, and modern web
                        frameworks.
                      </p>
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-500/10 rounded-full">
                      <Briefcase className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Professional Experience
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Associate Software Engineer at Peak Voyage (4 months).
                      </p>
                    </div>
                  </div>

                  {/* Education & Certifications */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-full">
                      <GraduationCap className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Education & Certifications
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        BE in Computer Science | Certified AWS Developer.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      {/* Skills section */}
      <SkillsSection id = "skills" />


      {/* project section */}

      <section id= "projects" className="py-20 bg-slate-50 dark:bg-slate-950" >
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A showcase of my technical prowess through real-world applications
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Food Delivery App",
          description: "Full-stack food ordering platform with real-time tracking",
          image: "/assets/fooddelivery.jpg",
          live: "https://resturant-frontend-seven.vercel.app/",
          github: "https://github.com/biyash-1/resturant_frontend.git"
        },
        {
          title: "Real-Time Chat",
          description: "Socket.io based messaging app with E2E encryption",
          image: "/assets/bg.jpg",
          live: "https://real-time-chat-app-bay.vercel.app/ ",
          github: "https://github.com/biyash-1/Real_time-chat-app.git"
        },
        {
          title: "Expense Tracker",
          description: "Financial management tool with analytics dashboard",
          image: "/assets/expense.jpg",
          live: "https://expense-tracker-application-16vn.vercel.app/",
          github: "https://github.com/biyash-1/Expense-tracker-application.git"
        },
        {
          title: "Quiz Platform",
          description: "Interactive quiz system with leaderboards",
          image: "/assets/quiz.jpg",
          live: "https://quiz-app-qmw9.vercel.app/",
          github: "https://github.com/biyash-1/Quiz_app.git"
        },
        {
          title: "Weather Forecast",
          description: "Live weather updates with predictive analytics",
          image: "/assets/weather.jpeg",
          live: "https://weather-app-4uun.vercel.app/",
          github: "https://github.com/biyash-1/Weather_app.git"
        },
        {
          title: "Text Utilities",
          description: "Advanced text manipulation toolkit",
          image: "/assets/textutils.png",
          live: "https://text-utlis-phi.vercel.app/",
          github: "https://github.com/biyash-1/text_utlis.git"
        },
      ].map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, delay: index * 0.1 }}
          className=" w-full group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          
          <div className="h-54 relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={400}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            
            <div className="flex gap-3">
              <a
                href={project.live.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-red-500 text-white rounded-lg hover:from-red-500 hover:to-purple-600 transition-all duration-300"
               
              >
                <span>Live Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Floating Decorations */}
    <div className="hidden lg:flex justify-center gap-6 mt-16 opacity-20">
      {[SiReact, SiTailwindcss, SiNodedotjs, SiTypescript, SiGraphql, SiVuedotjs].map((Icon, index) => (
        <motion.div
          key={index}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
          className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl"
        >
          <Icon className="text-purple-500" />
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="py-20 bg-white dark:bg-slate-950" id="contact">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Let's connect! Whether for opportunities, collaborations, or just a friendly chat.
      </motion.p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      {/* Left Side - Contact Form */}
      <motion.div
        className="space-y-6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your email"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Your message..."
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-red-500 hover:from-red-500 hover:to-purple-600 text-white rounded-lg px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </form>
      </motion.div>

      {/* Right Side - Social Links */}
      <motion.div
        className="space-y-8 text-center md:text-left"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Let's Connect Elsewhere
          </h3>
          
          <div className="flex flex-col space-y-6">
            <motion.a
              href="mailto:your.email@example.com"
              className="flex items-center justify-center md:justify-start space-x-4 p-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">bsstha21@gmail.com</span>
            </motion.a>

            <div className="flex justify-center md:justify-start space-x-6">
              {[
                { icon: <Github className="w-8 h-8" />, href: "https://github.com/biyash-1" },
                { icon: <Linkedin className="w-8 h-8" />, href: "https://www.linkedin.com/in/biyash-shrestha-375593278/" },
                { icon: <Instagram className="w-8 h-8" />, href: "https://www.instagram.com/biyash10/" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="hidden md:block opacity-50"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 className="w-24 h-24 mx-auto text-purple-500" />
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
    </>
  );
}
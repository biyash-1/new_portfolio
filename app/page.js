"use client"
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Eye,Users,Download,Send, Trophy, Calendar, Building, Award, Sparkles, Database, Server, Palette, Cpu, Code, GitBranch } from 'lucide-react';
import {
  Github,
  Linkedin,
  Instagram,
  Code2,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVercel,
 
  SiGithub,
  SiNextdotjs,
  SiPython,
  SiGitlab,
  SiJenkins,
} from "react-icons/si";

export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/myCv.pdf';
    link.download = 'myCv.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <Palette className="w-6 h-6 text-blue-500" />,
      gradient: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Vue.js", icon: <SiVuedotjs />, color: "#41B883" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "GraphQL", icon: <SiGraphql />, color: "#E535AB" },
      ]
    },
    {
      category: "Backend & Databases",
      icon: <Server className="w-6 h-6 text-purple-500" />,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "Python", icon: <SiPython />, color: "#3776AB" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "REST APIs", icon: <Code className="w-6 h-6" />, color: "#FF6B35" },
      ]
    },
    {
      category: "Tools & DevOps",
      icon: <Cpu className="w-6 h-6 text-green-500" />,
      gradient: "from-green-500 to-emerald-400",
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "#181717" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
        { name: "Vercel", icon: <SiVercel />, color: "#000000" },
        { name: "CI/CD", icon: <GitBranch className="w-6 h-6" />, color: "#4CAF50" },
        { name: "Jenkins", icon: <SiJenkins />, color: "#D24939" },
        { name: "GitLab", icon: <SiGitlab />, color: "#FC6D26" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Tech Stack & Skills
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Technologies I use to build amazing digital experiences
          </motion.p>
        </div>

        {/* Skills Categories - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="relative group"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}></div>
              
              <div className="relative h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 shadow-xl">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} bg-opacity-10`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Grid - Icons with Names */}
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: index * 0.05 + catIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative"
                    >
                      <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div 
                          className="text-3xl mb-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Colorful Floating Icons Background */}
     
      </div>
    </section>
  );
};
  // Helper function to get skill color
  const getSkillColor = (skillName) => {
    const colors = {
      'React': '#61DAFB',
      'Vue.js': '#41B883',
      'Next.js': '#000000',
      'JavaScript': '#F7DF1E',
      'TypeScript': '#3178C6',
      'HTML5': '#E34F26',
      'CSS3': '#1572B6',
      'Tailwind CSS': '#06B6D4',
      'GraphQL': '#E535AB',
      'Node.js': '#339933',
      'Express.js': '#000000',
      'Python': '#3776AB',
      'MongoDB': '#47A248',
      'PostgreSQL': '#336791',
      'Git': '#F05032',
      'GitHub': '#181717',
      'Docker': '#2496ED',
      'Vercel': '#000000',
      'VS Code': '#007ACC',
      'REST APIs': '#FF6B35',
      'CI/CD': '#4CAF50',
      'Jenkins': '#D24939',
      'GitLab': '#FC6D26',
    };
    return colors[skillName] || '#6B7280';
  };

  return (
    <>
      {/* Home Section - Keep as is */}
      <section id="home" className="pt-32 md:pt-24 min-h-screen flex items-center bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
                modern full stack development with a focus on user-centric design.
              </p>

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
                size="lg"
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-purple-600 hover:to-red-500 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Download CV
              </Button>
            </motion.div>

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

      {/* About Section - Keep as is */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative group max-w-md max-h-md mx-auto"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeIn" }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Image
                src="/assets/myphoto4.png"
                alt="Biyash Shrestha"
                width={500}
                height={400}
                className="md:block hidden rounded-2xl border-4 border-white dark:border-slate-800 shadow-xl"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
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

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-full">
                    <Code2 className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Full Stack Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Proficient in React, Next.js, Node.js, and modern web frameworks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-full">
                    <Briefcase className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Professional Experience</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Associate Software Engineer at Peak Voyage (4 months).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education & Certifications</h3>
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

      {/* Skills Section - Redesigned */}
      <SkillsSection />

      {/* Experience Section - Keep as is */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              Professional Experience
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My journey through professional development roles
            </motion.p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-red-500 opacity-30 hidden md:block"></div>

            {/* Experience 1 */}
            <motion.div
              className="relative mb-12 md:mb-20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-red-500 text-white px-4 py-2 rounded-full mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">Jun 2025 - Jul 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Freelance Frontend Developer
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    Sana Kisan Laghubitta Bittiya Sanstha
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    Internal Government Project
                  </p>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-red-500 border-4 border-white dark:border-slate-900 z-10"></div>

                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span>Built frontend for internal procurement management system using React.js & Tailwind CSS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span>Developed dynamic UI forms for modules including Requisition Form and Vendor Enlistment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span>Implemented role-based access control and API integration for form submissions</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">React.js</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">API Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

        
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span>Developed web applications using Next.js with responsive UI and performance optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span>Gained experience in state management, API integration, and Vercel deployment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span>Collaborated with team to deliver user-friendly, dynamic features</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm">Next.js</span>
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm">Vercel</span>
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm">Team Collaboration</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-purple-500 border-4 border-white dark:border-slate-900 z-10"></div>

                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-purple-600 text-white px-4 py-2 rounded-full mb-3">
                    <Building className="w-4 h-4" />
                    <span className="text-sm font-semibold">Aug 2024 - Nov 2024</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Full Stack Intern
                  </h3>
                  <p className="text-red-600 dark:text-red-400 font-medium">
                    Peak Voyage
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    4 Months Internship
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Keep as is */}
  <section id="achievements" className="py-20 bg-white dark:bg-slate-950">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Achievements & Certifications
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Recognitions that highlight my dedication and skills
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* ISTN Hackathon Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800/30">
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <Users className="w-6 h-6 text-yellow-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            ISTN Hackathon Winner
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Champion of the ISTN Hackathon with a team of 4, where we developed a comprehensive Accident Report System that demonstrated exceptional problem-solving skills and innovative thinking.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-yellow-700 dark:text-yellow-300">
              <Users className="w-4 h-4" />
              <span className="font-semibold">Team of 4 • Accident Report System</span>
            </div>
            <a
              href="/certificates/hackathon-certificate.pdf" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 transition-colors flex items-center gap-1"
            >
              <Eye className="w-4 h-4" />
              <span>View</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Meta Front-End Certification Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/30">
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z" />
              </svg>
            </div>
            <Code2 className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            Meta Front-End Developer
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Certified by Meta in Developing Front-End Apps with React through Coursera. Mastered modern React development, component architecture, state management, and responsive UI design.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
              </svg>
              <span className="font-semibold">Meta Certified • React</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://coursera.org/share/af104a8cad745ebde0f5b1db7c159aef" // Replace with actual Coursera link
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                <Eye className="w-4 h-4" />
                <span>Verify</span>
              </a>
              <a
                href="/assets/metafrontend.png" // Replace with actual PDF link
                download
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                <Download className="w-4 h-4" />
                <span>PDF</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Meta Back-End Certification Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800/30">
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
              <Server className="w-8 h-8 text-white" />
            </div>
            <Database className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            Meta Back-End Developer
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Certified by Meta in Developing Back-End Apps with Node.js and Express through Coursera. Gained expertise in RESTful API design, authentication, database integration, and server-side logic.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-300">
              <Server className="w-4 h-4" />
              <span className="font-semibold">Meta Certified • Node.js </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://coursera.org/share/7121c37c8fe37438d4c742a184767daa" // Replace with actual Coursera link
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors flex items-center gap-1"
              >
                <Eye className="w-4 h-4" />
                <span>Verify</span>
              </a>
              <a
                href="/assets/metabackend.png " // Replace with actual PDF link
                download
                className="text-sm text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors flex items-center gap-1"
              >
                <Download className="w-4 h-4" />
                <span>PDF</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Projects Section - Keep as is */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950">
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
                title: "AI Pro Tool",
                description: "An AI-powered tool with text summarization, Q&A, image generation, and translation features — built to boost creativity and productivity.",
                image: "/assets/ai-pro-tool.jpg",
                live: "https://ai-pro-tool.vercel.app/",
                github: "https://github.com/biyash-1/AI-pro-tool.git"
              },
              {
                title: "Netlinker",
                description: "A social media platform with posts, comments, and real-time chatting",
                image: "/assets/netlinker.jpg",
                live: "https://netlinker-woad.vercel.app/",
                github: "https://github.com/biyash-1/Netlinker.git"
              },
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
                live: "https://real-time-chat-app-bay.vercel.app/",
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
                transition={{ duration: 1.2, delay: index * 0.1 }}
                className="w-full group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300"
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

      {/* Contact Section - Keep as is */}
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
                    href="mailto:bsstha21@gmail.com"
                    className="flex items-center justify-center md:justify-start space-x-4 p-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-red-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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
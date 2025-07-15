"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function ExperienceAndEducationSection() {

  // Combined and ordered data for a single timeline
  const timelineData = [
    {
      type: "education",
      title: "Technical Bachelor Degree in Web Development",
      institution: "COLEGIO TÉCNICO PROFESIONAL DE PAVAS",
      date: "2021 - 2023",
      description: ["Completed a technical bachelor's degree focused on web development, gaining foundational knowledge in front-end and back-end technologies."],
      iconBg: "#1F2937", // Dark gray (like card background)
    },
    {
      type: "project",
      title: "Sistema de Votaciones",
      date: "2022",
      description: ["Implemented an election voting system as part of an educational project, focusing on secure data handling and user authentication."],
      iconBg: "#008080", // Turquoise
    },
    {
      type: "experience",
      title: "Frontend Developer (Intern)",
      company: "AUTO MERCADO S.A",
      date: "July 2022",
      description: ["Gained practical experience in front-end development within a corporate environment, contributing to real-world applications."],
      iconBg: "#1F2937",
    },
    {
      type: "experience",
      title: "Full Stack Developer (Intern)",
      company: "AUTO MERCADO S.A",
      date: "October - December 2023",
      description: ["Expanded skills to full-stack development, working on both front-end and back-end aspects of projects."],
      iconBg: "#008080",
    },
    {
      type: "education",
      title: "Software Engineering",
      institution: "UNIVERSIDAD CENFOTEC",
      date: "2024 - Present",
      description: ["Currently pursuing a degree in Software Engineering, deepening understanding of advanced software development principles and practices."],
      iconBg: "#008080",
    },
    {
      type: "project",
      title: "Ecosecha",
      date: "C1 2024",
      description: ["Developed a platform for sustainable farming practices, including features for crop management and environmental monitoring."],
      iconBg: "#1F2937",
    },
    {
      type: "project",
      title: "Javafy",
      date: "C2 2024",
      description: ["Built a Java-based application for [brief description of Javafy's purpose], demonstrating proficiency in backend development with Java."],
      iconBg: "#008080",
    },
    {
      type: "project",
      title: "Healthtag",
      date: "C2 2024",
      description: ["Created a health-focused application to track personal metrics, with a focus on user-friendly interface and data visualization."],
      iconBg: "#1F2937",
    },
    {
      type: "project",
      title: "Sistema de Multas de Tráfico (SMT)",
      date: "C3 2024",
      description: ["Designed and implemented a traffic fine management system, integrating database functionalities for efficient record keeping."],
      iconBg: "#008080",
    },
    {
      type: "project",
      title: "CenfoScore",
      date: "C1 2025",
      description: ["Developed a comprehensive scoring system, utilizing modern web technologies for a responsive user interface."],
      iconBg: "#1F2937",
    },
  ];

  // Component to render a timeline element
  const TimelineCard = ({ data, index }) => (
    <VerticalTimelineElement
      contentStyle={{
        background: '#008080',
        color: '#F9FAFB',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4), 0 6px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '0.5rem',
        padding: '1.5rem',
      }}
      contentArrowStyle={{
        borderRight: '7px solid #008080',
      }}
      date={
        <h3 className={`text-gray-400 text-sm font-bold ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
          {data.date}
        </h3>
      }
      iconStyle={{ background: data.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {data.type === "experience" ? (
            <FaBriefcase size={20} className="text-white" />
          ) : data.type === "education" ? (
            <FaGraduationCap size={20} className="text-white" />
          ) : (
            <FaCode size={20} className="text-white" />
          )}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-xl font-semibold mb-2">
          {data.title}
        </h3>
        {data.type !== "project" && (
          <p className="text-gray-200 text-md mb-1" style={{ margin: 0 }}>
            {data.company || data.institution}
          </p>
        )}
        {data.description && data.description.length > 0 && (
          <ul className="list-disc list-inside text-sm text-gray-100 mt-4 pl-4">
            {data.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </VerticalTimelineElement>
  );

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <style jsx global>{`
        .vertical-timeline-element--left .vertical-timeline-element-date {
          right: calc(50% - 10px) !important;
          left: auto !important;
          text-align: left !important;
        }
        .vertical-timeline-element--right .vertical-timeline-element-date {
          left: calc(50% - 10px) !important;
          right: auto !important;
          text-align: right !important;
        }
        .vertical-timeline-element-date {
          font-size: 0.875rem;
          font-weight: 700;
          color: #9CA3AF;
          white-space: nowrap;
        }
        .vertical-timeline-element-content ul {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <motion.div>
          <p className="text-gray-400 uppercase text-sm mb-2">MY JOURNEY SO FAR</p>
          <h1 className="text-5xl font-bold text-white mb-8">My Journey.  </h1>
        </motion.div>

        <div className="mt-12 flex flex-col">
          <VerticalTimeline>
            {timelineData.map((data, index) => (
              <TimelineCard key={index} data={data} index={index} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
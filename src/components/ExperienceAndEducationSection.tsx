"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface TimelineItem {
  type: string;
  title: string;
  institution?: string;
  company?: string;
  date: string;
  description: string[];
  iconBg: string;
}

interface TimelineCardProps {
  data: TimelineItem;
  index: number;
}

export default function ExperienceAndEducationSection() {
  const timelineData: TimelineItem[] = [
    {
      type: "education",
      title: "Technical Bachelor Degree in Web Development",
      institution: "Colegio Técnico Profesional de Pavas",
      date: "2021 - 2023",
      description: [
        "Completed a technical bachelor's degree specializing in web development, acquiring strong foundations in front-end and back-end technologies.",
      ],
      iconBg: "#1F2937",
    },
    {
      type: "project",
      title: "Voting System",
      date: "2022",
      description: [
        "Developed an application to streamline student council elections, significantly reducing paper usage, costs, and election times. Built with C#, ADO.NET, and SQL Server.",
      ],
      iconBg: "#008080",
    },
    {
      type: "experience",
      title: "Frontend Developer (Intern)",
      company: "Auto Mercado S.A.",
      date: "July 2022",
      description: [
        "Gained hands-on experience developing user interfaces in a corporate environment, collaborating on real-world projects. Developed with HTML, CSS and JavaScript.",
      ],
      iconBg: "#1F2937",
    },
    {
      type: "experience",
      title: "Full Stack Developer (Intern)",
      company: "Auto Mercado S.A.",
      date: "October - December 2023",
      description: [
        "Independently developed a complete web application from scratch, including database architecture, backend and frontend interface. The solution is currently in production and actively used by the company. Developed with .NET, SQL Server, Azure.",
      ],
      iconBg: "#008080",
    },
    {
      type: "education",
      title: "Software Engineering",
      institution: "Universidad Cenfotec",
      date: "2024 - Present",
      description: [
        "Currently pursuing a degree in Software Engineering, focusing on advanced software architecture, cloud computing, and agile methodologies.",
      ],
      iconBg: "#008080",
    },
    {
      type: "project",
      title: "Ecosecha",
      date: "Q1 2024",
      description: [
        "Designed a platform to modernize Costa Rican farmers' markets, allowing vendors to showcase their produce online and enabling customers to shop seamlessly. Built with Node.js and MongoDB.",
      ],
      iconBg: "#1F2937",
    },
    {
      type: "project",
      title: "JavaFy",
      date: "Q2 2024",
      description: [
        "Developed a desktop music streaming application inspired by Spotify, featuring song playback and library management. Built with Java Swing and MySQL.",
      ],
      iconBg: "#008080",
    },
    {
      type: "project",
      title: "HealthTag",
      date: "Q2 2024",
      description: [
        "Created a health-focused system for at-risk individuals using NFC technology. Scanning a tag provided access to critical medical data, medications, and emergency contacts. Developed with .NET, SQL Server, Bootstrap and JavaScript.",
      ],
      iconBg: "#1F2937",
    },
    {
      type: "project",
      title: "Traffic Fines Management System (SMT)",
      date: "Q3 2024",
      description: [
        "Built a comprehensive traffic fines management system supporting multiple user roles: clients, officers, administrators, and super admins. Integrated AI-based vehicle plate recognition using Python. Utilized .NET (ADO.NET, Entity Framework), React Vite, Tailwind, SQL Server, and MongoDB.",
      ],
      iconBg: "#008080",
    },
    {
      type: "project",
      title: "CenfoScore",
      date: "Q1 2025",
      description: [
        "Developed a platform for students to rate and provide feedback on professors, helping peers make informed decisions when selecting courses. Built with FastAPI (Python), React, Next.js, Tailwind and TypeScript.",
      ],
      iconBg: "#1F2937",
    },
  ];

  const TimelineCard: React.FC<TimelineCardProps> = ({ data, index }) => (
    <VerticalTimelineElement
      contentStyle={{
        background: "#008080",
        color: "#F9FAFB",
        boxShadow:
          "0 10px 20px rgba(0, 0, 0, 0.4), 0 6px 6px rgba(0, 0, 0, 0.2)",
        borderRadius: "0.5rem",
        padding: "1.5rem",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #008080",
      }}
      date={
        <h3
          className={`text-gray-400 text-sm font-bold ${
            index % 2 === 0 ? "text-left" : "text-right"
          }`}
        >
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
        <h3 className="text-white text-xl font-semibold mb-2">{data.title}</h3>
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
          color: #9ca3af;
          white-space: nowrap;
        }
        .vertical-timeline-element-content ul {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <motion.div>
          <p className="text-gray-400 uppercase text-sm mb-2">
            MY JOURNEY SO FAR
          </p>
          <h1 className="text-5xl font-bold text-white mb-8">My Journey.</h1>
        </motion.div>

        <div className="mt-12 flex flex-col">
          <VerticalTimeline>
            {timelineData
              .slice()
              .reverse()
              .map((data, index) => (
                <TimelineCard key={index} data={data} index={index} />
              ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

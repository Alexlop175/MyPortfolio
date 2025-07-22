"use client";

import React from "react";
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
    description: [],
    iconBg: "#1F2937",
  },
  {
    type: "project",
    title: "Voting System",
    institution: "Colegio Técnico Profesional de Pavas",
    date: "2022",
    description: [],
    iconBg: "#008080",
  },
  {
    type: "experience",
    title: "Frontend Developer (Intern)",
    company: "Auto Mercado S.A.",
    date: "July 2022",
    description: [],
    iconBg: "#1F2937",
  },
    {
    type: "project",
    title: "DriveU",
    institution: "Colegio Técnico Profesional de Pavas",
    date: "2023",
    description: [],
    iconBg: "#1F2937",
  },
  {
    type: "experience",
    title: "Full Stack Developer (Intern)",
    company: "Auto Mercado S.A.",
    date: "October - December 2023",
    description: [],
    iconBg: "#008080",
  },
  {
    type: "education",
    title: "Software Engineering",
    institution: "Universidad Cenfotec",
    date: "2024 - Present",
    description: [],
    iconBg: "#008080",
  },
  {
    type: "project",
    title: "Ecosecha",
    institution: "Universidad Cenfotec",
    date: "Q1 2024",
    description: [],
    iconBg: "#1F2937",
  },
    {
    type: "project",
    title: "Volatir",
    institution: "Freelancer ",
    date: "Q2 2024",
    description: [],
    iconBg: "#1F2937",
  },
    {
    type: "project",
    title: "Fairy Closet",
    institution: "Freelancer",
    date: "Q2 2024",
    description: [],
    iconBg: "#1F2937",
  },
  {
    type: "project",
    title: "JavaFy",
    institution: "Universidad Cenfotec",
    date: "Q2 2024",
    description: [],
    iconBg: "#008080",
  },
  {
    type: "project",
    title: "HealthTag",
    institution: "Universidad Cenfotec",
    date: "Q2 2024",
    description: [],
    iconBg: "#1F2937",
  },
  {
    type: "project",
    title: "Traffic Fines Management System (SMT)",
    institution: "Universidad Cenfotec",
    date: "Q3 2024",
    description: [],
    iconBg: "#008080",
  },
  {
    type: "project",
    title: "CenfoScore",
    institution: "Universidad Cenfotec",
    date: "Q1 2025",
    description: [],
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
        {(data.company || data.institution) && (
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
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
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
        <div>
          <p className="text-gray-400 uppercase text-sm mb-2">
            MY JOURNEY SO FAR
          </p>
          <h1 className="text-5xl font-bold text-white mb-8">My Journey.</h1>
        </div>

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

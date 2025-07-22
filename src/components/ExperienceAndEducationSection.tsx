"use client";

import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface TimelineItem {
  type: "education" | "experience";
  title: string;
  institution?: string;
  company?: string;
  date: string;
  description?: string[];
  iconBg: string;
}

interface TimelineCardProps {
  data: TimelineItem;
  index: number;
}

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
    contentArrowStyle={{ borderRight: "7px solid #008080" }}
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
        ) : (
          <FaGraduationCap size={20} className="text-white" />
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
    </div>
  </VerticalTimelineElement>
);

export default function ExperienceAndEducationSection() {
  const experienceData: TimelineItem[] = [
    {
      type: "experience",
      title: "Full Stack Developer (Intern)",
      company: "Auto Mercado S.A.",
      date: "October – December 2023",
      iconBg: "#008080",
    },
    {
      type: "experience",
      title: "Frontend Developer (Intern)",
      company: "Auto Mercado S.A.",
      date: "July 2022",
      iconBg: "#1F2937",
    },
  ];

  const educationData: TimelineItem[] = [
    {
      type: "education",
      title: "Bachelor's Degree in Software Engineering",
      institution: "Universidad Cenfotec",
      date: "2024 – Present",
      iconBg: "#008080",
    },
    {
      type: "education",
      title: "Technical High School Degree in Web Development",
      institution: "Colegio Técnico Profesional de Pavas",
      date: "2021 – 2023",
      iconBg: "#1F2937",
    },
  ];

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
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-400 uppercase text-sm mb-2">Experience</p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <VerticalTimeline>
            {experienceData.map((data, index) => (
              <TimelineCard key={index} data={data} index={index} />
            ))}
          </VerticalTimeline>
        </div>

        <div>
          <p className="text-gray-400 uppercase text-sm mb-2">Education</p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Academic Background
          </h2>
          <VerticalTimeline>
            {educationData.map((data, index) => (
              <TimelineCard key={index} data={data} index={index} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

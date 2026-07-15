import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    title: "Hello World",
    role: "Started learning programming",
    year: "2022",
  },
  {
    title: "Improve Coding",
    role: "Sharpening programming skills through practice and self-study",
    year: "2023 - 2024",
  },
  {
    title: "Mobile Legends",
    role: "School E-Sports team participation",
    year: "2023 - 2024",
  },
  {
    title: "ISITE Representative",
    role: "Student representative for Information Systems and Technology",
    year: "2023 - 2024",
  },
  {
    title: "Learning Networking",
    role: "Network fundamentals, routing, and configuration",
    year: "2024",
  },
  {
    title: "AI Ads Specialist",
    role: "Agricultural supply ecommerce client — produced 1–4 AI-generated video ads per day (AI voice-over, avatar video, editing)",
    year: "Jul. 2024 - Jan. 2025",
    highlight: true,
  },
  {
    title: "OJT Completed",
    role: "300 hours — SSS Shaw Blvd., Mandaluyong City",
    year: "2026",
  },
  {
    title: "AI Ads Specialist (Freelance)",
    role: "Self-employed — AI-generated video and static ads for ecommerce clients on Meta, Shopee & TikTok Shop",
    year: "Nov. 2025 - Present",
    highlight: true,
  }
];

const Timeline = () => {
  return (
    <div className="experience-list">
      {/* Reverse array to show newest at the top, just like the reference */}
      {[...timelineData].reverse().map((item, index) => (
        <div key={index} className={`exp-item ${item.highlight ? 'exp-item-highlight' : ''}`}>
          {/* Using active-dot for the very first item (newest) */}
          <div className={`exp-dot ${index === 0 ? 'active-dot' : ''} ${item.highlight ? 'exp-dot-highlight' : ''}`}></div>
          <div className="exp-content">
            <h3 className="exp-title">
              {item.title}
              {item.highlight && <span className="exp-badge">AI Ads</span>}
            </h3>
            <p className="exp-company">{item.role}</p>
          </div>
          <span className="exp-year">{item.year}</span>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

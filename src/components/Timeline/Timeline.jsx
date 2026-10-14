import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    title: "AI Video Specialist",
    role: "Agricultural supply ecommerce client — produced 1–4 AI-generated video ads per day (AI voice-over, avatar video, editing)",
    year: "Jul. 2024 - Jan. 2025",
    highlight: true,
  },
  {
    title: "AI Video Specialist (Freelance)",
    role: "Self-employed — AI UGC, VSL, and direct-response video ads for ecommerce clients on Meta, TikTok & Shopee",
    year: "Nov. 2025 - Present",
    highlight: true,
  },
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

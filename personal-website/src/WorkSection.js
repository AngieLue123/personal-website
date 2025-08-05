import React from 'react';
import './WorkSection.css';

const workExperience = [
    { logo: '🌐', company: 'Meta', role: 'Business Engineer', year: 'Summer 2024' },
    { logo: '🦋', company: 'General Catalyst Venture Fellows', role: 'Managing Director', year: 'Nov 2022 – Present' },
    { logo: '📋', company: 'Papaya', role: 'Product Manager', year: 'Apr – Jun 2024' },
    { logo: '🎵', company: 'Mantis VC', role: 'Venture Intern', year: 'Apr – Oct 2023' },
    { logo: '💻', company: 'Mercury', role: 'Software Engineer', year: 'Jun – Sep 2023' },
    { logo: '💳', company: 'PayPal', role: 'Software Engineer', year: 'Jun – Sep 2022' },
    { logo: '🚲', company: 'Asana, Lyft, NVIDIA, Oracle', role: 'Strategy Consultant', year: 'Jan – Sep 2022' },
    { logo: '🕒', company: 'Checkmate', role: 'Software Engineer', year: 'Jan – Mar 2024' },
    { logo: '📡', company: 'Keysight', role: 'Software Engineer', year: 'Dec 2021 – Jun 2022' },
  ];

const WorkSection = () => {
  return (
    <section className="work-section">
      <h2>Experience</h2>
      <ul className="work-list">
        {workExperience.map((job, index) => (
          <li key={index} className="work-item">
            <div className="work-logo">{job.logo}</div>
            <div className="work-details">
              <span className="work-company">{job.company}</span>
              <span className="work-role">{job.role}</span>
            </div>
            <span className="work-year">{job.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkSection;

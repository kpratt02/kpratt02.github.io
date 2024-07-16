"use client"
import React, { useState } from 'react';
import './globals.css';
import skinimage from "../../public/BeneathOurSkins.png";
import howDoing from "../../public/howarewedoing.png";
import testimony from "../../public/testimonyAI.png";
import upkeepImage from "../../public/upkeep.jpg";
import marathon from "../../public/marathon.jpg";
import camino from "../../public/camino.jpg";
import guitar from "../../public/guitar.jpg";

const projects = [
  { 
    description: 'Co-founder of a platform to improve access to public resources and benefits for older adults and their caregivers.', 
    title: "Upkeep Care",
    type: 'Project', 
    link: 'https://ysph.yale.edu/news-article/upkeep-care-awarded-2024-thorne-prize-for-innovation/', 
    backgroundImage: upkeepImage.src
  },
  { 
    description: 'Digital platform lead for the Beneath Our Skin project, which "used digital storytelling and visual and performing arts as culturally relevant methods to gather and share stories from Black Vermonters about their COVID-19 vaccination choices and experiences."', 
    title:"Beneath Our Skin Interim Report",
    type: 'Research', 
    link: 'https://www.clemmonsfamilyfarm.org/beneath-our-skin-interim-report.html', 
    backgroundImage: skinimage.src
  },
  { 
    description: 'Secondary author and research team member on this project, which reports "findings and recommendations generated from the refinement and use of a structured tool for CFFs Wellness Check-ins with artists who are members of the Vermont African-American/African Diaspora Artists Network"', 
    title: "How Are We Doing?",
    type: 'Research', 
    link: '#', 
    backgroundImage: howDoing.src
  },
  { 
    description: 'Food Systems policy researcher for this report, which "equips policymakers with practical solutions designed to accelerate SDG implementation and to respond to the planetary emergency"', 
    title: "SDGs for All: System Dynamics Policy Analysis",
    type: 'Publication', 
    link: 'https://feps-europe.eu/publication/sdgs-for-all-strategic-scenarios/', 
    backgroundImage: skinimage.src
  },
  { 
    description: 'Used ArcGIS Pro to analyse the impact of oil pipelines on health outcomes, land, and water, particularly tribal lands in the Dakotas.', 
    title: 'Impact of Oil Pipelines on Land and Water',
    type: 'Final Project', 
    link: 'https://drive.google.com/file/d/1Se1wvE-7JZbcfpEiqNoZrBOu-hgkWkmH/view', 
    backgroundImage: skinimage.src
  },
  { 
    description: 'Co-authored testimony in support of AI regulation in Connecticut. Further testimony examples available; please email me to request!', 
    title: "Testimony in support of CT S.B. 1103 (2023)",
    type: 'Publication', 
    link: 'https://www.cga.ct.gov/2023/gldata/TMY/2023SB-01103-R000228-Werner,%20Michael,%20Lead%20Aging%20Policy%20Analyst-CWCSEO-Supports-TMY.PDF', 
    backgroundImage: testimony.src
  },
  { 
    description: 'Walked over 800 kms in Northern Spain on a historical pilgimage. Have also completed the Long Trail, 102/115 Northeast High Peaks, and the West Highland Way', 
    title: "Hiking",
    type: 'Passion', 
    backgroundImage: camino.src
  },
  { 
    description: 'Ran the Boston Marathon in spring of 2019, and have also completed several half marathons, including beating a steam train in Essex, CT this last year!', 
    title: "Running",
    type: 'Passion', 
    backgroundImage: marathon.src
  },
  { 
    description: 'Bluegrass guitar player, singer, and general enthusiast', 
    title: "Music",
    type: 'Passion', 
    backgroundImage: guitar.src
  }
  // Add more projects as needed
];

const ProjectsAndPublications = () => {
  return (
    <section id="projects-publications">
      <div className="container">
        <h2>Projects, Publications, and Passions</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              type={project.type}
              link={project.link}
              backgroundImage={project.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndPublications;

const ProjectCard = ({ title, description, type, link, backgroundImage }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`project-card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="front">
        <div className="card-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="card-title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
      <div className="back">
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View More</a>
      </div>
    </div>
  );
};
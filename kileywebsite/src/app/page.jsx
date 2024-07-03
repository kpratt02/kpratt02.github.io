import Image from "next/image";
import styles from "./page.module.css";
import "./sidebar.css";
import Sidebar from "./sidebar.jsx";
import faceImage from "../../public/myface.jpeg";
import twilioIcon from "../../public/twilio.png";
import arcGIS from "../../public/arcgisicon.png";
import officeIcon from "../../public/office.png";
import serviceNow from "../../public/servicenow.png";
import ProjectsAndPublications from "./projects.jsx"

export default function Home() {
  return (
    <div>
          <Sidebar />
          <section id="about">
            <div className="container">
              <div className="about-content">
                <div className="left-column">
                  <img src={faceImage.src} alt="A picture of Kiley, smiling" />
                  <h1>Kiley Pratt</h1>
                </div>
                <div className="right-column">
                  <p>Thanks for visiting my website! I'm a recent masters graduate from Yale School of Public Health, with concentrations in Health Policy & Management and Climate Change and Health. Currently working on creating AI public health solutions, combatting health impacts of climate change, and consuming a lot of real maple syrup.</p>
                  <h4>Contact Information</h4>
                  <p>Email: kiley.pratt@yale.edu</p>
                  <p>Phone: (802) 825-8972</p>
                  <p>Currently based in: New Haven, Connecticut</p>
                </div>
              </div>
            </div>
          </section>

            <div className="experience-education">
              <section id="experience">
                <div className="container">
                  <h2>Experience</h2>
                  <div className="job">
                    <div className="timeline">
                      <h3>Community Outcomes and Feedback Advisor, Digital Platform Advisor</h3>
                      <h4>Clemmons Family Farm</h4>
                      <p>Jan 2021 - May 2024</p>
                      <p>Conducted quantitative evaluation of programmatic impact, monitoring and evaluation techniques, and data methods. Developed a digital technology package for collection, analysis, and dissemination of stories as data sources</p>
                    </div>
                    <div className="timeline">
                      <h3>Stolwijk Summer Research Fellow</h3>
                      <h4>Johannah Bernstein / Earth4All</h4>
                      <p>May 2023 - Sept 2023</p>
                      <p>Researched and presented the most important policy changes to achieve SDG targets, using outputs of a system dynamics model</p>
                      <a href="https://ysph.yale.edu/news-article/internship-spotlight-kiley-pratt-mph-24-health-policy-climate-change-and-health-concentration/" target="_blank">Interview about my experience</a>
                    </div>
                    <div className="timeline">
                      <h3>Project Manager, Operations Supervisor, Epidemic Intelligence Unit Associate</h3>
                      <h4>Partners in Health, Community Tracing Collaborative</h4>
                      <p>Oct 2020 - Jan 2022</p>
                      <p>Supported over 2.6 million calls by designing, implementing, and monitoring workflows for 500+ contact tracers, as well as leading 70+ staff in the EIU and serving as connector of Local Health Liaisons and Outbreak Investigators</p>
                      <a href="https://www.mass.gov/info-details/covid-19-community-tracing-collaborative-ctc" target="_blank">More information about the CTC</a>
                    </div>
                    <div className="timeline">
                      <h3>Associate Product Manager, ServiceNow Integration, JSUI and Search API</h3>
                      <h4>Coveo</h4>
                      <p>May 2019 - Oct 2020</p>
                      <p>Oversaw 3 development teams through product development cycles and collaborated with UX designers, marketing, sales, and product specialist teams to define roadmap, improvements and priorities</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="education">
                <div className="container">
                  <h2>Education</h2>
                  <div className="education-item">
                    <div className="timeline">
                      <h3>Master of Public Health</h3>
                      <h4>Yale School of Public Health</h4>
                      <p>2022 - 2024</p>
                      <p>Concentrations: Health Policy and Management, Climate Change and Health</p>
                      <p>Honors and Fellowships: Stolwijk Fellow, CBEY 2050, Solomon Center, Hortsmann Scholar</p>
                      <p>Student Leadership: Teaching Fellow for courses in Health Policy, HPM Practicum, and Methods in Health Services Research. President of Students for Sustainability and Waste Reduction at YSPH (SWAY), and member of Boosted FC Soccer Team</p>
                    </div>
                    <div className="timeline">
                      <h3>Bachelor of Science in Cognitive and Brain Sciences</h3>
                      <h4>Tufts University</h4>
                      <p>2015 - 2019</p>
                      <p>Minors: Computer Science, Food Systems and Nutrition</p>
                      <p>Honors and Fellowships: Magna Cum Laude, Honos Civicus, Psi Chi Society</p>
                    </div>
                    <div className="timeline">
                      <h3>French Language Immersion & Area Studies</h3>
                      <h4>Université de Nantes</h4>
                      <p>Spring 2018</p>
                      <p>Immersive French semester, with coursework focused on international and environmental policy</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
           
            <section id="skills">
            <div className="container">
              <h2>Skills</h2>
              <div className="skills-list">
                <div className="skill-item">
                  <img src={arcGIS.src} alt="ArcGIS Pro Icon" className="skill-icon" />
                  <span>ArcGIS Pro</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg" alt="C Icon" className="skill-icon" />
                  <span>C</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" alt="C++ Icon" className="skill-icon" />
                  <span>C++</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Git Icon" className="skill-icon"/>
                  <span>Git and GitHub</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML/CSS Icon" className="skill-icon" />
                  <span>HTML/CSS</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java Icon" className="skill-icon" />
                  <span>Java</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript Icon" className="skill-icon" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-plain.svg" alt="Jira/Atlassian Icon" className="skill-icon" />
                  <span>Jira/Atlassian</span>
                </div>
                <div className="skill-item">
                  <img src={officeIcon.src} alt="Microsoft Office Suite Icon" className="skill-icon" />
                  <span>Microsoft Office Suite</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" alt="Node.js Icon" className="skill-icon" />
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" alt="Python Icon" className="skill-icon" />
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Icon" className="skill-icon" />
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-plain.svg" alt="Salesforce Icon" className="skill-icon" />
                  <span>Salesforce</span>
                </div>
                <div className="skill-item">
                  <img src={serviceNow.src} alt="ServiceNow Icon" className="skill-icon" />
                  <span>ServiceNow</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-plain.svg" alt="SQL Icon" className="skill-icon" />
                  <span>SQL</span>
                </div>
                <div className="skill-item">
                  <img src={twilioIcon.src} alt="Twilio APIs Icon" className="skill-icon" />
                  <span>Twilio APIs</span>
                </div>
                <div className="skill-item">
                  <img src="https://icons.iconarchive.com/icons/wikipedia/flags/256/FR-France-Flag-icon.png" alt="French Flag" className="skill-icon" />
                  <span>Advanced-Intermediate French</span>
                </div>
                <div className="skill-item">
                  <img src="https://icons.iconarchive.com/icons/wikipedia/flags/256/NP-Nepal-Flag-icon.png" alt="Nepali Flag" className="skill-icon" />
                  <span>Conversational Nepali</span>
                </div>
              </div>
            </div>
          </section>

          <section id="projects">
            <ProjectsAndPublications />
          </section>
    </div>
  );
}

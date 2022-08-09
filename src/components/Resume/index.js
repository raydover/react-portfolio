import React from 'react'

const Resume = () => {
  return (
    <div className="main wrapper">
    <h2 className="nav-heading">Resume</h2>
    <div className="skills">
          <h3>Skills</h3>
          <hr className="line"></hr>

          <p>Skills: Front-End</p>
          <div className="skill-list">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
            </ul>
          </div>

          <p>Skills: Back-End</p>
          <div className="skill-list">
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
            </ul>
          </div>
        </div>

        <div className="education">
          <h3>Education</h3>
          <hr className="line"></hr>

          <div className="education-list">
            <div className="attended">
              <p>University of North Carolina at Charlotte</p>
            </div>

            <div className="content">
              <p>- Mechanical Engineering</p>
              <p>- Accounting</p>
            </div>
          </div>

          <div className="education-list">
            <div className="attended">
              <p>Central Piedmont Community College</p>
            </div>

            <div className="content">
              <p>- Arts</p>
              <p>- Photography</p>
            </div>
          </div>

          <div className="education-list">
            <div className="certificate">
              <p>University of North Carolina at Charlotte</p>
            </div>

            <div className="content">
              <p>- Coding BootCamp</p>
              <p>- Full-Stack Web Development</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Resume

// Skills.js
import React, { useState } from 'react';
import './styles.css'; // Import styles

const skillsData = [
  {
    id: 'skill1',
    name: 'Skill 1',
    projects: ['Project 1', 'Project 2', 'Project 3'],
  },
  {
    id: 'skill2',
    name: 'Skill 2',
    projects: ['Project A', 'Project B', 'Project C'],
  },
  {
    id: 'skill3',
    name: 'Skill 3',
    projects: ['Project X', 'Project Y', 'Project Z'],
  },
  // Add more skills as needed
];

const Skills = ({ selectedRating, handleRatingClick }) => {
  // State variables for project visibility
  const [showProjects, setShowProjects] = useState({});

  // Toggle function for project visibility
  const toggleProjects = (skillId) => {
    setShowProjects((prevShowProjects) => ({
      ...prevShowProjects,
      [skillId]: !prevShowProjects[skillId],
    }));
  };

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.name}</strong>
            <button
              className="transparent-button"
              onClick={() => toggleProjects(skill.id)}
            >
              {showProjects[skill.id] ? 'Hide Projects' : 'Show Projects'}
            </button>
            {showProjects[skill.id] && (
              <ul>
                {skill.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* Rating buttons */}
      <div>
        <h1>React</h1>
        <div className="rating-buttons">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              className={`rating-button ${selectedRating === rating ? 'selected' : ''}`}
              onClick={() => handleRatingClick(rating)}
            >
              {rating}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

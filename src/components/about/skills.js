
import React from 'react';
import styles from "./styles/skill.css";

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', proficiency: 'Advanced' },
    { name: 'React', proficiency: 'Advanced' },
    { name: 'Next.js', proficiency: 'Advanced' },
    { name: 'Python', proficiency: 'Intermediate' },
    { name: 'Java', proficiency: 'Advanced' },
    { name: 'SQL', proficiency: 'Advanced' },
    { name: 'Docker', proficiency: 'Intermediate' },
    { name: 'React Native', proficiency: 'Beginner' },
    { name: 'C#', proficiency: 'Intermediate' },


  ];

  return (
    <div className="skillsContainer">
      <h2 className="skillsHeading">Skills</h2>
      <div className="skillsList">
        {skillsData.map((skill, index) => (
          <div className="skillItem" key={index}>
            <div className="skillName">{skill.name}</div>
            <div className={`${styles.skillProficiency} ${styles[skill.proficiency.toLowerCase()]}`}>
              {skill.proficiency}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

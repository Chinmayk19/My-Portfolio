import React from "react";
import "./ProjectInfo.css"

const ProjectInfo = (props) => {
  return (
    <div class="project-info">
      <h3>{props.Title}</h3>
      <p>{props.Description}</p>
      <p className="languages">{props.Languages}</p>
      <div className="links">
      <a href={props.projectLink} target="_blank">View Project</a>
      <a href={props.githubLink} target="_blank">GitHub</a>
      </div>
    </div>
  );
};

export default ProjectInfo;

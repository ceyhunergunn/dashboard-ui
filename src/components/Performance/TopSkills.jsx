import React from "react";
import { MainContext } from "../../context/Context";

const TopSkills = () => {
  const { data } = React.useContext(MainContext);

  return (
    <div className="common-container p-3">
      <div className="main-card">
        <div className="t-20m mb-3">Top Skills</div>
        {data.top_skills.map((skill) => (
          <div className="mb-3">
            <div className="flex-between">
              <div className="t-15m">{skill.skill}</div>
              <div className="t-15m">{skill.employees}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSkills;

import React from "react";
import { MainContext } from "../context/Context";

const TopSkills = () => {
  const { data } = React.useContext(MainContext);

  return (
    <div className="common-container p-3 col-span-2 md:col-span-1">
      <div className="main-card">
        <h2 className="t-25b flex-start mb-5">Top Skills</h2>
        <div className="py-8">
          {data.top_skills.map((skill) => (
            <div className="mb-5">
              <div className="flex-between">
                <div className="t-20m">{skill.skill}</div>
                <div className="t-20m">{skill.employees}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSkills;

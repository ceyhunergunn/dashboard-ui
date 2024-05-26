import React from "react";
import { MainContext } from "../context/Context";

const TopSkills = () => {
  const { data } = React.useContext(MainContext);

  return (
    <div className="common-container p-3 col-span-2 md:col-span-1">
      <div className="main-card">
        <h2 className="t-25b flex-start mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#fff"
            className="me-2"
          >
            <path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
          </svg>
          Top Skills
        </h2>
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

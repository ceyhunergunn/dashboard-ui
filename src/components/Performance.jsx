import React from "react";
import TopEmployees from "./Performance/TopEmployees";
import TopSkills from "./Performance/TopSkills";

const Performance = () => {
  return (
    <div className="p-3">
      <div className="main-card">
        <h2 className="t-25b flex-start mb-5">Performance</h2>
        <div className="main-grid-2">
          <TopEmployees />
          <TopSkills />
        </div>
      </div>
    </div>
  );
};

export default Performance;

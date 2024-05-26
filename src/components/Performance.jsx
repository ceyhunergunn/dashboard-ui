import React from "react";
import TopEmployees from "./TopEmployees";
import TopSkills from "./TopSkills";

const Performance = () => {
  return (
    <div className="p-3 col-span-3 md:col-span-2">
      <div className="main-card">
        <h2 className="t-25b flex-start mb-5">Performance</h2>
        <div className="main-grid-2 py-8">
          <TopEmployees />
          <TopSkills />
        </div>
      </div>
    </div>
  );
};

export default Performance;

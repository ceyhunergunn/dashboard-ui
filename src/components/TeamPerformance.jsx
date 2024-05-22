import React from "react";
import TeamDetails from "./TeamPerformance/TeamDetails";
import TeamScores from "./TeamPerformance/TeamScores";

const TeamPerformance = () => {
  return (
    <div className="common-container">
      <div className="activity-metrics-grid">
        <div className="col-span-2 p-3">
          <div className="activity-metrics-card">
            <h2 className="h2-medium flex-start gap-2">Teams</h2>
            <TeamDetails />
            <TeamScores />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPerformance;

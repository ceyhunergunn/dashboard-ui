import React from "react";
import { MainContext } from "../context/Context";

const Overview = () => {
  const { data } = React.useContext(MainContext);

  return (
    <div className="common-container">
      <div className="overview-grid">
        <div className="p-3">
          <div className="overview-card ">
            <h2 className="t-20m flex-start gap-2">
              <i className="fa-solid fa-circle-check"></i>
              Total Completed Courses
            </h2>
            <p className="t-30m flex-end">{data.total_completed_courses}</p>
          </div>
        </div>
        <div className="p-3">
          <div className="overview-card ">
            <h2 className="t-20m flex-start gap-2">
              <i className="fa-solid fa-user-tie"></i>
              Total Employees
            </h2>
            <p className="t-30m flex-end">{data.total_employees}</p>
          </div>
        </div>
        <div className="p-3">
          <div className="overview-card ">
            <h2 className="t-20m flex-start gap-2">
              <i className="fa-solid fa-star"></i>
              Average Employee Score
            </h2>
            <p className="t-30m flex-end">{data.average_employee_score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

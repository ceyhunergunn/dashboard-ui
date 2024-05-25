import React from "react";
import { MainContext } from "../context/Context";

const Courses = () => {
  const { data } = React.useContext(MainContext);

  return (
    <div className="common-container p-3">
      <h2 className="t-25b flex-start mb-3">Courses</h2>
      <div className="activity-metrics-card">
        <div className="t-20m mb-3">In Progress Courses</div>
        <div className="mb-5">
          {data.in_progress_courses.map((course) => (
            <div className="mb-3">
              <div className="flex-between">
                <div className="t-15m">{course.title}</div>
              </div>
              <div className="text-secondary-2 t-15m">{course.description}</div>
            </div>
          ))}
        </div>
        <div className="t-20m mb-3">Upcoming Courses</div>
        <div className="mb-3">
          {data.top_employees.map((employee) => (
            <div className="mb-3">
              <div className="flex-between">
                <div className="t-15m">{employee.name}</div>
                <div className="t-15m">{employee.current_score}</div>
              </div>
              <div className="text-secondary-2 t-15m">{employee.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

import React from "react";
import { MainContext } from "../../context/Context";

const TopEmployees = () => {
  const { data } = React.useContext(MainContext);

  return (
    <div className="common-container p-3">
      <div className="main-card">
        <div className="t-20m mb-3">Top Employees</div>
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
  );
};

export default TopEmployees;

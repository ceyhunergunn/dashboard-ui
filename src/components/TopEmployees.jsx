import React from "react";
import { MainContext } from "../context/Context";

const TopEmployees = () => {
  const { data } = React.useContext(MainContext);

  return (
    <div className="common-container p-3 col-span-2 md:col-span-1">
      <div className="main-card">
        <h2 className="t-25b flex-start mb-5">Top Employees</h2>
        <div className="py-8">
          {data.top_employees.map((employee) => (
            <div className="mb-5">
              <div className="flex-between mb-2">
                <div className="t-20m">{employee.name}</div>
                <div className="t-20m">{employee.current_score}</div>
              </div>
              <div className="text-secondary-2 t-15m">{employee.title}</div>
              <div className="text-secondary-2 t-15m">{employee.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopEmployees;

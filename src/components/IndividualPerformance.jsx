import React from "react";
import { MainContext } from "../context/Context";
import DataTable from "react-data-table-component";

const IndividualPerformance = () => {
  const { data } = React.useContext(MainContext);

  return (
    <div className="common-container p-3">
      <h2 className="t-25b flex-start mb-3">Individual Performance</h2>
      <div className="activity-metrics-card">
        <div className="t-20m mb-3">Top Employees</div>
        <div>
          {data.top_employees.map((employee) => (
            <div className="mb-2">
              {employee.name}
              <div className="text-secondary-2 t-15m">{employee.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualPerformance;

import React from "react";
import { MainContext } from "../context/Context";
import DataTable from "react-data-table-component";

const SkillsDevelopment = () => {
  const { data } = React.useContext(MainContext);
  const columns = [
    {
      name: "Skill",
      selector: (row) => row.skill,
      maxWidth: "auto",
      sortable: true,
      wrap: true,
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Employee Count",
      selector: (row) => +row.employees,
      width: "auto",
      sortable: true,
      wrap: true,
      right: "right",
      style: {
        fontSize: "15px",
      },
    },
  ];
  return (
    <div className="common-container p-3">
      <div className="activity-metrics-card">
        <h2 className="t-25b flex-start gap-2">Skills In Development</h2>
        <div className="transparent-table">
          <DataTable
            columns={columns}
            data={data.skills_in_development}
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
            highlightOnHover
            pointerOnHover
            theme="solarized"
            paginationComponentOptions={{
              rowsPerPageText: "",
              rangeSeparatorText: "of",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsDevelopment;

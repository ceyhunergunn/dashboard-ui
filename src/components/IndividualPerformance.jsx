import React from "react";
import { MainContext } from "../context/Context";
import DataTable from "react-data-table-component";

const IndividualPerformance = () => {
  const { data } = React.useContext(MainContext);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      maxWidth: "auto",
      wrap: true,
    },
    {
      name: "Employee Count",
      selector: (row) => row.total_employee_count,
      width: "auto",
      wrap: true,
      center: "center",
    },
    {
      name: "Overall Score",
      selector: (row) => row.overall_score,
      width: "auto",
      wrap: true,
      center: "center",
    },
  ];
  return (
    <div className="common-container p-3">
      <div className="activity-metrics-card">
        <h2 className="h2-medium flex-start gap-2">Individual Performance</h2>
        <div className="transparent-table">
          <DataTable
            title=""
            columns={columns}
            data={data.teams}
            defaultSortField="name"
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
            highlightOnHover
            pointerOnHover
            theme="solarized"
            expandableRows={true}
            expandableRowsComponent={(row) => (
              <>
                <div className="p-3">
                  <div className="team-details-grid">
                    <div className="flex-start mb-2 text-[14px]">Employees</div>
                    <div className=" text-secondary-2 text-[14px]">
                      {row.data.employees.map((employee) => (
                        <div className="text-[14px]" key={employee.email}>
                          {employee.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="team-details-grid">
                    <div className="flex-start mb-2 text-[14px]">
                      Description
                    </div>
                    <div className="flex-end text-secondary-2 text-[14px]">
                      {row.data.description}
                    </div>
                  </div>
                </div>
              </>
            )}
            paginationComponentOptions={{
              rowsPerPageText: "rows",
              rangeSeparatorText: "/",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualPerformance;

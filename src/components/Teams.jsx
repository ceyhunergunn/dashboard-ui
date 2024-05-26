import React from "react";
import { MainContext } from "../context/Context";
import DataTable from "react-data-table-component";

const Teams = () => {
  const { data, isSmallScreen } = React.useContext(MainContext);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      maxWidth: "auto",
      wrap: true,
      sortable: "true",
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Employee Count",
      selector: (row) => +row.total_employee_count,
      width: "auto",
      wrap: true,
      sortable: "true",
      center: "center",
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Overall Score",
      selector: (row) => row.overall_score,
      width: "auto",
      sortable: "true",
      wrap: true,
      hide: "sm",
      center: "center",
      style: {
        fontSize: "15px",
      },
    },
  ];
  return (
    <div className="common-container p-3">
      <div className="main-card">
        <h2 className="t-25b flex-start mb-5">Teams</h2>
        <div className="transparent-table py-8">
          <DataTable
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
                    <div className="flex-start mb-2 t-15b">Employees</div>
                    <div className=" text-secondary-2 t-15m">
                      {row.data.employees.map((employee) => (
                        <div className="t-15m" key={employee.email}>
                          {employee.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {isSmallScreen ? (
                  <div className="p-3">
                    <div className="team-details-grid">
                      <div className="flex-start mb-2 t-15b">Overal Score</div>
                      <div className="flex-start text-secondary-2 t-15m">
                        {row.data.overall_score}
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="p-3">
                  <div className="team-details-grid">
                    <div className="flex-start mb-2 t-15b">Description</div>
                    <div className="flex-start text-secondary-2 t-15m">
                      {row.data.description}
                    </div>
                  </div>
                </div>
              </>
            )}
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

export default Teams;

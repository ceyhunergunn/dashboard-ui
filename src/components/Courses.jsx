import React from "react";
import { MainContext } from "../context/Context";
import DataTable from "react-data-table-component";

const Courses = () => {
  const { data, isSmallScreen, isMediumScreen } = React.useContext(MainContext);
  const courses = data.in_progress_courses.concat(data.upcoming_courses);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      width:
        isSmallScreen && isSmallScreen
          ? "50%"
          : isMediumScreen && !isSmallScreen
          ? "33%"
          : "25%",
      wrap: true,
      sortable: "true",
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Status",
      selector: (row) => row.status,
      width:
        isSmallScreen && isSmallScreen
          ? "50%"
          : isMediumScreen && !isSmallScreen
          ? "33%"
          : "25%",
      sortable: "true",
      wrap: true,
      center: "center",
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Assigned Employee",
      selector: (row) => row.assigned_to,
      width:
        isSmallScreen && isSmallScreen
          ? "50%"
          : isMediumScreen && !isSmallScreen
          ? "33%"
          : "25%",
      sortable: "true",
      wrap: true,
      center: "center",
      hide: "sm",
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Due Date",
      selector: (row) => row.due_date,
      sortable: "true",
      width:
        isSmallScreen && isSmallScreen
          ? "50%"
          : isMediumScreen && !isSmallScreen
          ? "33%"
          : "25%",
      hide: "md",
      wrap: true,
      center: "center",
      style: {
        fontSize: "15px",
      },
    },
  ];
  return (
    <div className="common-container p-3">
      <div className="activity-metrics-card">
        <h2 className="t-25b flex-start gap-2">Courses</h2>
        <div className="transparent-table">
          <DataTable
            columns={columns}
            data={courses}
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
            highlightOnHover
            pointerOnHover
            theme="solarized"
            expandableRows={true}
            expandableRowsComponent={(row) => (
              <>
                {isMediumScreen && isSmallScreen ? (
                  <>
                    <div className="p-3">
                      <div className="team-details-grid">
                        <div className="flex-start mb-2 t-15b">
                          Assigned Employee
                        </div>
                        <div className="flex-start text-secondary-2 t-15m">
                          {row.data.assigned_to}
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="team-details-grid">
                        <div className="flex-start mb-2 t-15b">Due Date</div>
                        <div className="flex-start text-secondary-2 t-15m">
                          {row.data.due_date}
                        </div>
                      </div>
                    </div>
                  </>
                ) : isMediumScreen && !isSmallScreen ? (
                  <div className="p-3">
                    <div className="team-details-grid">
                      <div className="flex-start mb-2 t-15b">Due Date</div>
                      <div className="flex-start text-secondary-2 t-15m">
                        {row.data.due_date}
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
              rowsPerPageText: "rows",
              rangeSeparatorText: "/",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;

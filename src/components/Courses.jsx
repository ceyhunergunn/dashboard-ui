import React from "react";
import { MainContext } from "../context/Context";
import DataTable from "react-data-table-component";

const Courses = () => {
  const { data } = React.useContext(MainContext);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      maxWidth: "auto",
      wrap: true,
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Employee Count",
      selector: (row) => row.due_date,
      width: "auto",
      wrap: true,
      center: "center",
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Overall Score",
      selector: (row) => row.assigned_to,
      width: "auto",
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
            data={data.in_progress_courses}
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

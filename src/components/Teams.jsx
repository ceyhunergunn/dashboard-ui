import React from "react";
import { MainContext } from "../context/Context";
import DataTable from "react-data-table-component";

const Teams = () => {
  const { data, isMediumScreen } = React.useContext(MainContext);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      width: isMediumScreen ? "50%" : "33%",
      wrap: true,
      sortable: "true",
      style: {
        fontSize: "15px",
      },
    },
    {
      name: "Employee Count",
      selector: (row) => +row.total_employee_count,
      width: isMediumScreen ? "50%" : "33%",
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
      width: isMediumScreen ? "50%" : "33%",
      sortable: "true",
      wrap: true,
      hide: "md",
      center: "center",
      style: {
        fontSize: "15px",
      },
    },
  ];
  return (
    <div className="common-container p-3">
      <div className="main-card">
        <h2 className="t-25b flex-start mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#fff"
            className="me-2"
          >
            <path d="M411-480q-28 0-46-21t-13-49l12-72q8-43 40.5-70.5T480-720q44 0 76.5 27.5T597-622l12 72q5 28-13 49t-46 21H411Zm24-80h91l-8-49q-2-14-13-22.5t-25-8.5q-14 0-24.5 8.5T443-609l-8 49ZM124-441q-23 1-39.5-9T63-481q-2-9-1-18t5-17q0 1-1-4-2-2-10-24-2-12 3-23t13-19l2-2q2-19 15.5-32t33.5-13q3 0 19 4l3-1q5-5 13-7.5t17-2.5q11 0 19.5 3.5T208-626q1 0 1.5.5t1.5.5q14 1 24.5 8.5T251-596q2 7 1.5 13.5T250-570q0 1 1 4 7 7 11 15.5t4 17.5q0 4-6 21-1 2 0 4l2 16q0 21-17.5 36T202-441h-78Zm676 1q-33 0-56.5-23.5T720-520q0-12 3.5-22.5T733-563l-28-25q-10-8-3.5-20t18.5-12h80q33 0 56.5 23.5T880-540v20q0 33-23.5 56.5T800-440ZM0-240v-63q0-44 44.5-70.5T160-400q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm560-160q72 0 116 26.5t44 70.5v63H780v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5Zm-320 30q-57 0-102 15t-53 35h311q-9-20-53.5-35T480-370Zm0 50Zm1-280Z" />
          </svg>
          Teams
        </h2>
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
                {isMediumScreen ? (
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

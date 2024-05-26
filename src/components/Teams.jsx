import React from "react";
import { MainContext } from "../context/Context";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        className="main-card"
      >
        <h2 className="t-25b flex-start mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#448997"
            className="me-2"
          >
            <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
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
      </motion.div>
    </div>
  );
};

export default Teams;

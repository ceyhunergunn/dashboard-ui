import React from "react";
import { MainContext } from "../context/Context";
import DataTable from "react-data-table-component";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="main-card"
      >
        <h2 className="t-25b flex-start mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#fff"
            className="me-2"
          >
            <path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z" />
          </svg>
          Courses
        </h2>
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
              rowsPerPageText: "",
              rangeSeparatorText: "of",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Courses;

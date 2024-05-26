import React from "react";
import { MainContext } from "../context/Context";
import DataTable from "react-data-table-component";
import { motion } from "framer-motion";

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
    <div className="common-container p-3 col-span-1 md:col-span-2">
      <motion.div
        initial={{ x: +500 }}
        animate={{ x: 0 }}
        className="main-card"
      >
        <h2 className="t-25b flex-start mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#448997"
            className="me-2"
          >
            <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
          </svg>
          Skills In Development
        </h2>
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
      </motion.div>
    </div>
  );
};

export default SkillsDevelopment;

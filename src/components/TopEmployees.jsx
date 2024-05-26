import React from "react";
import { MainContext } from "../context/Context";
import { motion } from "framer-motion";

const TopEmployees = () => {
  const { data } = React.useContext(MainContext);

  return (
    <div className="common-container p-3 col-span-2 md:col-span-1">
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
            fill="#fff"
            className="me-2"
          >
            <path d="M480-160q75 0 127.5-52.5T660-340q0-75-52.5-127.5T480-520q-75 0-127.5 52.5T300-340q0 75 52.5 127.5T480-160ZM363-572q20-11 42.5-17.5T451-598L350-800H250l113 228Zm234 0 114-228H610l-85 170 19 38q14 4 27 8.5t26 11.5ZM256-208q-17-29-26.5-62.5T220-340q0-36 9.5-69.5T256-472q-42 14-69 49.5T160-340q0 47 27 82.5t69 49.5Zm448 0q42-14 69-49.5t27-82.5q0-47-27-82.5T704-472q17 29 26.5 62.5T740-340q0 36-9.5 69.5T704-208ZM480-80q-40 0-76.5-11.5T336-123q-9 2-18 2.5t-19 .5q-91 0-155-64T80-339q0-87 58-149t143-69L120-880h280l80 160 80-160h280L680-559q85 8 142.5 70T880-340q0 92-64 156t-156 64q-9 0-18.5-.5T623-123q-31 20-67 31.5T480-80Zm0-260ZM363-572 250-800l113 228Zm234 0 114-228-114 228ZM406-230l28-91-74-53h91l29-96 29 96h91l-74 53 28 91-74-56-74 56Z" />
          </svg>
          Top Employees
        </h2>
        <div className="py-8">
          {data.top_employees.map((employee) => (
            <div className="mb-5">
              <div className="flex-between mb-2">
                <div className="t-20m">{employee.name}</div>
                <div className="t-20m">{employee.current_score}</div>
              </div>
              <div className="text-secondary-2 t-15m">{employee.title}</div>
              <div className="text-secondary-2 t-15m">{employee.email}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TopEmployees;

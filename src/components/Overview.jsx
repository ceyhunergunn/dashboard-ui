import React from "react";
import { MainContext } from "../context/Context";

const Overview = () => {
  const { data } = React.useContext(MainContext);

  return (
    <div className="common-container">
      <div className="overview-grid">
        <div className="p-3">
          <div className="overview-card ">
            <h2 className="t-20m flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="45px"
                viewBox="0 -960 960 960"
                width="70px"
                fill="#ffffff"
                className="me-2"
              >
                <path d="M160-391h45l23-66h104l24 66h44l-97-258h-46l-97 258Zm81-103 38-107h2l38 107h-78Zm319-70v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-499Z" />
              </svg>
              Total Completed Courses
            </h2>
            <p className="t-30m flex-end">{data.total_completed_courses}</p>
          </div>
        </div>
        <div className="p-3">
          <div className="overview-card ">
            <h2 className="t-20m flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="45px"
                viewBox="0 -960 960 960"
                width="45px"
                fill="#ffffff"
                className="me-2"
              >
                <path d="M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm0-80h640v-440H600q0 33-23.5 56.5T520-520h-80q-33 0-56.5-23.5T360-600H160v440Zm80-80h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Zm40 220Z" />
              </svg>
              Total Employees
            </h2>
            <p className="t-30m flex-end">{data.total_employees}</p>
          </div>
        </div>
        <div className="p-3">
          <div className="overview-card ">
            <h2 className="t-20m flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="45px"
                viewBox="0 -960 960 960"
                width="70px"
                fill="#ffffff"
                className="me-2"
              >
                <path d="m668-380 152-130 120 10-176 153 52 227-102-62-46-198Zm-94-292-42-98 46-110 92 217-96-9ZM294-287l126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM173-120l65-281L20-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-340Z" />
              </svg>
              Average Employee Score
            </h2>
            <p className="t-30m flex-end">{data.average_employee_score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

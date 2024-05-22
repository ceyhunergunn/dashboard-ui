import React from "react";
import { MainContext } from "../../context/Context";
import DataTable from "react-data-table-component";

const TeamDetails = () => {
  const { data } = React.useContext(MainContext);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      maxWidth: "auto",
      wrap: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      width: "auto",
      wrap: true,
      hide: "sm",
    },
    {
      name: "Employee Count",
      selector: (row) => row.total_employee_count,
      width: "auto",
      wrap: true,
      hide: "sm",
    },
    // {
    //   name: "",
    //   cell: (row) => <img />,
    //   width: "7rem",
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    //   button: true,
    //   center: "start",
    // },
  ];
  return (
    <div>
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
        expandableRows={true}
        expandableRowsComponent={(row) => (
          <div className="my-3 p-3 datatable-bg">
            <div className="row">
              <div
                className="col-6 mycolor text-white d-flex align-items-center justify-content-start"
                style={{ fontSize: "14px" }}
              >
                Description
              </div>
              <div
                className="col-6 mycolor2 text-end text-white d-flex align-items-center justify-content-end"
                style={{ fontSize: "14px" }}
              >
                {row.data.description || "--"}
              </div>
            </div>
            <hr />
          </div>
        )}
        paginationComponentOptions={{
          rowsPerPageText: "rows",
          rangeSeparatorText: "/",
        }}
        noDataComponent={"No Data"}
        theme={"solarized"}
      />
    </div>
  );
};

export default TeamDetails;

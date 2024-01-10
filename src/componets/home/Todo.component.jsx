import React, { useState } from "react";
import DataTable from "react-data-table-component";
function Todo() {
  const data = [
    {
      id: 1,
      Name: "Ambily",
      Email: "ambily@gmail.com",
      Age: "25",
      Status: "Status",
    },
    {
      id: 2,
      Name: "Nandu",
      Email: "nandu@gmail.com",
      Age: "24",
      Status: "Status",
    },
    {
      id: 3,
      Name: "Athira",
      Email: "athira@gmail.com",
      Age: "23",
      Status: "Status",
    },
    {
      id: 4,
      Name: "Muhsina",
      Email: "muhsina@gmail.com",
      Age: "28",
      Status: "Status",
    },
    {
      id: 5,
      Name: "Anadu",
      Email: "anadu@gmail.com",
      Age: "29",
      Status: "Inactive",
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
    },
    {
      name: "Age",
      selector: (row) => row.Age,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
    },
  ];
  const customStyles = {
    headRow: {
      style: {
        color: "#fff",
        backgroundColor: "#0088B4",
        fontSize: "13px",
      },
    },
    rows: {
      style: {
        color: "#000",
        backgroundColor: "#fff",
      },
    },
  };
  const [records, setRecords] = useState(data);
  const handleFilter = (event) => {
    const newdata = data.filter((row) => {
      return row.Name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newdata);
  };
  return (
    <div className="">
      <div class="container text-center">
        <div class="row">
          <div class="col-4 mt-3">
            <div class="card text-bg-info">
              <input
                type="text"
                placeholder="What is the task today?"
                className=" form-control border border-0"
              />
            </div>
          </div>

          <div className="col-2 mt-3">
            <button className="btn btn-primary border border-0 add-task-btn">
              Add task
            </button>
          </div>
        </div>
      </div>
      <div className="text-end">
        <div className="col-5">
          <input type="text" className="form-control ms-2 mt-3" placeholder="Search" onChange={handleFilter} />
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns}
          data={records}
          customStyles={customStyles}
          pagination
          fixedHeader
          selectableRows
        />
      </div>
    </div>
  );
}

export default Todo;

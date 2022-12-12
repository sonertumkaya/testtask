import "./datatable.scss";
import {
  DataGrid, GridToolbarContainer, GridToolbarExport
  
} from '@mui/x-data-grid';


import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport printOptions={{ disableToolbarButton: false }} />
    </GridToolbarContainer>
  );
}
const Datatable = () => {
  
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOpstions={[9]}
        checkboxSelection
        components={{
          Toolbar: CustomToolbar,
        }} 
      />
    </div>
  );
};

export default Datatable;

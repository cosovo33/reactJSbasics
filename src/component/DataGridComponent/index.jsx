import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

const MyDataGrid = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get(apiUrl).then((response) => {
      const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 130 },
        { field: "username", headerName: "Username", width: 130 },
        {
          field: "email",
          headerName: "Email",
          width: 200,
        },
      ];

      const rows = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      }));

      setData({ columns, rows });
      setLoading(false);
    });
  }, []);

  return (
    <React.Fragment>
      {loading && <div>Loading...</div>}
      {!loading && data && data.rows.length > 0 && (
        <DataGrid
          rows={data.rows}
          columns={data.columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        />
      )}
      {!loading && (!data || data.rows.length === 0) && (
        <div>No data available</div>
      )}
    </React.Fragment>
  );
};

export default MyDataGrid;

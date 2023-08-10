import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";

const DataGridTable = ({
  data,
  columns,
  id,
  theme,
  searchInput,
  setSearchInput,
  setSearch,
  getRowId,
  TotalFooter,
  totalAmountColumn
}) => {
  return (
    <Box
      height="80vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.primary.light,
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: "none",
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.secondary[200]} !important`,
        },
      }}
    >
      <DataGrid
        // loading={isLoading || !data}
        getRowId={getRowId}
        rows={data}
        columns={columns}
        components={{ Toolbar: DataGridCustomToolbar, Footer: TotalFooter}}
        componentsProps={{
          toolbar: { searchInput, setSearch, setSearchInput, columns, },
        }}
      />
    </Box>
  );
};

export default DataGridTable;

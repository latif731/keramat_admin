import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarExportContainer,
  GridPrintExportMenuItem,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
import ExportMenuItem from "./ExportMenuItem";
// import GridPrintExportOptions from "@mui/x-data-grid";
import { GridPrintExportMenuItemProps } from "@mui/x-data-grid";

const DataGridCustomToolbar = ({
  searchInput,
  setSearchInput,
  setSearch,
  columns,
}) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExportContainer>
            <ExportMenuItem columns={columns} />
          </GridToolbarExportContainer>
          {/* <GridToolbarExport /> */}
          {/* <GridPrintExportOptions /> */}
          <GridPrintExportMenuItem />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "15rem" }}
          onChange={(e) => setSearchInput(e.target.value)}
          name="searchTerm"
          value={searchInput}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;

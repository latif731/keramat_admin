// import React, { useState } from "react";
// import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { useGetTransactionsQuery } from "state/api";
// import Header from "components/Header";
// import DataGridCustomToolbar from "components/DataGridCustomToolbar";

// const ProfitPerhari = () => {
//   const theme = useTheme();

//   // values to be sent to the backend
//   const [page, setPage] = useState(0);
//   const [pageSize, setPageSize] = useState(20);
//   const [sort, setSort] = useState({});
//   const [search, setSearch] = useState("");

//   const [searchInput, setSearchInput] = useState("");
//   const { data, isLoading } = useGetTransactionsQuery({
//     page,
//     pageSize,
//     sort: JSON.stringify(sort),
//     search,
//   });
//   console.log("finance", data);

//   const columns = [
//     {
//       field: "_id",
//       headerName: "ID",
//       flex: 1,
//     },
//     {
//       field: "userId",
//       headerName: "User ID",
//       flex: 1,
//     },
//     {
//       field: "createdAt",
//       headerName: "CreatedAt",
//       flex: 1,
//     },
//     {
//       field: "products",
//       headerName: "# of Products",
//       flex: 0.5,
//       sortable: true,
//       renderCell: (params) => params.value.length,
//     },
//     {
//       field: "cost",
//       headerName: "Cost",
//       flex: 1,
//       renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
//     },
//   ];

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="FINANCE" subtitle="Entire list of transactions" />
//       <Box
//         height="80vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: theme.palette.background.alt,
//             color: theme.palette.secondary[100],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: theme.palette.primary.light,
//           },
//           "& .MuiDataGrid-footerContainer": {
//             backgroundColor: theme.palette.background.alt,
//             color: theme.palette.secondary[100],
//             borderTop: "none",
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: `${theme.palette.secondary[200]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           loading={isLoading || !data}
//           getRowId={(row) => row._id}
//           rows={(data && data.transactions) || []}
//           columns={columns}
//           rowCount={(data && data.total) || 0}
//           rowsPerPageOptions={[20, 50, 100]}
//           pagination
//           page={page}
//           pageSize={pageSize}
//           paginationMode="server"
//           sortingMode="server"
//           onPageChange={(newPage) => setPage(newPage)}
//           onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//           onSortModelChange={(newSortModel) => setSort(...newSortModel)}
//           components={{ Toolbar: DataGridCustomToolbar }}
//           componentsProps={{
//             toolbar: { searchInput, setSearch, setSearchInput, columns },
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default ProfitPerhari;

// // import React, { useMemo, useState } from "react";
// // import { MaterialReactTable } from "material-react-table";
// // import * as XLSX from "xlsx";
// // import { Box, Button } from "@mui/material";
// // import { FileDownload } from "@mui/icons-material";
// // import { useGetTransactionsQuery } from "state/api";

// // //simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
// // const data1 = [
// //   {
// //     name: "John",
// //     age: 30,
// //   },
// //   {
// //     name: "Sara",
// //     age: 25,
// //   },
// //   {
// //     name: "Latif",
// //     age: 30,
// //   },
// //   {
// //     name: "Budi",
// //     age: 25,
// //   },
// //   {
// //     name: "Pamungkas",
// //     age: 30,
// //   },
// //   {
// //     name: "Firman",
// //     age: 25,
// //   },
// //   {
// //     name: "Kebret",
// //     age: 30,
// //   },
// //   {
// //     name: "Keprot",
// //     age: 25,
// //   },
// //   {
// //     name: "Mamek",
// //     age: 30,
// //   },
// //   {
// //     name: "Dian",
// //     age: 25,
// //   },
// //   {
// //     name: "Mami",
// //     age: 30,
// //   },
// //   {
// //     name: "Yolanda",
// //     age: 25,
// //   },
// //   {
// //     name: "Riski",
// //     age: 30,
// //   },
// //   {
// //     name: "Didot",
// //     age: 25,
// //   },
// // ];

// // const Finance = () => {
// //   const [page, setPage] = useState(0);
// //   const [pageSize, setPageSize] = useState(20);
// //   const [sort, setSort] = useState({});
// //   const [search, setSearch] = useState("");

// //   const [searchInput, setSearchInput] = useState("");
// //   const { data, isLoading } = useGetTransactionsQuery({ page });
// //   console.log("transactions", data);

// //   // const downloadExcel = () => {
// //   //   const workSheet = XLSX.utils.json_to_sheet(data);
// //   //   const workBook = XLSX.utils.book_new();
// //   //   XLSX.utils.book_append_sheet(workSheet, workBook, "data");
// //   //   XLSX.writeFile(workBook, "data.xlsx");
// //   // };

// //   // const columns = useMemo(
// //   //   () => [
// //   //     {
// //   //       accessorFn: (row) => row._id, //simple recommended way to define a column
// //   //       id: "_id",
// //   //       header: "ID",
// //   //       muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
// //   //       Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
// //   //     },
// //   //     {
// //   //       accessorFn: (row) => row.userId, //alternate way
// //   //       id: "userId", //id required if you use accessorFn instead of accessorKey
// //   //       header: "userId",
// //   //       Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
// //   //     },
// //   //   ],
// //   //   []
// //   // );

// //   // const columns = [
// //   //   {
// //   //     accessorKey: "name",
// //   //     header: "Name",
// //   //   },
// //   //   {
// //   //     accessorKey: "age",
// //   //     header: "Age",
// //   //   },
// //   // ];

// //   const columns = useMemo(
// //     () => [
// //       {
// //         accessorKey: "firstName",
// //         header: "First Name",
// //       },
// //       //column definitions...
// //     ],
// //     []
// //   );
// //   // const columns = [
// //   //   {
// //   //     accessorKey: "_id",
// //   //     header: "ID",
// //   //     size: 40,
// //   //   },
// //   //   {
// //   //     accessorKey: "userId",
// //   //     header: "User ID",
// //   //     size: 120,
// //   //   },
// //   //   {
// //   //     accessorKey: "createdAt",
// //   //     header: "CreatedAt",
// //   //     size: 120,
// //   //   },
// //   //   {
// //   //     accessorKey: "products",
// //   //     header: "products",
// //   //     size: 300,
// //   //   },
// //   //   {
// //   //     accessorKey: "cost",
// //   //     header: "Cost",
// //   //   },
// //   //   // {
// //   //   //   accessorKey: "country",
// //   //   //   header: "Country",
// //   //   //   size: 220,
// //   //   // },
// //   // ];

// //   return (
// //     <MaterialReactTable
// //       renderTopToolbarCustomActions={() => (
// //         <Box>
// //           <Button
// //             color="primary"
// //             //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
// //             // onClick={downloadExcel}
// //             startIcon={<FileDownload />}
// //             variant="contained"
// //           >
// //             Export All Data
// //           </Button>
// //         </Box>
// //       )}
// //       columns={columns}
// //       data={data}
// //     />
// //   );
// // };

// // export default Finance;

import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfitPerhari } from "state/redux/barang/barangSlice";
// import { fetchTodos } from "state/redux/sliceBarangMasuk";
// import { fetchProfitPerhari } from "state/redux/sliceProfitPerhari";
import DataGridTable from "components/table/DataGridTable";

const ProfitPerHari = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.barang);
  console.log("returnjawabali", data);
  useEffect(() => {
    dispatch(fetchProfitPerhari());
  }, []);

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  // const { data, isLoading } = useGetTransactionsQuery({
  //   page,
  //   pageSize,
  //   sort: JSON.stringify(sort),
  //   search,
  // });
  // console.log("finance", data);

  function generateRandom() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  const columns = [
    {
      field: "nama_barang",
      headerName: "NAMA BARANG",
      flex: 1,
    },
    {
      field: "bulan",
      headerName: "BULAN",
      flex: 1,
    },
    {
      field: "tanggal",
      headerName: "TANGGAL",
      flex: 1,
    },
    {
      field: "terkirim",
      headerName: "TERKIRIM",
      flex: 1,
    },
    {
      field: "untung",
      headerName: "UNTUNG",
      flex: 1,
    },
    {
      field: "bayar_cs_peritem",
      headerName: "BAYAR CS PER ITEM",
      flex: 1,
    },
    {
      field: "total_untung_bersih",
      headerName: "TOTAL UNTUNG BERSIH",
      flex: 1,
    },
    {
      field: "total",
      headerName: "TOTAL",
      flex: 1,
    },
    // {
    //   field: "products",
    //   headerName: "# of Products",
    //   flex: 0.5,
    //   sortable: true,
    //   // renderCell: (params) => params.value.length,
    // },
    // {
    //   field: "cost",
    //   headerName: "Cost",
    //   flex: 1,
    //   // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    // },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PROFIT PER HARI" subtitle="Tabel data profit perhari" />
      <DataGridTable
        data={data}
        columns={columns}
        theme={theme}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearch={setSearch}
        getRowId={(rows: any) => generateRandom()}
      />
    </Box>
  );
};

export default ProfitPerHari;

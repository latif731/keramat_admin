// import React, { useState } from "react";
// import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { useGetTransactionsQuery } from "state/api";
// import Header from "components/Header";
// import DataGridCustomToolbar from "components/DataGridCustomToolbar";

// const ReturnTidakDikirim = () => {
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

// export default ReturnTidakDikirim;

import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
// import { fetchTodos } from "state/redux/sliceBarangMasuk";
// import { fetchBarangReturTidakDikirim } from "state/redux/sliceBarangReturTdakDikirim";
import { fetchBarangReturTidakDikirim } from "state/redux/barang/barangSlice";
import DataGridTable from "components/table/DataGridTable";

const ReturnTidakDikirim = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.barang);
  // console.log("returnjawabali", data);
  useEffect(() => {
    dispatch(fetchBarangReturTidakDikirim());
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
      field: "tanggal",
      headerName: "TANGGAL",
      flex: 1,
      valueGetter: params => moment(params?.value).format("DD-MM-YYYY hh:mm A")
    },
    {
      field: "bulan",
      headerName: "BULAN",
      flex: 1,
    },
    {
      field: "nama_barang",
      headerName: "NAMA BARANG",
      flex: 1,
    },
    {
      field: "harga",
      headerName: "HARGA",
      flex: 1,
    },
    {
      field: "keterangan",
      headerName: "KETERANGAN",
      flex: 1,
    },
    {
      field: "jumlah_barang",
      headerName: "JUMLAH BARANG",
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
      <Header
        title="BARANG RETUR YANG TIDAK BISA DIKIRIM"
        subtitle="Data barang retur yang tidak bisa dikirim"
      />
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

export default ReturnTidakDikirim;

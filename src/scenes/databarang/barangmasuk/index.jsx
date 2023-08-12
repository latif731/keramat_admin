// import React, { useState } from "react";
// import { Box, useTheme } from "@mui/material";
// import { useGetCustomersQuery } from "state/api";
// import Header from "components/Header";
// import { DataGrid } from "@mui/x-data-grid";
// import DataGridCustomToolbar from "components/DataGridCustomToolbar";

// const BarangMasuk = () => {
//   const theme = useTheme();
//   const [page, setPage] = useState(0);
//   const [pageSize, setPageSize] = useState(20);
//   const [sort, setSort] = useState({});
//   const [search, setSearch] = useState("");
//   const [searchInput, setSearchInput] = useState("");
//   const { data, isLoading } = useGetCustomersQuery({
//     page,
//     pageSize,
//     sort: JSON.stringify(sort),
//     search,
//   });
//   console.log("customers", data);

//   // const handleFilter = (e) => {
//   //   if (e.target.value == "") {
//   //     useGetCustomersQuery();
//   //     ("");
//   //   } else {
//   //   }
//   // };

//   const columns = [
//     {
//       field: "_id",
//       headerName: "ID",
//       flex: 1,
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 0.5,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "phoneNumber",
//       headerName: "Phone Number",
//       flex: 0.5,
//       renderCell: (params) => {
//         return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
//       },
//     },
//     {
//       field: "country",
//       headerName: "Country",
//       flex: 0.4,
//     },
//     {
//       field: "occupation",
//       headerName: "Occupation",
//       flex: 1,
//     },
//     {
//       field: "role",
//       headerName: "Role",
//       flex: 0.5,
//     },
//     {
//       field: "transactions",
//       headerName: "transactions",
//       flex: 1,
//     },
//   ];

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="CUSTOMERS" subtitle="List of Customers" />
//       <Box
//         mt="40px"
//         height="75vh"
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
//           rows={(data && data.customers) || []}
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

// export default BarangMasuk;

import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useDispatch, useSelector } from "react-redux";
// import { fetchTodos } from "state/redux/sliceBarangMasuk";
// import { fetchBarangMasuk } from "state/redux/sliceBarangMasuk";
import { fetchBarangMasuk } from "state/redux/barang/barangSlice";
import DataGridTable from "components/table/DataGridTable";

const BarangMasuk = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.barang);
  console.log("returnjawabali", data);
  useEffect(() => {
    dispatch(fetchBarangMasuk());
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
      field: "no",
      headerName: "NO",
      flex: 1,
    },
    {
      field: "nama_barang",
      headerName: "NAMA BARANG",
      flex: 1,
    },
    {
      field: "berapa_koli",
      headerName: "BERAPA KOLI",
      flex: 1,
    },
    {
      field: "pcs_perkoli",
      headerName: "BERAPA PCS PER KOLI NYA",
      flex: 1,
    },
    {
      field: "bulan",
      headerName: "BULAN",
      flex: 1,
    },
    {
      field: "tanggal_barang_masuk",
      headerName: "TANGGAL BARANG MASUK",
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
      <Header title="BARANG MASUK" subtitle="Data tabel barang masuk" />
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

export default BarangMasuk;

import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
// import { fetchTodos } from "state/redux/sliceBarangMasuk";
import DataGridTable from "components/table/DataGridTable";
// import { fetchReturnJB } from "state/redux/sliceReturnJB";
import { fetchReturnJB } from "state/redux/barang/barangSlice";

const ReturnJawaBali = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.barang);
  console.log("returnjawabali", data);
  useEffect(() => {
    dispatch(fetchReturnJB());
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
      field: "resi",
      headerName: "RESI",
      flex: 1,
    },
    {
      field: "waktu",
      headerName: "WAKTU",
      flex: 1,
    },
    {
      field: "tanggal",
      headerName: "TANGGAL",
      flex: 1,
      valueGetter: params => moment(params?.value).format("DD-MM-YYYY hh:mm A")
    },
    {
      field: "lokasi_scan",
      headerName: "LOKASI SCAN",
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
        title="RETURN JAWA BALI"
        subtitle="Barang retur keseluruhan hanya pengiriman pulau jawa dan pulau bali"
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

export default ReturnJawaBali;

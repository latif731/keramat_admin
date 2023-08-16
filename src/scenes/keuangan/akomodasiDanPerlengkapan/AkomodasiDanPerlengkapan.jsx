import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useDispatch, useSelector } from "react-redux";
// import { fetchAkomodasiDanPerlengkapan } from "state/redux/sliceAkomodasiDanPerlengkapan";
// import { fetchTodos } from "state/redux/sliceBarangMasuk";
// import { fetchBarangMasuk } from "state/redux/sliceBarangMasuk";
import moment from "moment";
import DataGridTable from "components/table/DataGridTable";
import { GridFooterContainer, GridPagination } from "@mui/x-data-grid";
import { fetchAkomodasiDanPerlengkapan } from "state/redux/keuangan/keuanganSlice";


const AkomodasiDanPerlengkapan = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.keuangan);
  console.log("total", data);
  useEffect(() => {
    dispatch(fetchAkomodasiDanPerlengkapan());
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
      field: "tanggal_beli",
      headerName: "TANGGAL BELI",
      flex: 1,
      valueGetter: params => moment(params?.value).format("DD-MM-YYYY hh:mm A")
    },
    {
      field: "tanggal_habis",
      headerName: "TANGGAL HABIS",
      flex: 1,
    },
    {
      field: "nama_terang",
      headerName: "NAMA TERANG",
      flex: 1,
    },
    {
      field: "bulan",
      headerName: "BULAN",
      flex: 1,
    },
    {
      field: "jumlah",
      headerName: "JUMLAH",
      flex: 1,
    },
    {
      field: "harga",
      headerName: "HARGA",
      flex: 1,
    },
    {
      field: "sub_total",
      headerName: "SUB TOTAL",
      flex: 1,
    },
    {
      field: "filter",
      headerName: "BULAN",
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















  const totalAmount = data.reduce((total, row) => total + row.sub_total,0)
  const footerRow = {
    no: "TOTAL",
        filter: totalAmount,
  }

  // const rowsWithTotalAmount = [...data, { totalAmount }];

  const CustomFooter = () => {
    return (
      <div className="custom-footer" style={{position:"relative",}}>
        <GridFooterContainer columns={columns}>
      <div className="total-amount" style={{padding:"8px",display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"space-between", position:"sticky", top:"0", zIndex:"1" , border:"none", width:"100%"}}>
        <h3 style={{paddingLeft:"20px"}}>
        Total {" "}: 
        </h3>
        {/* <h3>Keseluruhan</h3>
        <h3>{totalAmount}</h3>
        <h3>
          Bulan
        </h3> */}
        <div style={{textAlign: "end", paddingRight:"50px"}}>
        {
          data.map((total, i) => (
            <h3 key={i}>{total.total}</h3>
            ))
          }
        </div>
      </div>
          </GridFooterContainer>
      <GridPagination />
    </div>
    )
  }
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="AKOMODASI DAN PERLENGKAPAN" subtitle="Data tabel akomodasi dan perlengkapan" />
      <DataGridTable
        data={[...data, footerRow]}
        columns={columns}
        theme={theme}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearch={setSearch}
        getRowId={(rows: any) => generateRandom()}
        // components={{Footer : TotalFooter}}
        // components={{ Footer: TotalFooter }}
        TotalFooter={CustomFooter}
      />
    </Box>
  );
};

export default AkomodasiDanPerlengkapan;

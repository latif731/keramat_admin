// import React from 'react'

// const PengeluaranModalBeliBarang = () => {
//   return (
//     <div>PengeluaranModalBeliBarang</div>
//   )
// }

// export default PengeluaranModalBeliBarang

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
import DataGridTable from "components/table/DataGridTable";
import { GridFooterContainer, GridPagination } from "@mui/x-data-grid";
import { fetchHitunganModalPerbarang } from "state/redux/keuangan/keuanganSlice";

const HitunganModalPerBarang = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.keuangan);
  console.log("total", data);
  useEffect(() => {
    dispatch(fetchHitunganModalPerbarang());
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
    // {
    // //   field: "nama_barang",
    //   headerName: "NAMA BARANG",
    //   flex: 1,
    // },
    // {
    // //   field: "jumlah",
    //   headerName: "JUMLAH BARANG",
    //   flex: 1,
    // },
    // {
    // //   field: "harga",
    //   headerName: "HARGA",
    //   flex: 1,
    // },
    // {
    // //   field: "harga",
    //   headerName: "TOTAL",
    //   flex: 1,
    // },
    // {
    // //   field: "harga",
    //   headerName: "NB WARNA MERAH ADALAH BARANG LOW PASAR",
    //   flex: 1,
    // },
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



//   const totalAmount = data.reduce((total, row) => total + row.sub_total,0)
//   const footerRow = {
//     no: "TOTAL",
//     total: totalAmount,
//   }

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
        <div style={{textAlign: "end", paddingRight:"25px"}}>
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
      <Header title="PENGELUARAN MODAL BELI BARANG" subtitle="Pengeluaran Modal Beli Barang" />
      {/* <DataGridTable
        // data={[...data, footerRow]}
        data={data}
        columns={columns}
        theme={theme}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearch={setSearch}
        getRowId={(rows: any) => generateRandom()}
        // components={{Footer : TotalFooter}}
        // components={{ Footer: TotalFooter }}
        TotalFooter={CustomFooter}
      /> */}
    </Box>
  );
};

export default HitunganModalPerBarang;

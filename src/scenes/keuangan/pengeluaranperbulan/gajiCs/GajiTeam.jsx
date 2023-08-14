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
// import { fetchHitunganModalPerbarang } from "state/redux/keuangan/keuanganSlice";
import DataGridTable2 from "components/table/table2/DataGridTable2";
// import { fetchHeaderFirst } from "state/redux/header/headerSlice";
// import "./table.css"
import { fetchGajiTeam } from "state/redux/pengeluaranperbulan/gajiTeam";
import { fetchPengeluaran } from "state/redux/pengeluaranperbulan/pengeluaranPerbulanSlice";

const GajiTeam = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { gaji, isLoading, isError } = useSelector((state) => state.gajiteam);
  console.log("gajiteam", gaji);
  // const { datum, isLoading: gajiLoading, isError: errorGaji } = useSelector((state) => state.gajiteam); 
  // console.log("gaji", datum)
  useEffect(() => {
    if (gaji.length > 0 === false){
      dispatch(fetchGajiTeam());
    }
  }, [dispatch]);

//   const gajiTeam = useSelector(state => state.gajiteam)
//   console.log("gajiTeam", gajiTeam)
//   const pengeluaran = useSelector(state =>  state.pengeluaran)
//   console.log("pengeluaran", pengeluaran)

//   useEffect(() => {
//     dispatch(fetchGajiTeam())
//     dispatch(fetchPengeluaran())
//   }, [dispatch])
  
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
      field: "gaji_team",
      headerName: "GAJI TEAM",
      flex: 1,
    },
    {
      field: "april",
      headerName: "APRIL",
      flex: 1,
    },
    {
      field: "mei",
      headerName: "MEI",
      flex: 1,
    },
    {
      field: "juni",
      headerName: "JUNI",
      flex: 1,
    },
    {
      field: "juli",
      headerName: "JULI",
      flex: 1,
    },
    {
      field: "agustus",
      headerName: "AGUSTUS",
      flex: 0.5,
      sortable: true,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "september",
      headerName: "SEPTEMBER",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "oktober",
      headerName: "OKTOBER",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "november",
      headerName: "NOVEMBER",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "desember",
      headerName: "DESEMBER",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "total",
      headerName: "TOTAL",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
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
        {/* <div style={{textAlign: "end", paddingRight:"25px"}}>
        {
          data.map((total, i) => (
            <h3 key={i}>{total.total}</h3>
            ))
          }
        </div> */}
      </div>
          </GridFooterContainer>
      <GridPagination />
    </div>
    )
  }
  return (
    <Box m="1.5rem 2.5rem">
      {/* <Header title="PENGELUARAN PER BULAN" subtitle="Data Pengeluaran Per Bulan"/> */}
      {/* <div className="uniqueName" style={{marginTop:"20px"}}>
      <DataGridTable2 
      />
      </div> */}
      <DataGridTable
        // data={[...data, footerRow]}
        data={gaji}
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

export default GajiTeam;

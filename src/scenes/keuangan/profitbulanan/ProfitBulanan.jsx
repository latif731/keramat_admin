import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { fetchAkomodasiDanPerlengkapan } from "state/redux/sliceAkomodasiDanPerlengkapan";
// import { fetchTodos } from "state/redux/sliceBarangMasuk";
// import { fetchBarangMasuk } from "state/redux/sliceBarangMasuk";
import DataGridTable from "components/table/DataGridTable";
import { GridFooterContainer, GridPagination } from "@mui/x-data-grid";
// import { fetchPengeluaranModalBeliBarang } from "state/redux/keuangan/keuanganSlice";
// import { fetchBarangKotorPerHari } from "state/redux/keuangan/keuanganSlice";
import { fetchProfitBulanan } from "state/redux/keuangan/keuanganSlice";
import { fetchTotalProfitBulanan } from "state/redux/keuangan/totalProfitBulananSlice";

const ProfitBulanan = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.keuangan);
  console.log("profitbulanan", data);
  const { total, isLoading:totalLoading, isError:errorTotal } = useSelector((state) => state.total);
  console.log("total",total)
  useEffect(() => {
    dispatch(fetchProfitBulanan());
    dispatch(fetchTotalProfitBulanan())
  }, []);
//   useEffect(() => {
//     dispatch(fetchTotalProfitBulanan());
//   }, []);


  


// const [total, getTotal] = useState('')
// console.log("total", total)

// const url = "https://script.google.com/macros/s/AKfycbxPXTQxLtkJ7OyRedL_unSiCT9TvRlT8763wvr2Q61O6XAKDYpv61lG1PSy66bH66_t/exec"

// useEffect(() => {
//     getAllTotal()
// }, [])

// const getAllTotal = () => {
//     axios.get(`${url}`).then((res) => {
//         const data = res.data
//         getTotal(data)
//         // console.log("total",data)
//     })
// }



  // values to be sent to the backend
//   const [page, setPage] = useState(0);
//   const [pageSize, setPageSize] = useState(20);
//   const [sort, setSort] = useState({});
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
      field: "bulan",
      headerName: "BULAN",
      flex: 1,
    },
    {
      field: "profit_jnt",
      headerName: "PROFIT J&T",
      flex: 1,
    },
    {
      field: "profit_mau_lagi",
      headerName: "PROFIT MAU LAGI",
      flex: 1,
    },
  ];



  const totalAmount = data.reduce((total, row) => total + row.profit_jnt,0)
  const totalAmount2 = data.reduce((total, row) => total + row.profit_mau_lagi,0)
  const footerRow = {
    bulan: "TOTAL",
    profit_jnt: totalAmount,
    profit_mau_lagi: totalAmount2 
  }
//   const footerRow2 = {
//     bulan: "TOTAL",
//     profit_jnt: totalAmount,
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
        <div style={{textAlign: "end", paddingRight:"450px"}}>
        {
          total.map((totals, i) => {
            return (
                <div style={{display:"flex", gap:"470px"}} key={i}>
                <h3 key={i}>{totals.total_jnt}</h3>
                <h3 key={i}>{totals.total_maulagi}</h3>
                </div>
            )
            })
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
      <Header title="PROFIT BULANAN" subtitle="Tabel Profit Bulanan" />
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

export default ProfitBulanan;

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {makeStyles} from "@mui/styles"

function createData(
    // name, calories, fat, carbs, protein
    ) {
  return 
  { 
    // name, calories, fat, carbs, protein 
};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const useStyles = makeStyles((theme)=> ({
  table: {
    borderCollapse:'collapse',
    '& td, th' :{
      border:'1px solid white' 
    }
  }
}))

export default function DataGridTable2() {
const classes = useStyles()

//   const rows = [
//     {
//     name: "MODAL AWAL",  
//     },
//     {
//     name: "Gaji cs,Packing",  
//     },
//     {
//     name: "Buat beli parcel",  
//     },
//     {
//     name: "Total profi per bulan",  
//     },
//     {
//     name: "pembayaran ongkir dan retur bulan maret dan april",  
//     },
//     {
//     name: "uang profit yang tersisa",  
//     },
//     {
//     name: "uang profit di ambil ",  
//     },
//     {
//     name: "Jumlah pengeluaran per hari dalam satu bulan ",  
//     },
//     {
//     name: "Akses internet",  
//     },
// ]



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PENGELUARAN</TableCell>
            <TableCell align="right">JANUARI</TableCell>
            <TableCell align="right">FEBRUARI</TableCell>
            <TableCell align="right">MARET</TableCell>
            <TableCell align="right">APRIL</TableCell>
            <TableCell align="right">MEI</TableCell>
            <TableCell align="right">JUNI</TableCell>
            <TableCell align="right">JULI</TableCell>
            <TableCell align="right">AGUSTUS</TableCell>
            <TableCell align="right">SEPTEMBER</TableCell>
            <TableCell align="right">OKTOBER</TableCell>
            <TableCell align="right">NOVEMBER</TableCell>
            <TableCell align="right">DESEMBER</TableCell>
            <TableCell align="right">TOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            //   key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">ADasd</TableCell>
              {/* <TableCell align="right" scope='col'>SDASD</TableCell> */}
            </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

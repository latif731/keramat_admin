import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
// import { useGetProductsQuery } from "state/api";
// import { fetchHargaBarang } from "state/redux/sliceHargaBarang";
import { fetchHargaBarang } from "state/redux/barang/barangSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ key, no, nama, kodeBarang, hargaJual, gambar }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {nama}
        </Typography>
        <Typography variant="h5" component="div">
          {kodeBarang}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          {/* ${Number(price).toFixed(2)} */}
          Rp {hargaJual}
        </Typography>
        {/* <Rating value={rating} readOnly /> */}

        {/* <Typography variant="body2">{description}</Typography> */}
        <img
          src={gambar}
          alt="image"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </CardContent>
      <CardActions>
        {/* <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button> */}
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        {/* <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply Left: {supply}</Typography>
          <Typography>
            Yearly Sales This Year: {stat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent> */}
      </Collapse>
    </Card>
  );
};

const HargaBarang = () => {
  // const { data, isLoading } = useGetProductsQuery();
  const { data, isLoading } = useSelector((state) => state.barang);
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  useEffect(() => {
    dispatch(fetchHargaBarang());
  }, []);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="HARGA BARANG"
        subtitle="Datang Barang Ready Stok Beserta Harganya"
      />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data?.map(
            ({ no, nama_barang, kode_barang, harga_jual, gambar, index }) => (
              <Product
                key={index}
                no={no}
                nama={nama_barang}
                kodeBarang={kode_barang}
                hargaJual={harga_jual}
                gambar={gambar}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default HargaBarang;

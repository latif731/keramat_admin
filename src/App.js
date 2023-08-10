import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/databarang/hargabarang";
import BarangMasuk from "scenes/databarang/barangmasuk";
// import Transactions from "scenes/finance";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import Finance from "scenes/databarang/profitperhari";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import VipTerkirim from "scenes/databarang/vipTerkirim/VipTerkirim";
import ReturnSumatera from "scenes/databarang/returnSumatera/ReturnSumatera";
import ReturnJawaBali from "scenes/databarang/returnJawaBali/ReturnJawaBali";
import BarangReturn from "scenes/databarang/barangReturn/BarangReturn";
import ReturnTidakDikirim from "scenes/databarang/return_tidak_dikirim/ReturnTidakDikirim";
import ReturnTerkirim from "scenes/databarang/return_terkirim/ReturnTerkirim";
import HargaBarang from "scenes/databarang/hargabarang";
import ProfitPerhari from "scenes/databarang/profitperhari";
import MauLagiTerkirim from "scenes/databarang/maulagiTerkirim/MauLagiTerkirim";
import AkomodasiDanPerlengkapan from "scenes/keuangan/akomodasiDanPerlengkapan/AkomodasiDanPerlengkapan";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  console.log("aDSdfawfadfsad");
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/hargabarang" element={<HargaBarang />} />
              <Route path="/barangmasuk" element={<BarangMasuk />} />
              <Route path="/profitperhari" element={<ProfitPerhari />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/vipterkirim" element={<VipTerkirim />} />
              <Route path="/maulagiterkirim" element={<MauLagiTerkirim />} />
              <Route path="/returnsumatera" element={<ReturnSumatera />} />
              <Route path="/returnjawabali" element={<ReturnJawaBali />} />
              <Route path="/barangreturn" element={<BarangReturn />} />
              <Route
                path="/returntidakdikirim"
                element={<ReturnTidakDikirim />}
              />
              <Route path="/returnterkirim" element={<ReturnTerkirim />} />
              <Route
                path="/AkomodasiDanPerlengkapan"
                element={<AkomodasiDanPerlengkapan />}
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

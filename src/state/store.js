// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import todoReducer from "./redux/sliceBarangMasuk";
// import GlobalReducer from "state";
// import { api } from "state/api";

// export const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//     global: GlobalReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });
// setupListeners(store.dispatch);



import { configureStore } from "@reduxjs/toolkit"
import GlobalReducer from "./globalSlice"
import BarangReducer from "./redux/barang/barangSlice"
import KeuanganReducer from "./redux/keuangan/keuanganSlice"
import PengeluaranReducer from "./redux/pengeluaranperbulan/pengeluaranPerbulanSlice"
import GajiTeamReducer from "./redux/pengeluaranperbulan/gajiTeam"
import TotalBulananReducer from "./redux/keuangan/totalProfitBulananSlice"

export const store = configureStore({
    reducer: {
        global: GlobalReducer,
        barang: BarangReducer,
        keuangan: KeuanganReducer,
        pengeluaran: PengeluaranReducer,
        gajiteam :GajiTeamReducer,
        total: TotalBulananReducer
    },
});



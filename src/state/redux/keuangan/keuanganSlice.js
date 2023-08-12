import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAkomodasiDanPerlengkapan = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyBX40XXAwqjsnXCJTV7-4TpYhX1BAmPuddf_fpIj-oZPftdqPx-L2gBxhLeRnJzg62/exec"
      // "https://jsonplaceholder.typicode.com/todos"
    );
    return response.json();
  });

export const fetchPengeluaranModalBeliBarang = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxAbb1F1Ix7KM9FipMU0E48vPpwCRZ76sxCj8NdySoV7V-1Z_dAkdbKfvx9frcccco/exec"
      // "https://jsonplaceholder.typicode.com/todos"
    );
    return response.json();
  });

export const fetchHitunganModalPerbarang = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyZ_aJWHQg5Y8FpUozIIpXO7Bqj-dpw6tU5dTlWBTqmMTealReXxU1Ltmv7ecweOxV8/exec"
      // "https://jsonplaceholder.typicode.com/todos"
    );
    return response.json();
  });

  const keuanganSlice = createSlice({
    name: "keuangan",
    initialState: {
      isLoading: false,
      data: [],
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchAkomodasiDanPerlengkapan.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchAkomodasiDanPerlengkapan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchAkomodasiDanPerlengkapan.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    },
    extraReducers: (builder) => {
      builder.addCase(fetchPengeluaranModalBeliBarang.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchPengeluaranModalBeliBarang.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchPengeluaranModalBeliBarang.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    },
    extraReducers: (builder) => {
      builder.addCase(fetchHitunganModalPerbarang.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchHitunganModalPerbarang.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchHitunganModalPerbarang.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    },
  });
  
  export default keuanganSlice.reducer;
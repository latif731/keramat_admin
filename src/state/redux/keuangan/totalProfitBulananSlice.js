// import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTotalProfitBulanan = createAsyncThunk("fetchTotal", async () => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxPXTQxLtkJ7OyRedL_unSiCT9TvRlT8763wvr2Q61O6XAKDYpv61lG1PSy66bH66_t/exec"
      // "https://jsonplaceholder.typicode.com/todos"
    );
    return response.json();
  });

const totalProfitBulananSlice = createSlice({
    name:"totalbulanan",
    initialState: {
        isLoading: false,
        total: [],
        isError: false,
      },
        extraReducers: (builder) => {
      builder.addCase(fetchTotalProfitBulanan.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchTotalProfitBulanan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.total = action.payload;
      });
      builder.addCase(fetchTotalProfitBulanan.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    },
})

export default totalProfitBulananSlice.reducer;
import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchBarangReturTerkirim = createAsyncThunk(
  "fetchTodos",
  async () => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyScOtxlwwpuNh5ennoB3eS0L0TtYf7ZSQ2XxsfcMChqGwy-7k-PwtoaUQPNvxaXpkm/exec"
      // "https://jsonplaceholder.typicode.com/todos"
    );
    return response.json();
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBarangReturTerkirim.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBarangReturTerkirim.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBarangReturTerkirim.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;

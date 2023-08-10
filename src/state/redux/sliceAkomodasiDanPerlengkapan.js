import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchAkomodasiDanPerlengkapan = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyBX40XXAwqjsnXCJTV7-4TpYhX1BAmPuddf_fpIj-oZPftdqPx-L2gBxhLeRnJzg62/exec"
    // "https://jsonplaceholder.typicode.com/todos"
  );
  return response.json();
});

const todoSlice = createSlice({
  name: "todo",
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
});

export default todoSlice.reducer;

import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchBarangMasuk = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyL8ZhMImX57cxSEPl-oXqHqH24i9ASe4oW-xdHCofPGFz3Dz27x5ukWOxvoeReV-mC/exec"
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
    builder.addCase(fetchBarangMasuk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBarangMasuk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBarangMasuk.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;

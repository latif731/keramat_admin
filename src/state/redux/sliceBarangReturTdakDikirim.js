import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchBarangReturTidakDikirim = createAsyncThunk(
  "fetchTodos",
  async () => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbw5MZJx8VjW6sjmPA3zANHSV9l1YC7Pzqoi2FVSDLttwW-fm_5fMjiie_phepTo9sbs/exec"
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
    builder.addCase(fetchBarangReturTidakDikirim.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBarangReturTidakDikirim.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBarangReturTidakDikirim.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;

import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchProfitPerhari = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxqOuhFaz1Dy9-WKhVrRrW0A07CA8XYkS8_V6XO96x05XZ_1IzVT8dQsRHm4xaqt3NF/exec"
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
    builder.addCase(fetchProfitPerhari.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfitPerhari.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProfitPerhari.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;

import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchVipTerkirim = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwT2xcg0ZzcclvdQfKLK-1KOmlE1V9A3ovjSNHbw0zpMVsFcw8wGl1ROnN3TO9FGwRD/exec"
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
    builder.addCase(fetchVipTerkirim.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVipTerkirim.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchVipTerkirim.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;

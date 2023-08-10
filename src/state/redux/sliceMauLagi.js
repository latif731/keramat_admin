import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchMauLagi = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycby3vGSVotvpV_lwvmsazbVzBGPEfYe9O0YZ6U-NETY6aSsyhXc9mMpjkL3zFHJSGm-L/exec"
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
    builder.addCase(fetchMauLagi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMauLagi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMauLagi.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;

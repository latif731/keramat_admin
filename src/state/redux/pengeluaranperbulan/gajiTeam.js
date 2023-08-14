import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGajiTeam = createAsyncThunk("gajiteam", async () => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxRUOUdYqWlYTnKBqPh60GD-SjWlhEIveFR_ICGKIndizbGWSXut_qDXYdH_DP1DF6O/exec"
      // "https://jsonplaceholder.typicode.com/todos"
    );
    return response.json();
  });

  const gajiTeamSlice = createSlice({
    name: "gajiTeam",
    initialState: {
      isLoading: false,
      gaji: [],
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchGajiTeam.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchGajiTeam.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gaji = action.payload;
      });
      builder.addCase(fetchGajiTeam.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    },
  });
  
  export default gajiTeamSlice.reducer;
import { stepButtonClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPengeluaran = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=FZNnatN3PhdLWXgn7xgzdEbkdf81An2ryYHdUaSw0_V7sdc4kUjrEOAix0MImlWDIvQpTDikBM2W5PbMenjzIlCFwJgI8VL-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAb9067ZX5DITLpM0HPD8QMryakwxHxhx3xvHDR4A487Esgjdb59jcYXnhXPb1NGmfRcbL2NK9KWeSJsMceHi_ctBC4PxbnNBw&lib=MfTcRLHaMvrSm4YWcbjG0YTwaezBb1gA8"
      // "https://jsonplaceholder.typicode.com/todos"
    );
    return response.json();
  });

  const pengeluaranSlice = createSlice({
    name: "pengeluaran",
    initialState: {
      isLoading: false,
      data: [],
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchPengeluaran.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchPengeluaran.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchPengeluaran.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    },
  });
  
  export default pengeluaranSlice.reducer;
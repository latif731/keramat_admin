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

export const fetchBarangRetur = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxHjF0o1PTBcMte0p37eHi9a7YuPJ4BMouI8ygX1PG2HTMR4DhNAkN9oW1CuKnm2TNS/exec"
    // "https://jsonplaceholder.typicode.com/todos"
  );
  return response.json();
});

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

export const fetchHargaBarang = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycby4dTZ1O9DBs_a_0kj4iVfxa990O7D9HcfgpEaLH2RAyn5O1YUzbBRJCaQ22izz2Wot/exec"
    // "https://jsonplaceholder.typicode.com/todos"
  );
  return response.json();
});

export const fetchMauLagi = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycby3vGSVotvpV_lwvmsazbVzBGPEfYe9O0YZ6U-NETY6aSsyhXc9mMpjkL3zFHJSGm-L/exec"
    // "https://jsonplaceholder.typicode.com/todos"
  );
  return response.json();
});

export const fetchProfitPerhari = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxqOuhFaz1Dy9-WKhVrRrW0A07CA8XYkS8_V6XO96x05XZ_1IzVT8dQsRHm4xaqt3NF/exec"
    // "https://jsonplaceholder.typicode.com/todos"
  );
  return response.json();
});

export const fetchReturnJB = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbzANkWGQjChQsv4xMYMOY9f9MgNY9j3GvwMmJrIsf8M44d8aFmZ1vXkc9s-b47n4qM/exec"
    // "https://jsonplaceholder.typicode.com/todos"
  );
  return response.json();
});

export const fetchVipTerkirim = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwT2xcg0ZzcclvdQfKLK-1KOmlE1V9A3ovjSNHbw0zpMVsFcw8wGl1ROnN3TO9FGwRD/exec"
    // "https://jsonplaceholder.typicode.com/todos"
  );
  return response.json();
});

const barangSlice = createSlice({
  name: "barang",
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
  extraReducers: (builder) => {
    builder.addCase(fetchBarangRetur.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBarangRetur.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBarangRetur.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
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
  extraReducers: (builder) => {
    builder.addCase(fetchHargaBarang.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHargaBarang.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchHargaBarang.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
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
  extraReducers: (builder) => {
    builder.addCase(fetchReturnJB.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReturnJB.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchReturnJB.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
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

export default barangSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk to Fetch Products
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://flip-backend-oi9l.onrender.com/data");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
});

// Product Slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [], // All products
    filteredItems: [],
    isLoading: false,
    isError: false,
    error: null, // Store error message
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
    query: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    searchProducts: (state, action) => {
      const { products, query } = action.payload;

      if (!query.trim()) {
        state.searchResults = []; // Clear results when search is empty
        return;
      }

      state.searchResults = products.filter((product) =>
        ["name", "brand", "category"].some((key) =>
          product[key]?.toLowerCase().includes(query.toLowerCase()) // ✅ Safe optional chaining
        )
      );
    },
  },
});

export const { setSearchQuery, searchProducts } = searchSlice.actions;
export default searchSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API Base URL
const API_URL = "http://localhost:5000";

// Fetch Cart Items
export const fetchCart = createAsyncThunk("cart/fetchCart", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_URL}/cart`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    if (!response.ok) return rejectWithValue(data.error || "Failed to fetch cart");

    localStorage.setItem("cartItems", JSON.stringify(data)); // ✅ Store in localStorage
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Add to Cart
export const addToCart = createAsyncThunk("cart/addToCart", async (product, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) return rejectWithValue("User not logged in. Please login first.");

    const response = await fetch(`${API_URL}/cart/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ product }),
    });

    const data = await response.json();
    if (!response.ok) {
      alert(data.error || "Failed to add to cart"); // ✅ Show alert
      return rejectWithValue(data.error || "Failed to add to cart");
    }

    return { ...product, quantity: 1 };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


// ✅ Update Cart Quantity
export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      console.log("Dispatching updateQuantity for:", productId, "with quantity:", quantity); // ✅ Debugging log

      const token = localStorage.getItem("authToken");
      const response = await fetch(`${API_URL}/cart/update/${productId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ quantity }),
      });

      console.log("API Response Status:", response.status); // ✅ Debugging log

      const data = await response.json();
      console.log("API Response Data:", data); // ✅ Debugging log

      if (!response.ok) return rejectWithValue(data.error || "Failed to update quantity");

      return { productId, quantity };
    } catch (error) {
      console.error("Error in updateQuantity:", error);
      return rejectWithValue(error.message);
    }
  }
);




// Remove from Cart
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await fetch(`${API_URL}/cart/remove/${productId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.error || "Failed to remove from cart");
      }

      return productId; // ✅ Return removed product ID
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  isLoading: false,
  isError: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => { state.isLoading = true; })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        localStorage.setItem("cartItems", JSON.stringify(action.payload));
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      })
      .addCase(addToCart.rejected, (state, action) => { state.isError = action.payload; })

      .addCase(updateQuantity.fulfilled, (state, action) => {
        const { productId, quantity } = action.payload;
        const item = state.items.find((item) => item._id === productId);
        if (item) item.quantity = quantity;
        localStorage.setItem("cartItems", JSON.stringify(state.items)); // ✅ Update Local Storage
      })
      .addCase(updateQuantity.rejected, (state, action) => { state.isError = action.payload; })

      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      })
      .addCase(removeFromCart.rejected, (state, action) => { state.isError = action.payload; });
  },
});

export default cartSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://flip-backend-oi9l.onrender.com";

// Login User (Request OTP)
export const loginUser = createAsyncThunk("user/login", async (email, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || "Login failed");
  }
});

// Verify OTP and Get Token
export const verifyOtp = createAsyncThunk("user/verifyOtp", async ({ email, otp }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/verify-otp`, { email, otp });
    
    console.log("Server Response:", response.data); // 👈 Check this

    const token = response.data.token;
    
    if (!token) {
      console.error("No token received from server!");
      return rejectWithValue("Invalid token received");
    }

    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email);

    return { email, token };
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || "Invalid OTP");
  }
});


// Logout User
export const logoutUser = createAsyncThunk("user/logout", async () => {
  // ✅ Clear token from localStorage
  localStorage.removeItem("authToken");
  localStorage.removeItem("userEmail");
  return null;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: localStorage.getItem("userEmail") || null, // Load from localStorage
    token: localStorage.getItem("authToken") || null, // Load from localStorage
    isLoading: false,
    isError: null,
  },
  reducers: {}, // No local reducers needed
  extraReducers: (builder) => {
    builder
      // Handle Login (Request OTP)
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })

      // Handle OTP Verification (Successful Login)
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isError = action.payload;
      })

      // Handle Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.email = null;
        state.token = null;
      });
  },
});

export default userSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import searchReducer from "./searchSlice";


const store = configureStore({
  reducer: {  
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
    search: searchReducer,

  },
});

export default store;

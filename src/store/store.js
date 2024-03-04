import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import shoppingCartReducer from "./shoppingCartSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        shoppingCart: shoppingCartReducer
    }
});
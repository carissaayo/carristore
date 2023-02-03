import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import productsReducer from "./reducers/productSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,

  },
});

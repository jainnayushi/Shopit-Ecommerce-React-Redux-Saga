import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  userData: authReducer,
  products: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
});

export default rootReducer;

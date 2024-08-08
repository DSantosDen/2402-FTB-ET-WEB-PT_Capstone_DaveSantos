//imports from redux store and cart
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./actions/cart";
import userReducer from "./actions/user";

/*the Redux store is created by the {configureStore} import then,
the store is configured by the cartReducer, which will handle all 
updates related to the cart slice of the state.
Reference: reducers take the state and action as arguments
*/
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

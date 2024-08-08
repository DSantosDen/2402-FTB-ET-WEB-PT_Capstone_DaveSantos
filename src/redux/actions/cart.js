//imports
import { createSlice } from "@reduxjs/toolkit";

//
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: null,
    products: [],
  },
  reducers: {
    addToCart(state, action) {
      state.products.push({
        ...action.payload,
      });
    },
    deleteItem(state, action) {
      const filterProduct = state.products.filter(
        (products) => products.id !== action.payload
      );
      state.products = filterProduct;
    },
    setCart(state, action) {
      state.products = [...action.payload];
    },
    setCartId(state, action) {
      state.cartId = action.payload;
    },
  },
});

export const { addToCart, deleteItem, setCart, setCartId } = cartSlice.actions;
export default cartSlice.reducer;

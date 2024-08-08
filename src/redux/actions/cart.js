//imports
import { createSlice } from "@reduxjs/toolkit";

//
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push({
        ...action.payload,
      });
    },
    deleteItem(state, action) {
      const filterProduct = state.filter(
        (products) => products.id !== action.payload
      );
      state = filterProduct;
    },
    setCart(state, action) {
      state.push(...action.payload);
    },
  },
});

export const { addToCart, deleteItem, setCart } = cartSlice.actions;
export default cartSlice.reducer;

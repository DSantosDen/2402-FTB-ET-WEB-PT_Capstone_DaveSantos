//imports
import { createSlice } from "@reduxjs/toolkit";

//

function loadCart() {
  try {
    let strCart = localStorage.getItem("cart");
    let cart = JSON.parse(strCart);
    return cart?.products || [];
  } catch {
    return [];
  }
}
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: null,
    products: loadCart(),
  },
  reducers: {
    addToCart(state, action) {
      let id = action.payload.id;
      let index = state.products.findIndex((obj) => obj.id == id);
      if (index == -1) {
        state.products.push({
          ...action.payload,
        });
      } else {
        state.products[index].quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteItem(state, action) {
      const filterProduct = state.products.filter(
        (products) => products.id !== action.payload
      );
      state.products = [...filterProduct];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setCart(state, action) {
      state.products = [...action.payload];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setCartId(state, action) {
      state.cartId = action.payload;
    },
  },
});

export const { addToCart, deleteItem, setCart, setCartId } = cartSlice.actions;
export default cartSlice.reducer;

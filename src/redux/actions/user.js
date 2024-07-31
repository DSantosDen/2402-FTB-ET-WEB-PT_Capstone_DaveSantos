/*imports from redux toolkit. 
Redux offers centralized state management, predictable state updates, 
easier debugging with Redux DevTools, and improved performance by
 minimizing state updates and reducing prop drilling.
 READ: https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/
*/
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "user",
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
  },
});

export const { addToCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;

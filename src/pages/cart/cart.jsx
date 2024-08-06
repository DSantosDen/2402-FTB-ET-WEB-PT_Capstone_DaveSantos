/*To use redux I need actions, reducers and store
https://redux.js.org/tutorials/fundamentals/part-5-ui-react#what-youve-learned
https://betterprogramming.pub/react-hooks-redux-basics-edition-6f95411a7754
 */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Cart() {
  //local state for managing loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //redux actions to make changes from the redux store
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);
  const items = useSelector((state) => state.cart.items);

  /*
  react hook to fetch cart items, if userId is true
  else error message is displayed
  */
  useEffect(() => {
    if (userId) {
      fetchCartItems();
    } else {
      setLoading(false);
      setError("User not logged in");
    }
  }, [userId]);

  //fetch cart items from the API
  const fetchCartItems = async () => {
    try {
      //GET request to the API to fetch cart items for the user
      const response = await axios.get(
        `https://fakestoreapi.com/carts/${userId}`
      );
      const cartItems = response.data.products;
      console.log(cartItems);
      // dispatch action to update Redux store with fetched cart items
      dispatch(fetchCartItemsSuccess(cartItems));
      setLoading(false); // Set loading to false after successful fetch
    } catch (err) {
      setLoading(false); // Set loading to false in case of error
      setError("Failed to fetch cart items"); // Set error message
      dispatch(fetchCartItemsFailure(err.message)); // Dispatch action to update Redux store with error
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="border-t border-gray-300 pt-4">
          {items.map((item) => (
            <div key={item.id} className="flex mb-4">
              <div className="flex-shrink-0">
                <img
                  className="h-24 w-24"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
              <div className="ml-4 flex-grow">
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-gray-500">{item.size}</div>
                <div className="text-gray-700 mt-2">Price: {item.price}</div>
                <div className="text-gray-500">{item.flavor}</div>
                <div className="text-gray-500">{item.deliveryDate}</div>
                <div className="text-red-500">{item.stock}</div>
                <div className="mt-2">
                  <label className="block text-gray-700">Qty:</label>
                  <select className="border rounded px-2 py-1 mt-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <button className="text-blue-500">Delete</button>
                <button className="text-blue-500 mt-2">Save for later</button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 pt-4 mt-4">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Subtotal (2 items):</span>
            <span className="text-lg font-semibold">$50.46</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

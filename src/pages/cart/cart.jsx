/*To use redux I need actions, reducers and store
https://redux.js.org/tutorials/fundamentals/part-5-ui-react#what-youve-learned
https://betterprogramming.pub/react-hooks-redux-basics-edition-6f95411a7754
 */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FaMinus, FaPlus } from "react-icons/fa";
import { setCart } from "../../redux/actions/cart";
function Cart() {
  //redux actions to make changes from the redux store
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const handleAdd = (productId) => {
    let temp = [...cart];
    console.log(cart);
    let index = temp.findIndex((obj) => obj.productId == productId);
    console.log({ index });
    if (index == -1) return alert("product not found");
    temp[index].quantity = temp[index].quantity + 1;
    console.log(temp);
    dispatch(setCart(temp));
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="border-t border-gray-300 pt-4">
          {cart?.map((item) => (
            <div key={item.id} className="flex mb-4">
              <div className="flex-shrink-0">
                <img className="h-24 w-24" src={item.image} alt={item.title} />
              </div>
              <div className="ml-4 flex-grow">
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-gray-500">{item.size}</div>
                <div className="text-gray-700 mt-2">Price: {item.price}</div>
                <div className="text-gray-500">{item.flavor}</div>
                <div className="text-gray-500">{item.deliveryDate}</div>
                <div className="text-red-500">{item.stock}</div>
                <div className="mt-2">
                  <button onClick={() => handleAdd(item.productId)}>
                    <FaPlus />
                  </button>
                  <input
                    readOnly
                    value={item.quantity}
                    className="bg-[#eeee] text-center w-[40px] h-[30px] mx-[15px] rounded-sm"
                  />
                  <button>
                    <FaMinus />
                  </button>
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

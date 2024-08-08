//imports
import axios from "axios";

//function to add via POST request to API
export const add = (userId, products) => {
  return axios.post("https://fakestoreapi.com/carts", {
    userId: userId,
    products: products,
  });
};

//function to update via POST request to API
export const update = (userId, products) => {
  return axios.post("https://fakestoreapi.com/carts", {
    userId: userId,
    products: products,
  });
};

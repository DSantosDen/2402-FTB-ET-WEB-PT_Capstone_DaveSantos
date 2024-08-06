import axios from "axios";

export const add = (userId, products) => {
  return axios.post("https://fakestoreapi.com/carts", {
    userId: userId,
    products: products,
  });
};

export const update = (userId, products) => {
  return axios.post("https://fakestoreapi.com/carts", {
    userId: userId,
    products: products,
  });
};

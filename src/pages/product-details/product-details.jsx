import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const ProductDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log({ id });
  useEffect(() => {
    window.scroll(0, 0);
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products/" + id);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log({ data });

  return (
    <div className="max-w-sm rounded overflow-hidden mx-auto pt-10 my-20 bg-white">
      <img className="h-[400px] mx-auto" src={data.image} alt={data.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.description}</p>
        <div className="font-bold text-lg mb-2">${data.price}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Category: {data.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Rating: {data.rating?.rate}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Reviews: {data.rating?.count}
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;

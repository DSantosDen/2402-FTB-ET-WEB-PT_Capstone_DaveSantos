//imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/*component to initialize data using useState
extract id using useParams
the useEffect hook is used to fetch data when components mounts
move to top of the page using window scroll
calls the function fetchDetail
 */
const ProductDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log({ id });
  useEffect(() => {
    window.scroll(0, 0);
    fetchDetail();
  }, []);

  /*function creates a GET request to retrieve product details
  from API using axios, product details update the data state
  with setData
   */
  const fetchDetail = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products/" + id);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log({ data });
  /*rendering of the product details
  (image, title, description, price, category, and rating)*/
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

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productimag from "../../assets/img/sample01_Backpack_Image.jpg";

const ProductCard = ({ id, title, img, price }) => {
  const navigate = useNavigate();
  const gotoDetail = () => {
    navigate("/product/" + id);
  };

  return (
    <div className="w-[200px]  p-2 pt-0  m-2 rounded-md bg-white dark:bg-gray-800">
      <nav className="flex mb-4" aria-label="Breadcrumb"></nav>
      <div className="flex flex-col">
        <img
          onClick={gotoDetail}
          src={img}
          alt={title}
          className="w-full hover:cursor-pointer h-[200px] rounded-lg"
        />
        <div className="flex flex-col mt-4 ">
          <h1
            onClick={gotoDetail}
            className="text-sm hover:underline hover:cursor-pointer font-bold text-gray-900 dark:text-white mb-4"
          >
            {title}
          </h1>
          <div className="flex justify-between items-center">
            <span className="text-md font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <button className="ml-4 bg-blue-600 text-sm text-white font-semibold py-1 px-2 rounded-lg hover:bg-blue-700">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

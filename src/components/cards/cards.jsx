//imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cart";
import { add } from "../../api/cart";

// Defining the ProductCard component, which accepts product details as props
const ProductCard = ({ id, title, img, price }) => {
  // Using useNavigate hook to navigate programmatically
  const navigate = useNavigate();

  // Accessing the cart state from the Redux store.
  const cart = useSelector((state) => state.cart);

  // Extracting userId from the user state in the Redux store
  const { userId } = useSelector((state) => state.user);

  // Using useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Function to navigate to the product details page
  const gotoDetail = () => {
    navigate("/product/" + id);
  };

  // Function to handle adding the product to the cart
  const handleAddtoCart = () => {
    if (!userId) {
      return (window.location.href = "/login");
    }
    // Dispatching the addToCart action to update the cart state in Redux store
    dispatch(
      addToCart({
        id,
        title,
        img,
        price,
        quantity: 1,
      })
    );

    // Adding the product to the cart in the backend
    add(userId, [
      ...cart,
      {
        id,
        title,
        img,
        price,
      },
    ]);
  };

  // Rendering the product card
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
            <button
              onClick={handleAddtoCart}
              className="ml-4 bg-blue-600 text-sm text-white font-semibold py-1 px-2 rounded-lg hover:bg-blue-700"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

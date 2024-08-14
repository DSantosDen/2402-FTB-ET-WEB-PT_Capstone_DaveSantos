//imports
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Junk_Vault_Logo_White.png";
import { FaCaretDown, FaCartPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { setUserID } from "../../redux/actions/user";
import axios from "axios";
import { setCart, setCartId } from "../../redux/actions/cart";

//navigation bar component
const Navbar = () => {
  {
    /*cart, token and userId access the cart state from redux store.
    dispatch action allows dispatching to the redux store 
    */
  }
  const cart = useSelector((state) => state.cart.products);
  const { token, userId } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  {
    /*1st useEffect hook runs when token or userId change. Decodes JWT token
    to get userId and sets it in the redux store.
    2ns useEffect hook runs when userId changes. It calls "loadCart" to load
    the user's cart 
     */
  }
  useEffect(() => {
    try {
      if (token && !userId) {
        const { sub } = jwtDecode(token);
        dispatch(setUserID(sub));
      }
    } catch (e) {
      console.log(e);
    }
  }, [token, userId]);

  //tailwind cose used to style and position logo, cart icon, and navigation links
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8" alt="Junk_Vault_Logo_White" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Junk Vault
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to={userId ? "/cart" : "/login"}
            className="text-white mr-8 text-[25px] relative"
          >
            <div className="bg-red-600 w-[15px] h-[15px] text-white absolute right-[-8px] top-[-4px] text-[10px] font-bold grid place-content-center rounded-full">
              {cart.length}
            </div>
            <FaCartShopping />
          </Link>
          {token ? null : (
            <Link
              to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </Link>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/*  <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Jewelery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Men's clothing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Women's clothing
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

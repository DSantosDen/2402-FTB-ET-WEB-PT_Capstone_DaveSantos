//imports
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

/*function component calls two props - gets the state of
category, min_price, max_price, and a handler to close the card
with handleCloseFilterPopup */
const FilterPopup = ({ customFilter, handleCloseFilterPopup }) => {
  const [category, setCategory] = useState("");
  const [min_price, setMinPrice] = useState("");
  const [max_price, setMaxPrice] = useState("");

  //event handler
  const handleClick = () => {
    customFilter(category, min_price, max_price);
    handleCloseFilterPopup();
  };

  //function to reset the filter and closes the filter popup
  const reset = () => {
    customFilter(undefined, undefined, undefined);
    handleCloseFilterPopup();
  };

  //tailwind code used to format the card and the close button
  return (
    <div className="w-full h-[100vh] fixed bg-[#00000082] flex justify-center ">
      <div className="bg-white relative max-w-[400px] h-[400px] rounded-md w-full mt-[10%]">
        <button
          onClick={handleCloseFilterPopup}
          className="w-[25px] h-[25px] grid place-content-center border border-1 rounded-full bg-white border-black absolute top-[-10px] right-[-1px]"
        >
          <FaTimes />
          {/*tailwind code used for category buttons, onClick changes button color
          and updates the state*/}
        </button>
        <div>
          <div className="mt-5">
            <button
              onClick={() => {
                setCategory("jewelery");
              }}
              className={`btn ${
                category == "jewelery" ? "bg-blue-600" : "bg-slate-300"
              } px-2 py-1 m-2`}
            >
              Jewerlery
            </button>
            <button
              onClick={() => {
                setCategory("electronics");
              }}
              className={`btn ${
                category == "electronics" ? "bg-blue-600" : "bg-slate-300"
              } px-2 py-1 m-2`}
            >
              Electronics
            </button>
            <button
              onClick={() => {
                setCategory("men's clothing");
              }}
              className={`btn ${
                category == "men's clothing" ? "bg-blue-600" : "bg-slate-300"
              } px-2 py-1 m-2`}
            >
              Men's Clothing
            </button>
            <button
              onClick={() => {
                setCategory("women's clothing");
              }}
              className={`btn ${
                category == "women's clothing" ? "bg-blue-600" : "bg-slate-300"
              } px-2 py-1 m-2`}
            >
              Women's Clothing
            </button>
          </div>
          {/*tailwind code used for min and max price input fields*/}
          <div>
            <div className="ml-2 mt-5">
              <label>Min Price</label>
              {/*attributes to handle inputs from both input fields:
              numbers only, guide to user, event handler.
              event object (e) gets value from input converts it to string,
              convert string value to floating number, then variable is updated
              */}
              <input
                type="number"
                placeholder="Enter Min Price"
                onChange={(e) => setMinPrice(parseFloat(e.target.value))}
                className="bg-slate-200 block h-[30px] px-2 mt-1"
              />
            </div>
            <div className="ml-2 mt-5">
              <label>Max Price</label>
              <input
                type="number"
                onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
                placeholder="Enter Max Price"
                className="bg-slate-200 block h-[30px] px-2 mt-1"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-1">
          <button
            onClick={reset}
            className="text-sm mr-3 cursor-pointer  text-black py-2 px-4  m-2 rounded-md"
          >
            Reset
          </button>
          <button
            onClick={handleClick}
            className="text-sm bg-blue-600 text-white py-2 px-4  m-2 rounded-md"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
export default FilterPopup;

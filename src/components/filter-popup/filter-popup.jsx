import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const FilterPopup = ({ customFilter, handleCloseFilterPopup }) => {
  const [category, setCategory] = useState("category");
  const [min_price, setMinPrice] = useState(1);
  const [max_price, setMaxPrice] = useState(1);

  const handleClick = () => {
    customFilter(category, min_price, max_price);
    handleCloseFilterPopup();
  };

  return (
    <div className="w-full h-[100vh] fixed bg-[#00000082] flex justify-center ">
      <div className="bg-white relative max-w-[400px] h-[400px] rounded-md w-full mt-[10%]">
        <button
          onClick={handleCloseFilterPopup}
          className="w-[25px] h-[25px] grid place-content-center border border-1 rounded-full bg-white border-black absolute top-[-10px] right-[-1px]"
        >
          <FaTimes />
        </button>
        <div>
          <div className="mt-5">
            <button
              onClick={() => {
                setCategory("Category1");
                setSortType(1);
              }}
              className="btn bg-slate-300 px-2 py-1 m-2 "
            >
              Category1
            </button>
            <button
              onClick={() => {
                setSortBy("Category2");
                setSortType(1);
              }}
              className="btn bg-slate-300 px-2 py-1 m-2 "
            >
              Category2
            </button>
            <button
              onClick={() => {
                setSortBy("Category3");
                setSortType(1);
              }}
              className="btn bg-slate-300 px-2 py-1 m-2 "
            >
              Category3
            </button>
            <button className="btn bg-slate-300 px-2 py-1 m-2 ">
              Category4
            </button>
          </div>
          <div>
            <div className="ml-2 mt-5">
              <label>Min Price</label>
              <input
                placeholder="Enter Min Price"
                className="bg-slate-200 block h-[30px] px-2 mt-1"
              />
            </div>
            <div className="ml-2 mt-5">
              <label>Max Price</label>
              <input
                placeholder="Enter Max Price"
                className="bg-slate-200 block h-[30px] px-2 mt-1"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-1">
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

import { useState } from "react";

const SortPopup = ({ customeSort }) => {
  const [sortBy, setSortBy] = useState("price");
  const [sortType, setSortType] = useState(1);

  const handleClick = () => {
    customeSort(sortBy, sortType);
  };
  return (
    <div className="w-full h-[100vh] fixed bg-[#00000082] flex justify-center ">
      <div className="bg-white relative max-w-[400px] h-[400px] rounded-md w-full mt-[10%]">
        <div>
          <h4 className="mt-4 ml-2">Title</h4>
          <button
            onClick={() => {
              setSortBy("title");
              setSortType(1);
            }}
            className={`text-xs ${
              sortBy == "title" && sortType == 1
                ? "bg-blue-600"
                : "bg-slate-400"
            }   text-white py-1 px-2  m-2 rounded-md`}
          >
            Title Sort A-Z
          </button>
          <button
            onClick={() => {
              setSortBy("title");
              setSortType(-1);
            }}
            className={`text-xs ${
              sortBy == "title" && sortType == -1
                ? "bg-blue-600"
                : "bg-slate-400"
            }   text-white py-1 px-2  m-2 rounded-md`}
          >
            Title Sort Z-A
          </button>
        </div>
        <hr className="mt-2" />
        <div>
          <h4 className="mt-2 ml-2">Price</h4>
          <button
            onClick={() => {
              setSortBy("price");
              setSortType(-1);
            }}
            className={`text-xs ${
              sortBy == "price" && sortType == -1
                ? "bg-blue-600"
                : "bg-slate-400"
            }   text-white py-1 px-2  m-2 rounded-md`}
          >
            Price: Low - High
          </button>
          <button
            onClick={() => {
              setSortBy("price");
              setSortType(1);
            }}
            className={`text-xs ${
              sortBy == "price" && sortType == 1
                ? "bg-blue-600"
                : "bg-slate-400"
            }   text-white py-1 px-2  m-2 rounded-md`}
          >
            Price : High - Low
          </button>
        </div>

        <div className="absolute bottom-1 right-0">
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
export default SortPopup;

import { useEffect, useState } from "react";
import Card from "../../components/cards/cards";
import axios from "axios";
import SortPopup from "../../components/sort-popup/sort-popup";
import FilterPopup from "../../components/filter-popup/filter-popup";

function Home() {
  const [ogdata, setOgData] = useState([]);
  const [data, setData] = useState([]);
  const [showSortingPopup, setShowSortingPopup] = useState(false);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
    setOgData(res.data);
  };

  function customSort(sortBy, sortType) {
    let sortedData = [];
    if (typeof ogdata[0][sortBy] == "number") {
      if (sortType == 1) {
        sortedData = ogdata.sort((a, b) => b[sortBy] - a[sortBy]);
      } else {
        sortedData = ogdata.sort((a, b) => a[sortBy] - b[sortBy]);
      }
    } else {
      if (sortType == 1) {
        sortedData = ogdata.sort((a, b) => b[sortBy] < a[sortBy]);
      } else {
        sortedData = ogdata.sort((a, b) => a[sortBy] < b[sortBy]);
      }
    }
    console.log(sortedData, sortBy);
    setData([...sortedData]);
  }

  const handleCloseSortPopup = () => {
    setShowSortingPopup(false);
  };
  const handleCloseFilterPopup = () => {
    setShowFilterPopup(false);
  };
  const customFilter = (category, min_price, max_price) => {
    let result = ogdata;
    if (category) {
      result = result.filter((obj) => obj.category == category);
    }

    if (min_price) {
      result = result.filter((obj) => obj.price >= min_price);
    }

    if (max_price) {
      result = result.filter((obj) => obj.price <= max_price);
    }
    setData([...result]);
  };
  return (
    <>
      {showFilterPopup && (
        <FilterPopup
          customFilter={customFilter}
          handleCloseFilterPopup={handleCloseFilterPopup}
        />
      )}
      <div className="flex justify-end">
        <button
          onClick={() => setShowFilterPopup(true)}
          className="bg-gray-300 text-sm px-5 py-2 rounded-sm my-2 mr-2"
        >
          Filter
        </button>
      </div>
      {showSortingPopup && (
        <SortPopup
          customSort={customSort}
          handleCloseSortPopup={handleCloseSortPopup}
        />
      )}
      <div className="flex justify-end">
        <button
          onClick={() => setShowSortingPopup(true)}
          className="bg-gray-300 text-sm px-5 py-2 rounded-sm my-2 mr-2"
        >
          Sort
        </button>
      </div>

      <div className="flex flex-wrap mx-auto justify-center">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            img={item.image}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
}

export default Home;

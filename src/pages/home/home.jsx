//imports for useEffect and useState, axios and pages
import { useEffect, useState } from "react";
import Card from "../../components/cards/cards";
import axios from "axios";
import SortPopup from "../../components/sort-popup/sort-popup";
import FilterPopup from "../../components/filter-popup/filter-popup";

/*using useState to define state variables ogdata=raw api data, and
data=sorted data results.
Default states for variables are empty arrays or booleans set to false
useEffect hook used to fetch data from API
*/
function Home() {
  const [ogdata, setOgData] = useState([]);
  const [data, setData] = useState([]);
  const [showSortingPopup, setShowSortingPopup] = useState(false);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  /*function makes a GET request to API using AXIOS, then fetched data
  is stored in the data and ogdata variables
   */
  const fetchData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
    setOgData(res.data);
  };

  /*function helps to sort data by price and description.
  default variable for sorteData is an empty array.
  Type checking using sortBy to check value is of type "number"
  if value is number, sort descending else descending.

  */
  function customSort(sortBy, sortType) {
    let sortedData = ogdata;
    if (typeof ogdata[0][sortBy] == "number") {
      if (sortType == 1) {
        sortedData.sort((a, b) => b[sortBy] - a[sortBy]);
      } else {
        sortedData.sort((a, b) => a[sortBy] - b[sortBy]);
      }
    } else {
      if (sortType == 1) {
        sortedData.sort((a, b) => (b[sortBy] < a[sortBy] ? 1 : -1));
      } else {
        sortedData.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));
      }
    }
    setData([...sortedData]);
  }

  /*variables to control the visibility of the
  popup cards (sort and filter cards)
   */
  const handleCloseSortPopup = () => {
    setShowSortingPopup(false);
  };
  const handleCloseFilterPopup = () => {
    setShowFilterPopup(false);
  };

  /*function takes three parameters to filter the ogdata from API.
  result will be the basis for the filtering.
  if category is provided, filter item by categoy
  if min price is provided, filter price that is >= to provided price
  if max price is provided, filter price that is <= to provided price 
   */
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
      {/*these are event handlers to close sort and filter popups

      
      */}
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
      {/*snippet to render the card  */}
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

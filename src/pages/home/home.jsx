import { useEffect, useState } from "react";
import Card from "../../components/cards/cards";
import axios from "axios";
import SortPopup from "../../components/sort-popup/sort-popup";

function Home() {
  const [ogdata, setOgData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
    setOgData(res.data);
  };

  function customeSort(sortBy, sortType) {
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

  return (
    <>
      <SortPopup customeSort={customeSort} />
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

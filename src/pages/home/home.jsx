import { useEffect, useState } from "react";
import Card from "../../components/cards/cards";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };
  return (
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
  );
}

export default Home;

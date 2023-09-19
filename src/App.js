import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App() {
  const recieveData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Child sendDatatoParent={recieveData} />
    </div>
  );
}
function Child({ sendDatatoParent }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    apiresult();
  }, []);
  const apiresult = async () => {
    await axios
      .get("https://dummyjson.com/products?limit=100")
      .then((response) => {
        setProducts(response.data.products);
        sendDatatoParent(response.data.products);
      });
  };

  return (
    <div className="App">
      {products.map((item, index) => {
        return (
          <div key={index} className="Products_images">
            <img src={item.thumbnail} alt="photoData" />
            <li>Product : {item.title}</li>
            <li>Discount : {item.discountPercentage}%</li>
            <li>Price :${item.price}</li>
            <li>rating : {item.rating}</li>
            <li>About : {item.description}</li>
          </div>
        );
      })}
    </div>
  );
}

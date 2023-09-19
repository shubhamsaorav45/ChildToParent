import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    apiresult();
  }, []);
  const apiresult = async () => {
    await axios
      .get("https://dummyjson.com/products")
      .then((response) => setResult(response.data));
  };
  console.log(result);
  return (
    <div className="App">
      <ul>
        {result.map((item, index) => {
          return (
            <div key={index}>
              <li>{item.thumbnail}</li>
              <li>{item.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

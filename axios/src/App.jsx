import React from "react";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [userdata, setuserdata] = useState([  ]);
  let apidata = async () => {
    let datas = await axios.get("https://fakestoreapi.com/products");
    setuserdata(datas.data);
  };
  console.log(userdata);
  return (
    <div>
      <button onClick={() => apidata()}>Get Data</button>

      {userdata.map((elem) => {
       return <div className="div">
          <h1>{elem.category}</h1>
          <p>{elem.description}</p>
          <p>{elem.price}</p>
        </div>  
      })}
    </div>
  );
};

export default App;

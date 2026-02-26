import React, { useContext } from "react";
import { Mystore } from "../UseContext";

import "../index.css";
const ProductsCard = () => {
  let { data, setData } = useContext(Mystore);


  const products = [
    {
      id: 1,
      name: "Keyboard",
      price: 1200,
    },
    {
      id: 2,
      name: "Mouse",
      price: 800,
    },
    {
      id: 3,
      name: "Monitor",
      price: 15000,
    },
    {
      id: 4,
      name: "Phone",
      price: 2500,
    },
  ];
   
  let {wish,setWish} = useContext(Mystore)  
  
 function cartData(e){       
  setData([...data,e])
}
function wishStore(e){
  setWish([...wish,e])

}


  return (
    <div className="productcard">
      {products.map((e) => {
        // console.log(e)
        return (
          <div className="card1" key={e.id}>
            <h1>{e.name}</h1>
            <p>{e.price}</p>
            <div className="btn">
              <button className="addcard" onClick={()=>cartData(e)}>Add Cart</button>
              <button className="wishlist"onClick={()=>wishStore(e)}>Wishlist</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCard;

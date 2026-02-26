import React, { useContext } from "react";
import "../index.css";
import { Mystore } from "../UseContext";

const Cart = () => {
  let total = 0;
  let { data, setData } = useContext(Mystore);

  data.forEach((val) => {
    total = total + val.price;
  });

  function remove(v) {
    let d = data.filter((r) => r.id !== v);
    console.log(d)
    setData(d);
  }
  function incree(v){
    
  } // incree

  return (
    <div className="cart">
      <h1>Cart</h1>
      {data.map((v) => {
        return (
          <div className="cart-data" key={v.id}>
            <h5>{v.name}</h5> 
            <div className="right">
              <p className="cou"onClick={()=>v.price}>-</p>
              <p>1</p>
              <p className="cou" onClick={()=>incree(v)}>+</p>    
              <button>Delete</button>   
            </div>
          </div>
        );
      })}
      <div className="cash">
        <p>Total: {total}</p>
      </div>
    </div>
  );
};

export default Cart;

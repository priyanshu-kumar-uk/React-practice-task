import React from "react";

const Cart = ({ arrd ,remove,update}) => {
  return (
    <div>
       {arrd.map((value,idx) => {
        return <div key={idx} className="cart">
          <h4>Name : {value.name}</h4>
          <p>Age : {value.age}</p>
          <div className="btn">
            <button onClick={()=>update(value,idx)}>Update</button>
            <button onClick={()=>{remove(idx)}}>Delete</button>
          </div>
        </div>;
      })}
    
    </div>
  );
};

export default Cart;

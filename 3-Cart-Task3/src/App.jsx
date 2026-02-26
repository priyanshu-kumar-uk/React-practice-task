import React from "react";
import Header from "./Component/Header";
import Products from "./Component/Products";
import Cart from "./Component/Cart";
import WishlistItem from "./Component/WishlistItem";
import "./index.css";
import { UseContext } from "./UseContext";

const App = () => {
  
  return (
    <div className="main">
      <UseContext>
        <Header />
        <Products />
        <Cart />
        <WishlistItem />
      </UseContext>
    </div>
  );
};

export default App;

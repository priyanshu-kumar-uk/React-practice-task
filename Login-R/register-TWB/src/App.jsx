import React from "react";
import Login from "./Component/Login";
import Register from "./Component/Register.jsx";

const App = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center ">
        <Login  />
        <Register  />
    </div>
  );
};

export default App;

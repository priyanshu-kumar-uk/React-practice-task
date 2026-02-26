import React from "react";
import Login from "./Component/Login";
import Register from "./Component/Register.jsx";
import { useState } from "react";  

const App = () => {
  const [handle, setHandle] = useState(true);
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      {handle ? (
        <Login setHandle={setHandle} />
      ) : (
        <Register setHandle={setHandle} />
      )}
    </div>
  );
};

export default App;

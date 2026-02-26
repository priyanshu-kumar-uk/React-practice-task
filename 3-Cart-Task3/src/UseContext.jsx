import { createContext, useState } from "react";

export let Mystore = createContext();

export let UseContext = function ({ children }) {
  const [data, setData] = useState([]);
  const [wish, setWish] = useState([])

  return (
    <Mystore.Provider value={{ data, setData,wish,setWish }}>{children}</Mystore.Provider>
  );
};

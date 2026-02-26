import React, { useState } from "react";
import Cart from "./Components/Cart";

const App = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  const [arrd, setarrd] = useState([])

  function formSubmit(e){
      e.preventDefault()
      let newdata = [...arrd,data]
      setarrd(newdata)
      console.log(newdata) 
  }

  function handleData(d){
    let{name,value}=  d.target
    let arr = {...data,[name]:value}
    setData(arr)
  }

  function remove(idx){
    // let delet = [...arrd]
   
    // delet.splice(idx,1)

   let newarr = arrd.filter((items,index)=>{
    return index!==idx
  })  
   setarrd(newarr)
  }

  function update(idex){
      
    setarrd((prev)=>{
        prev.map((item,idx)=>idx===idex?{...item,...data}:item)
    })

  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={data.name}
          name="name"
          placeholder="Enter your name"
          onChange={handleData}
        />
        <input
          type="text"
          name="age"
          value={data.age}
          placeholder="Enter your age"
          onChange={handleData}
        />

        <button>Submit</button>
      </form>
      <Cart arrd = {arrd} remove = {remove} update = {update}/>
    </div>
  );
};

export default App;

import React from "react";
import { useState } from "react";
const Login = () => {

    const [login, setlogin] = useState(

        {
            email:"",
            password:"",
        }
    )

let data = JSON.parse(localStorage.getItem("Users"))                 //mai data ko usestate mai k=hi kyo nikalta hu by not used this type
let[{email,password}]= data

function submitHandle(e){
    e.preventDefault()

    if(login.email===email && login.password===password){
        alert("User Login Succesfully")
        return
    }else{
        alert("User Not Found")
    }
}



function loginData(d){
    setlogin({...login,[d.target.name]:d.target.value})
}





  return (
    <div className=" border-xl h-70 w-70 bg-gray-300 flex flex-col gap-4 items-center mr-10">
      <form
        className=" border-xl h-70 w-70 bg-gray-300 flex flex-col gap-4 items-center"
        onSubmit={(e)=>submitHandle(e)}
      >
        <h1 className="text-black font-bold text-xl">Login</h1>

        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Email</h1>

          <input
            className="border text-sm p-1 rounded"
            type="Email"
            placeholder="Enter Your Email"
            name="email"
            value={login.email}
            onChange={(d)=>loginData(d)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Password</h1>

          <input
            className="border text-sm p-1 rounded"
            type="text"
            placeholder="Enter Your Password"
            name="password"
            value={login.password}
            onChange={(d)=>loginData(d)}
            
          />
        </div>

        <div className="flex gap-3">
          <button className=" rounded bg-blue-700 text-white pt-2 pl-3 pr-3 pb-2 text-sm">
            Login
          </button>


          <button
            type="button"
            className=" rounded bg-blue-700 text-white pt-2 pl-3 pr-3 pb-2 text-sm"
          >
            Register
          </button>
        </div>
      </form>

    </div>
  );
};

export default Login;

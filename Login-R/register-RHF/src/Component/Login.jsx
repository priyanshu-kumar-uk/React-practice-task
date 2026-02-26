import React from "react";
import { useForm } from "react-hook-form";
import{useState} from "react"
const Login = () => {


let{register,handleSubmit,reset,formState:{errors}}=useForm()

let locald = JSON.parse(localStorage.getItem("Users"))
 
let[{email,password}] = locald

function formHandle(data){
    
    if(data.email===email && data.password===password){
        alert("User login")
        return
    }else{
        alert("User Not  Found")
    }

            reset()

}


  return (
    <div className=" border-xl h-70 w-70 bg-gray-300 flex flex-col gap-4 items-center mr-10">
      <form
        className=" border-xl h-70 w-70 bg-gray-300 flex flex-col gap-4 items-center"
        onSubmit={handleSubmit(formHandle)}
      >
        <h1 className="text-black font-bold text-xl">Login</h1>

        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Email</h1>
      
          <input
            className="border text-sm p-1 rounded"
            type="Email"
            placeholder="Enter Your Email"
            {...register("email",{required:"Enter Valid Email"})}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Password</h1>

          <input
            className="border text-sm p-1 rounded"
            type="text"
            placeholder="Enter Your Password"
            {...register("password",{required:"Enter Valid Email"})}
            
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

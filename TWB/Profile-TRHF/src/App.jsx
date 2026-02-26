import React from "react"
import { useState } from "react"
import {useForm} from "react-hook-form"
const App = () => {

 let{register,handleSubmit,reset,watch,formState:{errors}}=useForm()
  
  let live = watch()

  let locald = JSON.parse(localStorage.getItem("Users"))||[]

 const [users, setUsers] = useState([])

   function submitForm(data){
     
   let newarr = [...users,data]
    setUsers(newarr)
   
    localStorage.setItem("Users",JSON.stringify(newarr))
    alert("ID Created Succesfully")
    reset()
    }
   return (

      
    <div className='h-screen w-full bg-gray-200 flex items-center justify-center  gap-15'>
        

        <form 
        className='bg-gray-400 shadow-2xl shadow-black w-fit h-fit p-10 flex flex-col items-center gap-4' 
        onSubmit={handleSubmit(submitForm)}
        
        >

          <input 
          className='bg-white text-black p-2 rounded outline-none border'
          type="text"
          placeholder='Enter Your Email' 
          {...register("name",{required:"Enter Valid Name !!"})}
          /> 
           {errors.name&&<p className = "text-red-700"> {errors.name.message}</p>}
          <input 
          className='bg-white text-black p-2 rounded outline-none border'
          type="text"
          placeholder='Enter yorr email'
           {...register("email",{required:"Please Enter Valid Email !!"})}
          />
          {errors.email&&<p className = "text-red-700">{errors.email.message} </p>}

          <button className='bg-blue-600 text-white  w-fit pt-1 pb-1 pr-2 pl-2 rounded cursor-pointer'>Submit</button>
        </form>
         

        <div className="bg-red-400 text-black shadow-2xl shadow-black w-fit h-fit p-6 rounded-2xl flex flex-col  gap-4 ">
          <div className="username flex gap-2  text-1xl font-bold">
             <h2>Name :
              {live.name || locald.map((v)=> v.name)} </h2>
             <p></p>
          </div>
          <div className="email flex gap-2 text-1xl font-bold">
              <h2>Email :
                {live.email || locald.map((v)=>v.email)} </h2>
             <p></p>
          </div>
        </div>

    </div>
  )
}

export default App
import{useForm} from 'react-hook-form'
import { useState } from 'react';
const Register = () => {
 
   
    let{register,handleSubmit,reset,formState:{errors}} = useForm()
  
    const [users, setUsers] = useState([])



    function formHandle(data){
        let newarr = [...users,data]
        setUsers(newarr)
        
        localStorage.setItem("Users",JSON.stringify(newarr))

        reset()
        alert("Account Created Succesfully")
    }

  return (
    <div className=" border-xl h-fit p-3 w-70 bg-gray-300 flex flex-col gap-4 items-center">
      <form
        className=" border-xl h-fit p-3 w-70 bg-gray-300 flex flex-col gap-4 items-center"
        onSubmit={handleSubmit(formHandle)}
      >
        <h1 className="text-black font-bold text-xl">Register</h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">username</h1>

          <input
            className="border text-sm p-1 rounded"
            type="text"
            placeholder="Enter Your Name"
            {...register("name",{required:"Enter Valid Name"})}
          />
         
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Email</h1>

          <input
            className="border text-sm p-1 rounded"
            type="email"
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
            {...register("password",{required:"Enter Valid password"})}
            
          />

        </div>


             {/* btn */}
        <div className="flex gap-3">
          <button className="  rounded bg-blue-700 text-white pt-2 pl-3 pr-3 pb-2 text-sm cursor-pointer">
            Register
          </button>

          <button
            className=" rounded bg-blue-700 text-white pt-2 pl-3 pr-3 pb-2 text-sm"
            type="button"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

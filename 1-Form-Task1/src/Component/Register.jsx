import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = ({ setHandle }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState([]);

  function onSubmit(data) {
    let newarr = [...users, data];
    setUsers(newarr);
    localStorage.setItem("user-info", JSON.stringify(newarr));

    alert("Register susccesfully")
            reset()
   
  }

  return (
    <div className=" border-xl h-fit p-3 w-70 bg-gray-300 flex flex-col gap-4 items-center">
      <form
        className=" border-xl h-fit p-3 w-70 bg-gray-300 flex flex-col gap-4 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-black font-bold text-xl">Register</h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">username</h1>
          <input
            className="border text-sm p-1 rounded"
            type="text"
            placeholder="Enter Your Name"
            {...register("name", { required: "Username is required" })}
          />
         
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
         
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Email</h1>
          <input
            className="border text-sm p-1 rounded"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", { required: "Email is required" })}

          />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Password</h1>
          <input
            className="border text-sm p-1 rounded"
            type="text"
            placeholder="Enter Your Password"
            {...register("password", { required: "Password is required",
                minLength:{
                    value:6,
                    message:"Enter atleast 6 characters"
                    

            } })}   /*Doutes pass */
          />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        </div>


             {/* btn */}
        <div className="flex gap-3">
          <button className="  rounded bg-blue-700 text-white pt-2 pl-3 pr-3 pb-2 text-sm">
            Register
          </button>
          <button
            className=" rounded bg-blue-700 text-white pt-2 pl-3 pr-3 pb-2 text-sm"
            type="button"
            onClick={() => setHandle((prev) => !prev)}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

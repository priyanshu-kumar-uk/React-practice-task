import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = ({ setHandle }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("user-info")) || [],
  );

  const [username, setUsername] = useState("");

  // let[{email,password,name}]  = userinfo

  function loginForm(data) {
    let user = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

     setUsername(users.name)

    reset();

    alert("Login Successful");
  }

  return (
    <div className=" border-xl h-70 w-70 bg-gray-300 flex flex-col gap-4 items-center">
      <form
        className=" border-xl h-70 w-70 bg-gray-300 flex flex-col gap-4 items-center"
        onSubmit={handleSubmit(loginForm)}
      >
        <h1 className="text-black font-bold text-xl">Login</h1>

        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Email</h1>
          <input
            className="border text-sm p-1 rounded"
            type="Email"
            placeholder="Enter Your Email"
            {...register("email", { required: "Enter valid Email" })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">Password</h1>
          <input
            className="border text-sm p-1 rounded"
            type="text"
            placeholder="Enter Your Password"
            {...register("password", { required: "Enter valid password" })}
          />
        </div>

        <div className="flex gap-3">
          <button className=" rounded bg-blue-700 text-white pt-2 pl-3 pr-3 pb-2 text-sm">
            Login
          </button>

          <button
            className=" rounded bg-blue-700 text-white pt-2 pl-3 pr-3 pb-2 text-sm"
            onClick={() => setHandle((prev) => !prev)}
          >
            Register
          </button>
        </div>
      </form>

      {username && <p className="text-2xl font-bold ">{username}</p>}
    </div>
  );
};

export default Login;

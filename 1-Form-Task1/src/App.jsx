import React from "react";
import "./Userref.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Using  React Hook form 

const App = () => {
  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  let values = watch();

  
   
  function submitHandle(data){
    console.log(data)

  }

  

  return (
    <div className="main">
      <div className="left-form">
        <form onSubmit={handleSubmit(submitHandle)}>
          {/* name detail */}
          <input
            name="name"
            type="text"
            placeholder="Enter your Name"
            {...register("name", { required: "Username is required" })}
          />
          <input
            name="email"
            type="text"
            placeholder="Enter your Email"
            {...register("email", { required: "email is required" })}
          />
          <input
            name="age"
            type="text"
            placeholder="Enter Your Age"
            {...register("age", { required: "age is required" })}
          />
          {/* gender */}
          <select {...register("Gender", { required: "select is required" })}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {/* skills */}
          <label>Skills</label>

          <label>
            <input value="React" type="checkbox" {...register("skills")} />
            React
          </label>
          <label>
            <input value="Express" type="checkbox" {...register("skills")} />
            Express
          </label>
          <label>
            <input value="Mongo" type="checkbox" {...register("skills")} />
            Mongo
          </label>
          <label>
            <input value="node" type="checkbox" {...register("skills")} />
            Node
          </label>

          {/* another*/}

          <input
            type="number"
            placeholder="Experience (Year)"
            {...register("year", { required: "year is required" })}
          />

          <input
            className="picture"
            type="file"
            placeholder="Choose File"
            {...register("file")}
          />

          <textarea defaultValue="Hello world" {...register("bio")} />

          <button>Submit</button>
        </form>
      </div>

      <div className="right-profile">
        <div className="img">
          <img
            src={values.file?.[0] ? URL.createObjectURL(values.file[0]) : ""}
            alt=""
          />
        </div>
        <div className="data">
          <h2>Name : {values.name}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Email : {values.email}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Age : {values.age}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Gender :{values.Gender}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Skills :{values.skills + ", "}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Experience : {values.year + " "}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Bio : {values.bio}</h2>
          <p></p>
        </div>
      </div>
    </div>  
  );
};

export default App;

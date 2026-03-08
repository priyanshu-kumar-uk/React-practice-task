import React from "react";
import { useForm } from "react-hook-form";
const App = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function formhandle(data) {
    console.log(data);
    reset();
  }
  return (
    <div className="main">
      <form onSubmit={handleSubmit(formhandle)}>
        <input
          type="text"
          placeholder="Enter Your Name"
          {...register("name", {
            required: "Name is Reuired",
            minLength: {
              value: 3,
              message: "Minimam 3 length required",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <input
          type="text"
          placeholder="Enter Your Email"
          {...register("email", {
            required: "Email is Reuired",z
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="text"
          placeholder="Enter Your Age"
          {...register("age", {
            required: "age is Reuired",
            min: { value: 18, message: "minimam age 18" },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

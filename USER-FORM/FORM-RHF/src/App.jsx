import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";
  const App = () => {
   
     let{register,handleSubmit,reset,watch,formState:{errors}}=useForm()


     let live = watch()
     function dataHandle(data){
       console.log(data)
    }
  

    return (
    <div className="main">
      <div className="left-form">
        <form onSubmit={handleSubmit(dataHandle)} >

          {/* name detail */}
          <input
            type="text"
            placeholder="Enter your Name"
            {...register("name",{required:"Enter Valid name"})}
          />
          {errors.name&&<p>{errors.name.message}</p>}
          <input
            type="text"
            placeholder="Enter your Email"
            {...register("email",{required:"Enter Valid email"})}

          />
          {errors.email&&<p>{errors.email.message}</p>}

          <input
            type="text"
            placeholder="Enter Your Age"
            {...register("age",{required:"Enter Valid age"})}

          />
          {errors.age&&<p>{errors.age.message}</p>}

          {/* gender */}
          <select  
            {...register("gender",{required:"Enter Valid name"})}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {/* skills */}
          <label>Skills</label>

          <label>
            <input
             type="checkbox"
            {...register("skills")}
             
             />
            React
          </label>

          <label>
            <input
             type="checkbox" 
            {...register("skills")}
             
             />
            Express
          </label>

          <label>
            <input
             type="checkbox"
            {...register("skills")}
              
              />
            Mongo
          </label>

          <label>
            <input
             type="checkbox"
            {...register("skills")}
              
              />
            Node
          </label>

          {/* another*/}

          <input
            type="number"
            // name="experience"
            placeholder="Experience (Year)"
            {...register("experience",{required:"Enter Valid experience"})}

          />

          <input
            className="picture"
            type="file"
            placeholder="Choose File"
            {...register("picture")}

          />

          <textarea 
          //  name="bio"         
           defaultValue="Hello world"
            {...register("bio",{required:"Enter Valid bio"})}

          />

          <button>Submit</button>
        </form>
      </div>

      <div className="right-profile">
        <div className="img">
          <img src={live.picture?.[0] ? URL.createObjectURL(live.picture[0]) : ""} alt="" />   
        </div>
        <div className="data">
          <h2>Name : {live.name} </h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Email : {live.email}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Age :{live.age} </h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Gender : {live.gender}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Skills : {live.skills} </h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Experience : {live.experience}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Bio : {live.bio} </h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default App;






import React from "react";
import "./index.css";
import { useState } from "react";

  const App = () => {
    const [data, setData] = useState(
      {
        name:"",
        email:"",
        age:Number(""),
        gender:"",
        skills:[],
        experience:"",
        picture:"",
        bio:"",
      }
    );

    

    function formHandle(v){
    let{name,value} = v.target
      setData({...data,[name]:value})
      console.log(data.picture)
      // data.skills.push(data.skills.forEach((v)=>console.log(v)))
    }

    // used to understood
    const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    setData(prev => {
    let updatedSkills = [...prev.skills];

    if (checked) {
      updatedSkills.push(value);
    } else {
      updatedSkills = updatedSkills.filter(skill => skill !== value);
    }

    return { ...prev, skills: updatedSkills };
  });
};

    return (
    <div className="main">
      <div className="left-form">
        <form>
          {/* name detail */}
          <input
          
            name="name"
            type="text"
            placeholder="Enter your Name"
            value={data.name}
            onChange={(v) =>formHandle(v)}
          />
          <input
            value={data.email}
            name="email"
            type="text"
            placeholder="Enter your Email"
            onChange={(v) => formHandle(v)}
          />
          <input
            name="age"
            type="text"
            placeholder="Enter Your Age"
            value={data.age}
            onChange={(v) => formHandle(v)}
          />
          {/* gender */}
          <select name="gender" onChange={(v) => formHandle(v)}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {/* skills */}
          <label>Skills</label>

          <label>
            <input
             name="skills"
             value="React" 
             type="checkbox"
             onChange={(e) =>handleCheckbox(e)} 
             
             />
            React
          </label>

          <label>
            <input
             name="skills"
             value="Express"
             type="checkbox" 
             onChange={(e) => handleCheckbox(e)} 
             
             />
            Express
          </label>

          <label>
            <input
             value="Mongo" 
             name="skills"
             type="checkbox"
             onChange={(e) => handleCheckbox(e)} 
              
              />
            Mongo
          </label>

          <label>
            <input
             value="node" 
             name="skills"
             type="checkbox"
             onChange={(e) => handleCheckbox(e)}
              
              />
            Node
          </label>

          {/* another*/}

          <input
            type="number"
            value={data.experience}
            name="experience"
            placeholder="Experience (Year)"
            onChange={(v) => formHandle(v)}
          />

          <input
            className="picture"
            type="file"
            // value={data.picture}
            name="picture"
            placeholder="Choose File"
            onChange={(v) => formHandle(v)}
          />

          <textarea 
           value={data.bio}         // input write from to see data
           name="bio"         // find 
           defaultValue="Hello world"
           onChange={(v) => formHandle(v)} />

          <button>Submit</button>
        </form>
      </div>

      <div className="right-profile">
        <div className="img">
          <img src={data.picture?.[0]? URL.createObjectURL(data.picture[0]):""} alt="" />    
        </div>
        <div className="data">
          <h2>Name : {data.name} </h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Email :{data.email} </h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Age : {data.age}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Gender {data.gender}:</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Skills : {data.skills}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Experience : {data.experience}</h2>
          <p></p>
        </div>
        <div className="data">
          <h2>Bio : {data.bio} </h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default App;




{
  let obj = {
    name:"priyanshu",
    data:"hiii",
    skills:["mango","apple"]
  }
  obj.skills.push("pineapple")
  console.log(obj)
}

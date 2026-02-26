import React from "react";
import { useForm } from "react-hook-form";
import { myContext } from "../DataContext";
import { useContext } from "react";

const Form = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let{formdata,setFormdata}= useContext(myContext)
  
  function submitForm(data) {
         setFormdata([...formdata,data])
         reset()
  }

  let { users } = useContext(myContext);
  let{toggle} = useContext(myContext)
  let{change,setChange}=useContext(myContext)

  return (
    <div className="forms">
      <div className="form-data">
        <div className="f-t">
          <h1>Create New Group</h1>
        <i class="ri-close-circle-line" onClick={()=>setChange(false)}></i>
        </div>
        <form className="grop-form" onSubmit={handleSubmit(submitForm)}>
          <div className="for-data">
            <div className="names">
              <h4>GROUP NAME</h4>
              <input
                type="text"
                placeholder="Enter group Name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="names">
              <h4>DECRIPTION</h4>
              <input
                type="text"
                placeholder="Enter Group decription"
                {...register("dec", { required: true })}
              />
            </div>
            <div className="memb">
              <h5>Add Members</h5>
              {users.map((val) => {
                return (
                  <div className="m">
                    <input
                    value={val.name}
                      type="checkbox"
                      {...register("members", { required: true })}
                    />
                    <p>{val.name===toggle.name? <p>You</p>:val.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="form-but">
              <button type="button" onClick={()=>setChange(false)}>Cancel</button>
              <button>Create Group</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

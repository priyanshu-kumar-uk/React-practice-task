import React from "react";
import "../index.css";
import { myContext } from "../DataContext";
import { useContext } from "react";
import Form from "./Form";
import { useForm } from "react-hook-form";

const Chat = () => {
  let { register, handleSubmit, reset } = useForm();
  const { change } = useContext(myContext);
  let { mesa, setMesa } = useContext(myContext);
  let { gname, setGname } = useContext(myContext);
  let { toggle, setToggle } = useContext(myContext);
  let { formdata, setFormdata } = useContext(myContext);
  
  function submitData(data) {
    setMesa([...mesa, data]);
    reset();
  }

  let da = {
        setFormdata :[mesa]
  }
  return (
    <div className="chat">
      <div className="nav">
        {gname.map((v) => {
          return <h4>{v.dec}</h4>;
        })}
        <i class="ri-menu-unfold-2-fill"></i>
      </div>
      <div className="chat-gap">
        {mesa.map((v) => {
          return (
            <div className="g-chat">
              <h5>{toggle.name}</h5>
              <p className="g-message">
                    {v.mess}
              </p>
              <div className="m-time">
                <p> {new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          );
        })}
      </div>
      {Object.keys(gname).length === 0? <p className="create-form">Create a group</p> : (
        <form onSubmit={handleSubmit(submitData)} className="chat-box">
          <input
            {...register("mess", { required: true })}
            placeholder="Type a message..."
          ></input>
          <button>Send</button>
        </form>
      )}
    </div>
  );
};

export default Chat;

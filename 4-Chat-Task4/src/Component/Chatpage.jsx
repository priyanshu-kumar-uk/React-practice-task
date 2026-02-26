import React from "react";
import "../index.css";
import Left from "./Left";
import Chat from "./Chat";
import Notification from "./Notification";
import Member from "./Member";
import Form from "./Form";
import { useContext } from 'react'
import { myContext } from "../DataContext";

const Chatpage = () => {  
  const {change} = useContext(myContext)
  return (
    <div className="page">
      <div className="left">
        <Left />
      </div>
      <div className="mid">
        <Chat />
      </div>
      {change&&(<Form/>)}
    </div>
  );
};

export default Chatpage;

//

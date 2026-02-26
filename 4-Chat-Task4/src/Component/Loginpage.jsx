import React from "react";
import "../index.css";
import { useContext } from "react";
import { myContext } from "../DataContext";

const Loginpage = () => {
  let { toggle, setToggle } = useContext(myContext);

  const users = [
    { id: 1, name: "Alice", status: "online" },
    { id: 2, name: "Bob", status: "online" },
    { id: 3, name: "Charlie", status: "online" },
    { id: 4, name: "David", status: "online" },
  ];

  

  function change(v){
     setToggle(v)
  }

  return (
    <div className="login">
      <div className="c">    
            <div className="card">
              <h1>Group Chat</h1>
              <p>Select a User to login</p>
              <div className="users">
                {
                    users.map((v)=>{
                      return  <div className="user" onClick={()=>change(v)}>
                          <h5>{v.name}</h5>
                           <p>{v.status}</p>
                         </div>
                    })
                }
              </div>
            </div>
        <button >Login as user</button>
      </div>
    </div>
  );
};

export default Loginpage;

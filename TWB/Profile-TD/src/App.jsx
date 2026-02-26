import React, { useState } from 'react'

const App = () => {

const [data, setData] = useState({
  name:"",
  email:"",
})

let locald = JSON.parse(localStorage.getItem("Users"))||[]

const [users, setUsers] = useState([])              /* data ka baad mai array mai save karte hue  */
     // Dynamic Methode
    function dataHandle(val){
      setData({...data,[val.target.name]:val.target.value})                                  //m-2    
      // let{name,value} = val.target    // M-1
      // setData({...data,[name]:value})   
    }

    function submitHandle(e){
       e.preventDefault()    
       let newarr = [...users,data]     
        setUsers(newarr)
       localStorage.setItem("Users",JSON.stringify( newarr))
    }

    

  return (

      
    <div className='h-screen w-full bg-gray-200 flex items-center justify-center  gap-15'>       
        <form 
        className='bg-gray-400 shadow-2xl shadow-black w-fit h-50 p-10 flex flex-col items-center gap-4' 
        onSubmit={(e)=>submitHandle(e)}
        >
          <input 
          className='bg-white text-black p-2 rounded outline-none border'
          type="text"
          placeholder='Enter Your Email' 
          // value={data.name}
          name='name'
          onChange={(val)=>dataHandle(val)}
          /> 

          <input 
          className='bg-white text-black p-2 rounded outline-none border'
          type="text"
          placeholder='Enter yorr email'
          // value={data.email}
          name='email'
          onChange={(val)=>dataHandle(val)}
          />

          <button className='bg-blue-600 text-white  w-fit pt-1 pb-1 pr-2 pl-2 rounded cursor-pointer'>Submit</button>
        </form>
         

        <div className="bg-red-400 text-black shadow-2xl shadow-black w-60 h-30 p-6 rounded-2xl flex flex-col  gap-4 ">
          <div className="username flex gap-2  text-1xl font-bold">
             <h2>Name :
              {data.name||locald.map((v)=>v.name)}
             
             </h2>
             <p></p>
          </div>
          <div className="email flex gap-2 text-1xl font-bold">
              <h2>Email : 
                {data.email||locald.map((v)=>v.email)}
                
                </h2>
             <p></p>
          </div>
        </div>

    </div>
  )
}

export default App
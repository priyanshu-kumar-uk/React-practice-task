import React from 'react'
import '../index.css'
import { useContext } from 'react'
import { myContext } from '../DataContext'

const Left = () => {

   let{toggle,setToggle}= useContext(myContext)
   let{change,setChange} =   useContext(myContext)
   let{formdata,setFormdata}= useContext(myContext)
   let{gname,setGname} = useContext(myContext)
   
   function fd(v){
     setGname([v])    
   }
  return (
    <div className='profile'>
        <div className="top-pro">
            <p className='profile-p'>{toggle.name}</p>
             <div className="profile-btn">
                <button onClick={()=> setChange(true)}> <span>New</span> Group</button>
            </div>
           <button onClick={()=>setToggle(null)}>Logout</button>
          
        </div>
       
      <div className="profile">
         <h4 className='h'>Groups</h4>
          {
            formdata.map((v)=>{
                return(
                    <div className="mem" onClick={()=>fd(v)}>
                        <p className='user-d'>{v.dec}</p>      
                        <p className='user-p'> Memebers - {v.members.length} </p>  
                    </div>
                )
            })
          }

      </div>
    </div>
  )
}

export default Left
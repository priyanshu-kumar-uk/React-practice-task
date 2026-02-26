import React from 'react'
import Loginpage from './Component/Loginpage'
import Chatpage from './Component/Chatpage'
import './index.css'
import { useContext } from 'react'
import { myContext } from './DataContext'

const App = () => {
 
   let{toggle} = useContext(myContext)
 
   let {}= useContext(myContext)

  return (
    <div className='main'>
       {
          toggle?<Chatpage/>:<Loginpage/>
       }
        
        
    </div>
  )
}

export default App
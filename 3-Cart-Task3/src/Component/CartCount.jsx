import React, { useContext } from 'react'
import '../index.css'
import { Mystore } from '../UseContext'


const CartCount = () => {

let{data} = useContext(Mystore)

  return (
    <div className='cartcount'>       
       <p> CartCount : {data.length}</p>
    </div>
  )
}

export default CartCount
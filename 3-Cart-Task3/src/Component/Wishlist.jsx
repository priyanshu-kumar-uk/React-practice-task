import React, { useContext } from 'react'
import '../index.css'
import { Mystore } from '../UseContext'


const Wishlist = () => {

let {wish,setWish}= useContext(Mystore)

  return (
    <div className='wishlist'>
   
   <p> Wishlist : {wish.length}</p>

    </div>
  )
}

export default Wishlist
import React, { useContext } from 'react'
import '../index.css'
import { Mystore } from '../UseContext';


const WishlistItem = () => {

let {wish,setWish} = useContext(Mystore)  
let {data,setData} =useContext(Mystore)

function remove(v){
  let data =  wish.filter((d)=>{
    return  d.id!==v
  })
  setWish(data)
}
function moveData(v){
  setData([...data,v])
}
  return (
    <div className='wishlist-data'>
        <h4>Wishlist</h4>  
        {
          wish.map((v)=>{
             return <div className="cart-wishlist" key={v.id}>
               <p>{v.name}</p>
               <div className="cart-btn">
                   <button className='btn1'onClick={()=>moveData(v) || remove(v.id)}>Move to Cart</button>
                   <button className='btn2'onClick={()=>remove(v.id)}>Remove</button>
               </div>
            </div>
          })
        }
    </div>
  )
}

export default WishlistItem